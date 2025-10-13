/**
 * Data structure for option metadata including keywords and custom attributes.
 */
export interface OptionData {
  /** Search keywords for filtering options */
  keywords?: string[];
  /** Unique group identifier */
  gid?: string;
  /** Additional custom data attributes */
  [key: string]: any;
}

/**
 * Represents a single option item with all its properties.
 */
export interface OptionItem {
  /** The group this option belongs to */
  group: string;
  /** The option's value */
  value: string;
  /** The display text for the option */
  text: string;
  /** Whether the option is disabled */
  disabled: boolean;
  /** Whether the option is currently selected */
  selected: boolean;
  /** Additional metadata and custom attributes */
  data: OptionData;
}

/**
 * Grouped options structure with group metadata and option arrays.
 */
export interface OptionGrouped {
  [groupKey: string]: {
    /** Display text for the group */
    text: string;
    /** Array of options in this group */
    options: OptionItem[];
    /** Additional metadata and custom attributes from optgroup */
    data?: OptionData;
  };
}

/**
 * Converts an HTML select element to a structured object representation.
 * Processes both individual options and optgroups, preserving all attributes
 * and metadata including data-* attributes.
 *
 * @param select - The HTMLSelectElement to convert
 * @returns Structured object with grouped options and metadata
 *
 * @example
 * // HTML: <select>
 * //   <optgroup label="Colors" data-category="primary" data-priority="high">
 * //     <option value="red" data-keywords="crimson,scarlet">  Red  </option>
 * //   </optgroup>
 * //   <option value="other">Other</option>
 * // </select>
 *
 * const result = selectToObject(selectElement);
 * // Returns: {
 * //   "Colors": {
 * //     text: "Colors",
 * //     data: { category: "primary", priority: "high" },
 * //     options: [{
 * //       group: "Colors",
 * //       value: "red",
 * //       text: "Red",
 * //       disabled: false,
 * //       selected: false,
 * //       data: { keywords: ["red", "crimson", "scarlet"] }
 * //     }]
 * //   },
 * //   "__": {
 * //     text: "__",
 * //     options: [{ group: "__", value: "other", text: "Other", ... }]
 * //   }
 * // }
 */
export function selectToObject(select: HTMLSelectElement): OptionGrouped {
  const groupedOptions: OptionGrouped = {};

  /**
   * Processes data-* attributes from an element into an OptionData object.
   *
   * @param element - The element to extract data attributes from
   * @param baseKeywords - Base keywords to include (for options)
   * @returns OptionData object with processed attributes
   */
  const processDataAttributes = (
    element: HTMLElement,
    baseKeywords: string[] = []
  ): OptionData => {
    const data: OptionData =
      baseKeywords.length > 0 ? { keywords: baseKeywords } : {};

    Object.keys(element.dataset).forEach((attribute) => {
      if (attribute === "keywords") {
        const additionalKeywords = element.dataset
          .keywords!.split(",")
          .map((k) => k.trim())
          .filter((k) => k.length > 0);

        data.keywords =
          baseKeywords.length > 0
            ? [...baseKeywords, ...additionalKeywords]
            : additionalKeywords;
      } else {
        data[attribute] = element.dataset[attribute];
      }
    });

    return data;
  };

  /**
   * Processes a single option element and adds it to the appropriate group.
   *
   * @param groupKey - The key identifying the group
   * @param groupLabel - The display label for the group
   * @param option - The HTMLOptionElement to process
   * @param isGroupDisabled - Whether the parent optgroup is disabled
   */
  const processOption = (
    groupKey: string,
    groupLabel: string,
    option: HTMLOptionElement,
    isGroupDisabled = false
  ): void => {
    // Get option value (use value attribute or trimmed text content as fallback)
    const optionValue = option.hasAttribute("value")
      ? option.getAttribute("value")!
      : option.textContent!.trim();

    // Process data attributes with option value as base keyword
    const optionData = processDataAttributes(option, [optionValue]);

    // Initialize group if it doesn't exist
    if (!groupedOptions[groupKey]) {
      groupedOptions[groupKey] = {
        text: groupLabel,
        options: [],
      };
    }

    // Add the processed option to the group
    groupedOptions[groupKey].options.push({
      group: groupKey,
      value: optionValue,
      text: option.textContent!.trim(),
      disabled: isGroupDisabled || option.disabled,
      selected: option.hasAttribute("selected"),
      data: optionData,
    });
  };

  // Process all child elements of the select
  Array.from(select.children).forEach((element) => {
    if (element.nodeName === "OPTGROUP") {
      // Handle optgroup elements
      const optgroup = element as HTMLOptGroupElement;
      const groupKey = optgroup.dataset.key || optgroup.getAttribute("label")!;
      const groupLabel = optgroup.getAttribute("label")!.trim();

      // Process optgroup data attributes
      const optgroupData = processDataAttributes(optgroup);

      // Process all options within the optgroup
      Array.from(optgroup.children).forEach((child) => {
        if (child.nodeName === "OPTION") {
          processOption(
            groupKey,
            groupLabel,
            child as HTMLOptionElement,
            optgroup.disabled
          );
        }
      });

      // Add optgroup data if any data attributes exist
      if (Object.keys(optgroupData).length > 0) {
        if (!groupedOptions[groupKey]) {
          groupedOptions[groupKey] = {
            text: groupLabel,
            options: [],
          };
        }
        groupedOptions[groupKey].data = optgroupData;
      }
    } else if (element.nodeName === "OPTION") {
      // Handle standalone option elements (not in optgroup)
      processOption("__", "__", element as HTMLOptionElement);
    }
  });

  return groupedOptions;
}
