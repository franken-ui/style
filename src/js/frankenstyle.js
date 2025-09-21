/**
 * Interactive Styles Generator
 *
 * Usage:
 *  - Add `data-fs-interactive` to containers with stateful classes:
 *    <div class="bg:hover sm:p:focus md:color:active" data-fs-interactive>
 *  - Define CSS variables in inline styles or global CSS:
 *    style="--bg: red; --bg-hover: blue; --spacing: 0.25rem"
 *  - Place script at end of <body> or load with `defer`
 *
 * Behavior:
 *  - Generates CSS only for stateful classes (ending with :hover, :focus, etc.)
 *  - Applies whitelist transformations and variable suffixing
 *  - Creates dark variants for properties in `withDark` array
 *  - Builds graceful fallback chains for responsive breakpoints
 *  - Excludes certain variables from state suffixing (e.g., --spacing)
 */

(() => {
  const breakpoints = {
    sm: "40rem",
    md: "48rem",
    lg: "64rem",
    xl: "80rem",
    "2xl": "96rem",
  };

  const aliases = {
    w: "width",
    h: "height",
    m: "margin",
    p: "padding",
    "[p]": "padding",
    bg: "background-color",
    color: "color",
  };

  // Alias names that require calc(var(--spacing) * ...)
  const withScaling = new Set(["m", "p"]);

  // Which CSS properties should also get a dark variant
  const withDark = new Set(["background-color", "color"]);

  // CSS variables that should not be suffixed with state (e.g. --spacing)
  const excludedVars = new Set(["spacing"]);

  // Whitelist of base rules (these will be transformed when a state is requested)
  const ruleTemplates = {
    ".bg": {
      "background-color":
        "color-mix(in oklab,var(--bg-{s})var(--bg-opacity-{s},100%),transparent)",
    },
    ".color": {
      color:
        "color-mix(in oklab,var(--color-{s})var(--color-opacity-{s},100%),transparent)",
    },
  };

  function extractCSSVariables(rules) {
    const variables = new Set();

    for (const ruleSet of Object.values(rules)) {
      for (const value of Object.values(ruleSet)) {
        // Match --variable-{s} patterns
        const matches = value.match(/--([a-zA-Z][a-zA-Z0-9-]*)-\{s\}/g);

        if (matches) {
          matches.forEach((match) => {
            const varName = match.replace("--", "").replace("-{s}", "");

            if (!excludedVars.has(varName)) {
              variables.add(varName);
            }
          });
        }
      }
    }

    return variables;
  }

  function buildVariableChain(bp, variable, order, i, dark = false) {
    const darkPrefix = dark ? "dark-" : "";
    const escapedBp = bp === "2xl" ? "\\32xl" : bp;

    let chain = `var(--${darkPrefix}${escapedBp}-${variable}`;

    // Add fallbacks for previous breakpoints
    for (let j = i - 1; j >= 0; j--) {
      const prev = order[j];
      const escapedPrev = prev === "2xl" ? "\\32xl" : prev;

      chain += `, var(--${darkPrefix}${escapedPrev}-${variable}`;
    }

    // Add base fallback
    chain += `, var(--${variable})`;

    // Close all the var() calls
    chain += ")".repeat(i + 1);

    return chain;
  }

  function expandRuleTemplates(base, breakpoints, withDark) {
    const order = Object.keys(breakpoints);
    const expanded = { ...base };
    const cssVariables = extractCSSVariables(base);

    for (const [selector, rules] of Object.entries(base)) {
      // Generate breakpoint variants
      for (let i = 0; i < order.length; i++) {
        const bp = order[i];
        const escapedBp = bp === "2xl" ? "\\32xl" : bp;
        const bpSelector = `.${escapedBp}\\:${selector.slice(1)}`; // Remove leading dot and add colon

        expanded[bpSelector] = {};

        for (const [prop, value] of Object.entries(rules)) {
          let expandedValue = value;

          // Replace each CSS variable with its breakpoint chain
          for (const variable of cssVariables) {
            const pattern = new RegExp(`var\\(--${variable}-\\{s\\}\\)`, "g");

            if (expandedValue.match(pattern)) {
              const chain = buildVariableChain(bp, variable, order, i);

              expandedValue = expandedValue.replace(pattern, chain);
            }
          }

          expanded[bpSelector][prop] = expandedValue;

          // Dark variant
          if (withDark.has(prop)) {
            const darkSelector = `.dark ${bpSelector}`;
            let darkValue = value;

            for (const variable of cssVariables) {
              const pattern = new RegExp(`var\\(--${variable}-\\{s\\}\\)`, "g");

              if (darkValue.match(pattern)) {
                const darkChain = buildVariableChain(
                  bp,
                  variable,
                  order,
                  i,
                  true
                );
                darkValue = darkValue.replace(pattern, darkChain);
              }
            }

            if (!expanded[darkSelector]) {
              expanded[darkSelector] = {};
            }

            expanded[darkSelector][prop] = darkValue;
          }
        }
      }

      // Base dark variants (no breakpoint)
      for (const [prop, value] of Object.entries(rules)) {
        if (withDark.has(prop)) {
          let baseDarkValue = value;

          for (const variable of cssVariables) {
            const pattern = new RegExp(`var\\(--${variable}-\\{s\\}\\)`, "g");

            if (baseDarkValue.match(pattern)) {
              baseDarkValue = baseDarkValue.replace(
                pattern,
                `var(--dark-${variable}-{s}, var(--${variable}-{s}))`
              );
            }
          }

          const darkSelector = `.dark ${selector}`;

          if (!expanded[darkSelector]) {
            expanded[darkSelector] = {};
          }

          expanded[darkSelector][prop] = baseDarkValue;
        }
      }
    }

    return expanded;
  }

  const whitelist = expandRuleTemplates(ruleTemplates, breakpoints, withDark);

  // Memoization cache for generated CSS rules
  const ruleCache = new Map();

  // Batch mutation handling
  let pendingMutations = new Set();
  let mutationBatchTimeout = null;

  // --- helpers --------------------------------------------------------------

  // Strip brackets from property alias for CSS variable names
  function stripBrackets(propAlias) {
    return propAlias.replace(/^\[|\]$/g, "");
  }

  // Process a whitelist rule object (map of cssProp -> value string)
  // Returns { updated, darkVariant } where darkVariant is null if no dark props present
  function applyStateToWhitelist(ruleObj, state) {
    const updated = {};

    let needDark = false;

    for (const [prop, val] of Object.entries(ruleObj)) {
      // Simply replace {s} placeholder with actual state
      updated[prop] = val.replace(/{s}/g, state);

      if (withDark.has(prop)) {
        needDark = true;
      }
    }

    let darkVariant = null;

    if (needDark) {
      darkVariant = {};

      for (const [prop, val] of Object.entries(ruleObj)) {
        // Replace {s} and transform variables for dark mode
        let darkVal = val.replace(/{s}/g, state);

        // Transform var(--name) to var(--dark-name, var(--name))
        darkVal = darkVal.replace(
          /var\((--[a-z0-9-]+)([^)]*)\)/gi,
          (match, varName, rest) => {
            if (excludedVars.has(varName)) {
              return match;
            }

            const darkName = `--dark-${varName.slice(2)}`;
            return `var(${darkName}, var(${varName}${rest}))`;
          }
        );

        darkVariant[prop] = darkVal;
      }
    }

    return { updated, darkVariant };
  }

  // Build nested fallback chain for proper CSS variable cascading
  function buildNestedFallback(varNames) {
    if (varNames.length === 1) {
      return `var(${varNames[0]})`;
    }

    return varNames.reduceRight((acc, varName) =>
      acc ? `var(${varName}, ${acc})` : `var(${varName})`
    );
  }

  // Build dark fallback chain with proper nesting
  function buildDarkFallback(varNames, propAlias, state) {
    const darkVars = varNames.map((varName) => {
      const match = varName.match(/^--(.+?)(-\w+)?$/);

      if (!match) {
        return varName;
      }

      const [, base] = match;

      return `--dark-${base}-${state}`;
    });

    const normalFallback = buildNestedFallback(varNames);

    return darkVars.reduceRight((acc, darkVar) =>
      acc ? `var(${darkVar}, ${acc})` : `var(${darkVar}, ${normalFallback})`
    );
  }

  // Escape class name to be safe in a CSS selector (uses CSS.escape when available)
  function escapeClassName(name) {
    if (typeof CSS !== "undefined" && typeof CSS.escape === "function") {
      return CSS.escape(name);
    }

    // simple fallback: escape colons/spaces and handle leading digit
    let s = name.replace(/[:\s]/g, "\\$&");

    if (/^\d/.test(s)) {
      const hex = name.charCodeAt(0).toString(16);

      // format: \32 <rest>  (space is required after hex escape when the next char is hex)
      s = `\\${hex} ${s.slice(1)}`;
    }

    return s;
  }

  // Build CSS block from selector and rules with memoization
  function buildCSSBlock(selector, ruleObj) {
    const cacheKey = `${selector}:${JSON.stringify(ruleObj)}`;

    if (ruleCache.has(cacheKey)) {
      return ruleCache.get(cacheKey);
    }

    const block =
      `${selector} {\n` +
      Object.entries(ruleObj)
        .map(([k, v]) => `  ${k}: ${v};`)
        .join("\n") +
      `\n}`;

    // Limit cache size to prevent memory leaks
    if (ruleCache.size > 1000) {
      const firstKey = ruleCache.keys().next().value;
      ruleCache.delete(firstKey);
    }

    ruleCache.set(cacheKey, block);
    return block;
  }

  // Cached regex for better performance
  const classPartsRegex = /\s+/;

  // Generate unique key for class processing to enable memoization
  function getClassProcessingKey(cls, breakpoint, propAlias, state) {
    return `${cls}|${breakpoint || ""}|${propAlias}|${state}`;
  }

  // --- main generator ------------------------------------------------------

  function generateInteractiveStyles() {
    const nodes = document.querySelectorAll("[data-fs-interactive]");

    // Add CSS containment to interactive elements for better performance
    nodes.forEach((node) => {
      if (!node.style.contain) {
        node.style.contain = "style";
      }
    });

    // group blocks by breakpoint: 'base' (no media) or 'sm'|'md'|...
    const blocksByBp = new Map();
    const processedClasses = new Set(); // Track processed classes to avoid duplicates

    const pushBlock = (bpKey, blockText) => {
      if (!blocksByBp.has(bpKey)) blocksByBp.set(bpKey, []);

      blocksByBp.get(bpKey).push(blockText);
    };

    nodes.forEach((node) => {
      const classes = String(node.className || "")
        .split(classPartsRegex)
        .filter(Boolean);

      classes.forEach((cls) => {
        if (!cls.includes(":")) {
          return;
        }

        const parts = cls.split(":").filter(Boolean);

        if (parts.length < 2) {
          return;
        }

        let state = null;
        let breakpoint = null;
        let propAlias = null;

        if (parts.length === 2) {
          // prop + state (e.g., bg:hover)
          [propAlias, state] = parts;
        } else if (parts.length === 3) {
          // breakpoint + prop + state (e.g., sm:bg:hover)
          [breakpoint, propAlias, state] = parts;
        } else {
          // more than 3 parts: take last as state, second last as prop, the rest as breakpoint join
          state = parts.pop();
          propAlias = parts.pop();
          breakpoint = parts.length ? parts.join(":") : null;
        }

        // Only generate for classes that contain an actual state
        if (!state || !propAlias) {
          return;
        }

        // Skip if we've already processed this exact class configuration
        const classKey = getClassProcessingKey(
          cls,
          breakpoint,
          propAlias,
          state
        );

        if (processedClasses.has(classKey)) {
          return;
        }

        processedClasses.add(classKey);

        const selectorKey = breakpoint
          ? `.${breakpoint}.${propAlias}`
          : `.${propAlias}`;
        const whitelistRule = whitelist[selectorKey];
        const darkWhitelistRule = whitelist[`.dark ${selectorKey}`];

        if (whitelistRule) {
          // Simply replace {s} placeholder with state
          normalRuleObj = {};

          for (const [prop, val] of Object.entries(whitelistRule)) {
            normalRuleObj[prop] = val.replace(/{s}/g, state);
          }

          if (darkWhitelistRule) {
            darkRuleObj = {};

            for (const [prop, val] of Object.entries(darkWhitelistRule)) {
              darkRuleObj[prop] = val.replace(/{s}/g, state);
            }
          }
        } else {
          // Build dynamic rule from aliases
          const cssProp = aliases[propAlias];

          if (!cssProp) {
            console.warn(`Unknown property alias: ${propAlias} (from ${cls})`);
            return;
          }

          // Check if this property should use scaling BEFORE cleaning brackets
          // [p] = arbitrary/as-is, p = scaled with spacing
          const shouldScale = withScaling.has(propAlias);

          // Strip brackets from propAlias for CSS variable names
          const cleanPropAlias = stripBrackets(propAlias);

          // Build fallback chain - cascade from requested breakpoint down to base
          let varNames;

          if (breakpoint) {
            const bpOrder = ["2xl", "xl", "lg", "md", "sm"];
            const startIndex = bpOrder.indexOf(breakpoint);

            if (startIndex === -1) {
              // Unknown breakpoint, just use it as-is
              varNames = [`--${breakpoint}-${cleanPropAlias}-${state}`];
            } else {
              // Build cascade from requested breakpoint down to base
              varNames = [];

              for (let i = startIndex; i < bpOrder.length; i++) {
                varNames.push(`--${bpOrder[i]}-${cleanPropAlias}-${state}`);
              }

              // Add base variable as final fallback
              varNames.push(`--${cleanPropAlias}-${state}`);
            }
          } else {
            // No breakpoint - just use the base variable
            varNames = [`--${cleanPropAlias}-${state}`];
          }

          const nestedFallback = buildNestedFallback(varNames);

          if (shouldScale) {
            normalRuleObj = {
              [cssProp]: `calc(var(--spacing) * ${nestedFallback})`,
            };
          } else {
            normalRuleObj = {
              [cssProp]: nestedFallback,
            };
          }

          if (withDark.has(cssProp)) {
            const darkFallback = buildDarkFallback(
              varNames,
              cleanPropAlias,
              state
            );

            darkRuleObj = {
              [cssProp]: shouldScale
                ? `calc(var(--spacing) * ${darkFallback})`
                : darkFallback,
            };
          }
        }

        // Build selectors (use CSS.escape when available)
        const esc = escapeClassName(cls);
        const normalSelector = `.${esc}:${state}`;

        // Compose CSS blocks
        const normalBlock = buildCSSBlock(normalSelector, normalRuleObj);

        if (darkRuleObj) {
          const darkSelector = `.dark .${esc}:${state}`;
          const darkBlock = buildCSSBlock(darkSelector, darkRuleObj);

          if (breakpoint && breakpoints[breakpoint]) {
            pushBlock(breakpoint, darkBlock);
          } else {
            pushBlock("base", darkBlock);
          }
        }

        if (breakpoint && breakpoints[breakpoint]) {
          pushBlock(breakpoint, normalBlock);
        } else {
          pushBlock("base", normalBlock);
        }
      });
    });

    // Assemble final CSS text with better memory management
    const parts = [];
    const baseBlocks = blocksByBp.get("base");

    if (baseBlocks?.length) {
      parts.push(...baseBlocks);
    }

    const orderedBps = ["sm", "md", "lg", "xl", "2xl"];

    for (const bp of orderedBps) {
      const arr = blocksByBp.get(bp);

      if (!arr?.length) {
        continue;
      }

      const joined = arr.join("\n\n");

      parts.push(`@media (min-width: ${breakpoints[bp]}) {\n${joined}\n}`);
    }

    const finalCss = parts.length
      ? "@layer styles {\n" + parts.join("\n\n") + "\n}"
      : "";

    // Use requestAnimationFrame for smoother DOM updates
    requestAnimationFrame(() => {
      let styleTag = document.getElementById("fs-interactive-styles");

      if (!styleTag) {
        styleTag = document.createElement("style");
        styleTag.id = "fs-interactive-styles";
        document.head.appendChild(styleTag);
      }

      styleTag.textContent = finalCss;
    });
  }

  // Enhanced debounced mutation handling with batching
  let scheduled = null;

  function handleMutations(mutationsList) {
    // Batch mutations to avoid redundant processing
    let hasRelevantChanges = false;

    for (const mutation of mutationsList) {
      if (mutation.type === "attributes") {
        const { attributeName, target } = mutation;

        if (
          attributeName === "class" ||
          attributeName === "data-fs-interactive"
        ) {
          pendingMutations.add(target);
          hasRelevantChanges = true;
        }
      } else if (mutation.type === "childList") {
        // Check if added/removed nodes have interactive attributes
        const checkNodes = [...mutation.addedNodes, ...mutation.removedNodes];

        for (const node of checkNodes) {
          if (node.nodeType === 1) {
            // Element node
            if (
              node.hasAttribute?.("data-fs-interactive") ||
              node.querySelector?.("[data-fs-interactive]")
            ) {
              hasRelevantChanges = true;
              break;
            }
          }
        }
      }
    }

    if (hasRelevantChanges) {
      scheduleGenerate();
    }
  }

  function scheduleGenerate() {
    if (scheduled) {
      clearTimeout(scheduled);
    }

    scheduled = setTimeout(() => {
      scheduled = null;
      pendingMutations.clear();
      generateInteractiveStyles();
    }, 60);
  }

  function init() {
    generateInteractiveStyles();

    const observer = new MutationObserver(handleMutations);

    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ["data-fs-interactive", "class"],
    });

    // Cleanup function for better memory management
    const cleanup = () => {
      observer.disconnect();

      if (scheduled) {
        clearTimeout(scheduled);
      }

      pendingMutations.clear();
      ruleCache.clear();
    };

    // Handle page unload
    window.addEventListener("beforeunload", cleanup);

    // expose for debugging with enhanced API
    window.__fsInteractive = {
      regenerate: generateInteractiveStyles,
      stop: cleanup,
      clearCache: () => ruleCache.clear(),
      getCacheSize: () => ruleCache.size,
      getPendingMutations: () => Array.from(pendingMutations),
    };
  }

  // Run on DOM ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
