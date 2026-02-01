import { rules as defaultRules } from './runtime-rules';

// Ensure window.FS exists immediately for module consumers
if (typeof window !== 'undefined') {
  (window as any).FS = (window as any).FS || {};
}

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
  let isGenerating = false; // Prevent concurrent generation

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

  // Merge default rules with custom rules
  function getMergedRules(): RuleConfig[] {
    const customRules = (window as any).FS?.customRules || [];

    if (!Array.isArray(customRules)) {
      console.warn(
        '[fs] FS.customRules must be an array. Ignoring custom rules.',
      );
      return defaultRules as RuleConfig[];
    }

    // Validate custom rules
    const validatedCustomRules = customRules.filter((rule: any) => {
      if (!rule.selector || typeof rule.selector !== 'string') {
        console.warn(
          '[fs] Custom rule missing or invalid "selector" property:',
          rule,
        );
        return false;
      }
      if (!rule.properties) {
        console.warn('[fs] Custom rule missing "properties" property:', rule);
        return false;
      }
      if (!rule.arbitrary && (!rule.values || !Array.isArray(rule.values))) {
        console.warn(
          '[fs] Non-arbitrary custom rule missing or invalid "values" array:',
          rule,
        );
        return false;
      }
      return true;
    });

    // Merge rules: custom rules override default rules with the same selector
    const merged = [...(defaultRules as RuleConfig[])];

    validatedCustomRules.forEach((customRule: RuleConfig) => {
      const existingIndex = merged.findIndex(
        r => r.selector === customRule.selector,
      );
      if (existingIndex !== -1) {
        console.info(
          `[fs] Overriding default rule for selector: "${customRule.selector}"`,
        );
        merged[existingIndex] = customRule;
      } else {
        merged.push(customRule);
      }
    });

    return merged;
  }

  const rules = getMergedRules();

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
    return rules.find(rule => rule.selector === selector) || null;
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

  /**
   * Parse a class name string into a ParsedClass object
   */
  function parseClassName(className: string): ParsedClass | null {
    const normalizedClass = normalizeClsClass(className);
    const match = normalizedClass.match(classParser);

    if (!match) {
      return null;
    }

    const [, dark, prefix, baseClass, state] = match;
    return {
      baseClass,
      state,
      fullClass: normalizedClass,
      isDark: !!dark,
      prefix: prefix || null,
    };
  }

  /**
   * Get safelist classes from window.FS.safelist
   */
  function getSafelistClasses(): ParsedClass[] {
    const safelist = (window as any).FS?.safelist;

    if (!safelist) {
      return [];
    }

    if (!Array.isArray(safelist)) {
      console.warn('[fs] FS.safelist must be an array. Ignoring safelist.');
      return [];
    }

    const parsedClasses: ParsedClass[] = [];

    safelist.forEach((item: any) => {
      if (typeof item === 'string') {
        const parsed = parseClassName(item);
        if (parsed) {
          parsedClasses.push(parsed);
        } else {
          console.warn(`[fs] Invalid safelist class: "${item}"`);
        }
      } else if (typeof item === 'object' && item !== null) {
        // Support object format: { class: 'btn', states: [':hover', ':active'] }
        const baseClass = item.class || item.className;
        if (!baseClass || typeof baseClass !== 'string') {
          console.warn('[fs] Safelist object missing "class" property:', item);
          return;
        }

        const itemStates = item.states || [];
        const itemPrefixes = item.prefixes || [null];
        const itemDarkModes = item.dark === true ? [false, true] : [false];

        // Generate all combinations
        itemDarkModes.forEach(isDark => {
          itemPrefixes.forEach((prefix: any) => {
            itemStates.forEach((state: any) => {
              // Construct the full class name
              let fullClass = baseClass;
              if (prefix) fullClass = `${prefix}:${fullClass}`;
              if (isDark) fullClass = `dark:${fullClass}`;

              parsedClasses.push({
                baseClass,
                state,
                fullClass,
                isDark,
                prefix: prefix || null,
              });
            });
          });
        });
      } else {
        console.warn('[fs] Invalid safelist entry:', item);
      }
    });

    return parsedClasses;
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
    // Prevent concurrent execution
    if (isGenerating) {
      return;
    }

    isGenerating = true;

    // Clear the scheduled timeout since we're executing now
    if (scheduled !== null) {
      clearTimeout(scheduled);
      scheduled = null;
    }

    try {
      const nodes = document.querySelectorAll('[data-fs]');
      const allInteractiveClasses: ParsedClass[] = [];

      nodes.forEach(node => {
        allInteractiveClasses.push(...extractInteractiveClasses(node));
      });

      // Add safelist classes
      const safelistClasses = getSafelistClasses();
      allInteractiveClasses.push(...safelistClasses);

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

      // Use synchronous DOM update instead of requestAnimationFrame
      let styleTag = document.getElementById(
        'uk-interactive-styles',
      ) as HTMLStyleElement | null;

      if (!styleTag) {
        styleTag = document.createElement('style');
        styleTag.id = 'uk-interactive-styles';
        // Add attribute to prevent observer from reacting to this
        styleTag.setAttribute('data-fs-managed', 'true');
        document.head.appendChild(styleTag);
      }

      styleTag.textContent = finalCss;
    } finally {
      isGenerating = false;
    }
  }

  function scheduleGenerate(): void {
    // Don't schedule if already generating
    if (isGenerating) {
      return;
    }

    if (scheduled !== null) {
      clearTimeout(scheduled);
    }

    scheduled = window.setTimeout(() => {
      scheduled = null;
      generateInteractiveStyles();
    }, 50);
  }

  function shouldIgnoreMutation(target: Node): boolean {
    if (!(target instanceof Element)) {
      return false;
    }

    // Ignore our managed style tag
    if (target.hasAttribute?.('data-fs-managed')) {
      return true;
    }

    // Ignore elements marked with data-fs-ignore
    if (target.hasAttribute?.('data-fs-ignore')) {
      return true;
    }

    // Check if target is inside an ignored container
    let current: Element | null = target;
    while (current) {
      if (current.hasAttribute?.('data-fs-ignore')) {
        return true;
      }
      current = current.parentElement;
    }

    return false;
  }

  function handleMutations(mutationsList: MutationRecord[]): void {
    // Skip if currently generating to prevent loops
    if (isGenerating) {
      return;
    }

    let shouldRegenerate = false;

    for (const mutation of mutationsList) {
      // Ignore mutations on excluded elements
      if (shouldIgnoreMutation(mutation.target)) {
        continue;
      }

      if (
        mutation.type === 'attributes' &&
        (mutation.attributeName === 'class' ||
          mutation.attributeName === 'cls' ||
          mutation.attributeName === 'data-fs')
      ) {
        shouldRegenerate = true;
        break;
      }

      if (mutation.type === 'childList') {
        for (const node of [...mutation.addedNodes, ...mutation.removedNodes]) {
          // Skip ignored nodes
          if (shouldIgnoreMutation(node)) {
            continue;
          }

          if (
            node.nodeType === 1 &&
            ((node as Element).hasAttribute?.('data-fs') ||
              (node as Element).querySelector?.('[data-fs]'))
          ) {
            shouldRegenerate = true;
            break;
          }
        }
        if (shouldRegenerate) break;
      }
    }

    if (shouldRegenerate) {
      scheduleGenerate();
    }
  }

  let currentObserver: MutationObserver | null = null;

  function init(): void {
    // Log merged rules info
    const customRulesCount = ((window as any).FS?.customRules || []).length;
    if (customRulesCount > 0) {
      console.info(`[fs] Loaded ${customRulesCount} custom rule(s)`);
    }

    // Log safelist info
    const safelistCount = getSafelistClasses().length;
    if (safelistCount > 0) {
      console.info(`[fs] Loaded ${safelistCount} safelist class(es)`);
    }

    // Step 1: Always generate styles once (for all [data-fs] elements + safelist)
    generateInteractiveStyles();

    // Step 2: Only activate MutationObserver if [data-fs] exists
    const hasReactive = document.querySelector('[data-fs]');
    if (!hasReactive) {
      console.info('[fs] No [data-fs] found — reactive mode disabled.');
      return;
    }

    // Disconnect existing observer if any
    if (currentObserver) {
      currentObserver.disconnect();
    }

    currentObserver = new MutationObserver(handleMutations);
    currentObserver.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['data-fs', 'class', 'cls'],
    });

    window.addEventListener('beforeunload', () =>
      currentObserver?.disconnect(),
    );
  }

  function refresh(): void {
    console.info('[fs] Refreshing interactive styles...');

    // Clear the rule cache to force regeneration
    ruleCache.clear();

    // Regenerate styles with potentially new DOM content
    init();
  }

  // Initialize FS namespace if it doesn't exist
  if (typeof window !== 'undefined') {
    (window as any).FS = (window as any).FS || {};

    // Expose public API
    Object.assign((window as any).FS, {
      refresh,
      regenerate: generateInteractiveStyles,
      stop: () => currentObserver?.disconnect(),
      getCache: () => ruleCache,
      getRules: () => getMergedRules(),
      getSafelist: () => getSafelistClasses(),
      _initialized: true, // Flag for debugging
    });
  }

  // Multiple initialization strategies for different environments
  function safeInit(): void {
    if (document.body) {
      init();
    } else {
      // Fallback if body doesn't exist yet
      setTimeout(safeInit, 10);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else if (document.readyState === 'interactive') {
    // DOM is ready but resources may still be loading
    setTimeout(init, 0);
  } else {
    // Document is fully loaded
    safeInit();
  }
})();

// Export for module usage - do this OUTSIDE the IIFE
// Export default for ES module imports
export default typeof window !== 'undefined' ? (window as any).FS : {};
