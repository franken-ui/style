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
    components: GeneratedCssLayer;
    styles: GeneratedCssLayer;
    utilities: GeneratedCssLayer;
  }

  // --- Rule Merging Logic ---

  function getMergedRules(): RuleConfig[] {
    const customRules = (window as any).FS?.customRules || [];

    if (!Array.isArray(customRules)) {
      console.warn(
        '[fs] FS.customRules must be an array. Ignoring custom rules.',
      );
      return defaultRules as RuleConfig[];
    }

    const validatedCustomRules = customRules.filter((rule: any) => {
      if (!rule.selector || typeof rule.selector !== 'string') return false;
      if (!rule.properties) return false;
      if (!rule.arbitrary && (!rule.values || !Array.isArray(rule.values)))
        return false;
      return true;
    });

    const merged = [...(defaultRules as RuleConfig[])];

    validatedCustomRules.forEach((customRule: RuleConfig) => {
      const existingIndex = merged.findIndex(
        r => r.selector === customRule.selector,
      );
      if (existingIndex !== -1) {
        merged[existingIndex] = customRule;
      } else {
        merged.push(customRule);
      }
    });

    return merged;
  }

  const rules = getMergedRules();

  // --- Helper Functions ---

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
      // Quietly fail for unknown classes to avoid console spam
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

  function parseClassName(className: string): ParsedClass | null {
    const normalizedClass = normalizeClsClass(className);
    const match = normalizedClass.match(classParser);

    if (!match) return null;

    const [, dark, prefix, baseClass, state] = match;
    return {
      baseClass,
      state,
      fullClass: normalizedClass,
      isDark: !!dark,
      prefix: prefix || null,
    };
  }

  // --- Safelist Logic ---

  function getSafelistClasses(): ParsedClass[] {
    const safelist = (window as any).FS?.safelist;
    if (!safelist || !Array.isArray(safelist)) return [];

    const parsedClasses: ParsedClass[] = [];

    safelist.forEach((item: any) => {
      if (typeof item === 'string') {
        const parsed = parseClassName(item);
        if (parsed) parsedClasses.push(parsed);
      } else if (typeof item === 'object' && item !== null) {
        const baseClass = item.class || item.className;
        if (!baseClass) return;

        const itemStates = item.states || [];
        const itemPrefixes = item.prefixes || [null];
        const itemDarkModes = item.dark === true ? [false, true] : [false];

        itemDarkModes.forEach(isDark => {
          itemPrefixes.forEach((prefix: any) => {
            itemStates.forEach((state: any) => {
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
      }
    });

    return parsedClasses;
  }

  // --- Interactive Style Generation ---

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

  /**
   * Main function to scan DOM and generate CSS.
   * Now synchronous and manual-trigger only.
   */
  function generateInteractiveStyles(): void {
    try {
      // 1. Scan the DOM
      const nodes = document.querySelectorAll('[data-fs]');
      const allInteractiveClasses: ParsedClass[] = [];

      nodes.forEach(node => {
        allInteractiveClasses.push(...extractInteractiveClasses(node));
      });

      // 2. Add Safelist
      const safelistClasses = getSafelistClasses();
      allInteractiveClasses.push(...safelistClasses);

      // 3. Prepare buckets
      const generatedCss: GeneratedCSS = {
        components: { base: [], media: {} },
        styles: { base: [], media: {} },
        utilities: { base: [], media: {} },
      };

      // 4. Build Rules
      allInteractiveClasses.forEach(parsedClass => {
        const { fullClass, state, isDark, prefix } = parsedClass;
        const ruleKey = `${fullClass}${state}${isDark ? '-dark' : ''}${prefix || ''}`;

        // Cache hit check
        if (ruleCache.has(ruleKey)) {
          const rule = ruleCache.get(ruleKey)!;
          const layer = rule.layer as keyof GeneratedCSS;
          if (rule.breakpoint) {
            const mediaBucket = generatedCss[layer].media;
            mediaBucket[rule.breakpoint] = mediaBucket[rule.breakpoint] || [];
            if (!mediaBucket[rule.breakpoint].includes(rule.css)) {
              mediaBucket[rule.breakpoint].push(rule.css);
            }
          } else {
            if (!generatedCss[layer].base.includes(rule.css)) {
              generatedCss[layer].base.push(rule.css);
            }
          }
          return;
        }

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

      // 5. Construct CSS String
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
        buildLayer('components', generatedCss.components),
        buildLayer('styles', generatedCss.styles),
        buildLayer('utilities', generatedCss.utilities),
      ]
        .filter(Boolean)
        .join('\n\n');

      // 6. Inject into DOM
      let styleTag = document.getElementById(
        'uk-interactive-styles',
      ) as HTMLStyleElement | null;

      if (!styleTag) {
        styleTag = document.createElement('style');
        styleTag.id = 'uk-interactive-styles';
        styleTag.setAttribute('data-fs-managed', 'true');
        document.head.appendChild(styleTag);
      }

      styleTag.textContent = finalCss;
    } catch (e) {
      console.error('[fs] Error generating styles:', e);
    }
  }

  function init(): void {
    // Log info
    const customRulesCount = ((window as any).FS?.customRules || []).length;
    if (customRulesCount > 0)
      console.info(`[fs] Loaded ${customRulesCount} custom rule(s)`);

    // Generate once
    generateInteractiveStyles();
  }

  function refresh(): void {
    console.info('[fs] Refreshing interactive styles...');
    ruleCache.clear();
    generateInteractiveStyles();
  }

  // --- Initialization & Exports ---

  // Initialize FS namespace
  if (typeof window !== 'undefined') {
    (window as any).FS = (window as any).FS || {};

    Object.assign((window as any).FS, {
      refresh,
      regenerate: generateInteractiveStyles,
      getCache: () => ruleCache,
      getRules: () => getMergedRules(),
      getSafelist: () => getSafelistClasses(),
      _initialized: true,
    });
  }

  // Safe Loading Strategy
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    // If already loaded (defer/async scripts), run immediately
    init();
  }
})();

export default typeof window !== 'undefined' ? (window as any).FS : {};
