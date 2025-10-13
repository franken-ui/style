import { rules } from './runtime-rules';

(() => {
  type Breakpoints = Record<string, string>;

  const breakpoints: Breakpoints = {
    sm: '40rem',
    md: '48rem',
    lg: '64rem',
    xl: '80rem',
    '2xl': '96rem',
  };

  const states: string[] = [
    ':hover',
    ':active',
    ':focus',
    ':focus-within',
    ':target',
    ':checked',
    ':disabled',
  ];

  const classParser = new RegExp(
    `^(dark:)?(?:(${Object.keys(breakpoints).join('|')}):)?(.+)(${states.join('|')})$`,
  );

  const ruleCache = new Map<string, CssRule>();
  let scheduled: number | null = null;

  interface CssRule {
    css: string;
    layer: string;
    breakpoint: string | null;
  }

  interface ParsedClass {
    baseClass: string;
    state: string;
    fullClass: string;
    isDark: boolean;
    prefix: string | null;
  }

  interface RuleConfig {
    selector: string;
    properties: string | string[];
    values: string[];
    arbitrary?: boolean;
    placeholders?: Record<string, string>;
    layer?: string;
  }

  interface GeneratedCssLayer {
    base: string[];
    media: Record<string, string[]>;
  }

  interface GeneratedCSS {
    styles: GeneratedCssLayer;
    utilities: GeneratedCssLayer;
  }

  function escapeCssIdentifier(str: string): string {
    return str.replace(/([ !"#$%&'()*+,./:;<=>?@[\\\]^`{|}~])/g, '\\$1');
  }

  function normalizeClsClass(className: string): string {
    return className.replace(/\\:/g, ':');
  }

  function createCssVarName({
    isDark,
    prefix,
    name,
    state,
  }: {
    isDark: boolean;
    prefix: string | null;
    name: string;
    state: string;
  }): string {
    const parts = [
      isDark ? 'dark' : '',
      prefix,
      name.replace(/[^a-zA-Z0-9-]/g, ''),
      state.replace(':', ''),
    ];
    return `--${parts.filter(Boolean).join('-')}`;
  }

  function findStyleRule(selector: string): RuleConfig | null {
    return (
      (rules as RuleConfig[]).find(rule => rule.selector === selector) || null
    );
  }

  function buildCssRule({
    baseClass,
    fullClass,
    state,
    prefix,
    isDark,
  }: ParsedClass): CssRule | null {
    const config = findStyleRule(baseClass);

    if (!config) {
      console.warn(`Unknown class: "${baseClass}"`);
      return null;
    }

    const escapedSelector = `.${escapeCssIdentifier(fullClass)}${state}`;
    const selector = isDark ? `.dark ${escapedSelector}` : escapedSelector;
    const declarations: Record<string, string> = {};

    const props = Array.isArray(config.properties)
      ? config.properties
      : [config.properties];

    props.forEach((prop, i) => {
      if (config.arbitrary) {
        const varName = createCssVarName({
          isDark,
          prefix,
          name: baseClass,
          state,
        });
        declarations[prop] = `var(${varName})`;
      } else if (config.placeholders) {
        let value = config.values[i] || config.values[0];
        for (const [ph, name] of Object.entries(config.placeholders)) {
          const varName = createCssVarName({ isDark, prefix, name, state });
          value = value.replaceAll(ph, varName);
        }
        declarations[prop] = value;
      } else {
        declarations[prop] = config.values[i] || config.values[0];
      }
    });

    const declarationString = Object.entries(declarations)
      .map(([prop, val]) => `${prop}: ${val};`)
      .join(' ');

    return {
      css: `${selector} { ${declarationString} }`,
      layer: config.layer || 'styles',
      breakpoint: prefix ? breakpoints[prefix] : null,
    };
  }

  function extractInteractiveClasses(element: Element): ParsedClass[] {
    const interactiveClasses: ParsedClass[] = [];
    const classLists: { classes: string[] | DOMTokenList; fromCls: boolean }[] =
      [];

    if (element.classList.length > 0) {
      classLists.push({ classes: element.classList, fromCls: false });
    }

    if (element.hasAttribute('cls')) {
      const clsValue = element.getAttribute('cls') || '';
      const clsClasses = clsValue.split(/\s+/).filter(Boolean);
      classLists.push({ classes: clsClasses, fromCls: true });
    }

    classLists.forEach(({ classes, fromCls }) => {
      for (const className of Array.from(classes)) {
        const normalizedClass = fromCls
          ? normalizeClsClass(className)
          : className;
        const match = normalizedClass.match(classParser);

        if (match) {
          const [, dark, prefix, baseClass, state] = match;
          interactiveClasses.push({
            baseClass,
            state,
            fullClass: normalizedClass,
            isDark: !!dark,
            prefix: prefix || null,
          });
        }
      }
    });

    return interactiveClasses;
  }

  function generateInteractiveStyles(): void {
    const nodes = document.querySelectorAll('[data-fr]');
    const allInteractiveClasses: ParsedClass[] = [];

    nodes.forEach(node => {
      allInteractiveClasses.push(...extractInteractiveClasses(node));
    });

    const generatedCss: GeneratedCSS = {
      styles: { base: [], media: {} },
      utilities: { base: [], media: {} },
    };

    allInteractiveClasses.forEach(parsedClass => {
      const { fullClass, state, isDark, prefix } = parsedClass;
      const ruleKey = `${fullClass}${state}${isDark ? '-dark' : ''}${prefix || ''}`;

      if (ruleCache.has(ruleKey)) return;

      const rule = buildCssRule(parsedClass);
      if (!rule) return;

      ruleCache.set(ruleKey, rule);

      const layer = rule.layer as keyof GeneratedCSS;

      if (rule.breakpoint) {
        const mediaBucket = generatedCss[layer].media;
        mediaBucket[rule.breakpoint] = mediaBucket[rule.breakpoint] || [];
        mediaBucket[rule.breakpoint].push(rule.css);
      } else {
        generatedCss[layer].base.push(rule.css);
      }
    });

    const buildLayer = (
      layerName: string,
      { base, media }: GeneratedCssLayer,
    ): string => {
      const mediaQueries = Object.entries(media)
        .map(
          ([size, rules]) =>
            `@media (min-width: ${size}) {\n  ${rules.join('\n  ')}\n}`,
        )
        .join('\n');
      const content = [...base, mediaQueries].filter(Boolean).join('\n');
      return content ? `@layer ${layerName} {\n${content}\n}` : '';
    };

    const finalCss = [
      buildLayer('styles', generatedCss.styles),
      buildLayer('utilities', generatedCss.utilities),
    ]
      .filter(Boolean)
      .join('\n\n');

    requestAnimationFrame(() => {
      let styleTag = document.getElementById(
        'fr-interactive-styles',
      ) as HTMLStyleElement | null;

      if (!styleTag) {
        styleTag = document.createElement('style');
        styleTag.id = 'fr-interactive-styles';
        document.head.appendChild(styleTag);
      }

      styleTag.textContent = finalCss;
    });
  }

  function scheduleGenerate(): void {
    if (scheduled) {
      clearTimeout(scheduled);
    }

    scheduled = window.setTimeout(generateInteractiveStyles, 50);
  }

  function handleMutations(mutationsList: MutationRecord[]): void {
    for (const mutation of mutationsList) {
      if (
        mutation.type === 'attributes' &&
        (mutation.attributeName === 'class' ||
          mutation.attributeName === 'cls' ||
          mutation.attributeName === 'data-fr')
      ) {
        scheduleGenerate();
        return;
      }

      if (mutation.type === 'childList') {
        for (const node of [...mutation.addedNodes, ...mutation.removedNodes]) {
          if (
            node.nodeType === 1 &&
            ((node as Element).hasAttribute?.('data-fr') ||
              (node as Element).querySelector?.('[data-fr]'))
          ) {
            scheduleGenerate();
            return;
          }
        }
      }
    }
  }

  function init(): void {
    // Step 1: Always generate styles once (for all [data-fr] elements)
    generateInteractiveStyles();

    // Step 2: Only activate MutationObserver if [data-fr-reactive] exists
    const hasReactive = document.querySelector('[data-fr-reactive]');
    if (!hasReactive) {
      console.info(
        '[fs] No [data-fr-reactive] found — reactive mode disabled.',
      );
      return;
    }

    const observer = new MutationObserver(handleMutations);
    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['data-fr', 'class', 'cls'],
    });

    (window as any).__fsInteractive = {
      regenerate: generateInteractiveStyles,
      stop: () => observer.disconnect(),
      getCache: () => ruleCache,
    };

    window.addEventListener('beforeunload', () => observer.disconnect());
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
