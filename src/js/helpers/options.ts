/**
 * Parses a string value into an object or returns the original string.
 * Supports JSON objects and key-value pairs separated by semicolons.
 * Supports escaped colons (\:) and semicolons (\;) in values.
 *
 * @param value - The string to parse
 * @param forceJson - If true, only parse JSON objects (starting with '{'), otherwise return original value
 * @returns Parsed object or original string if no parsing pattern matches
 *
 * @example
 * parseOptions('{"key": "value"}') // Returns: { key: "value" }
 * parseOptions('key: value', true) // Returns: "key: value" (not parsed because forceJson is true)
 * parseOptions('{"key": "value"}', true) // Returns: { key: "value" }
 * parseOptions('color: red; size: large') // Returns: { color: "red", size: "large" }
 * parseOptions('cls: bg\\:focus') // Returns: { cls: "bg:focus" }
 * parseOptions('button: bg\\:hover; div: bg') // Returns: { button: "bg:hover", div: "bg" }
 * parseOptions('text: hello\\; world') // Returns: { text: "hello; world" }
 * parseOptions('simple string') // Returns: "simple string"
 */
export function parseOptions(
  value: string,
  forceJson: boolean = false,
): object | string {
  // If forceJson is true, only parse if it starts with '{'
  if (forceJson) {
    if (value.startsWith('{')) {
      try {
        return JSON.parse(value);
      } catch (error) {
        console.error('Error parsing JSON:', value, error);
        return value; // Return original value on parse error
      }
    }
    return value;
  }

  // Handle JSON objects
  if (value.startsWith('{')) {
    try {
      return JSON.parse(value);
    } catch (error) {
      console.error('Error parsing JSON:', value, error);
      return {};
    }
  }

  // Handle key-value pairs (e.g., "key1: value1; key2: value2")
  // Check for unescaped colons to determine if this is key-value format
  if (value.replace(/\\:/g, '').includes(':')) {
    try {
      const result: Record<string, string> = {};

      // Split by unescaped semicolons
      const pairs = splitByUnescaped(value.replace(/[;\s]+$/, ''), ';');

      pairs.forEach(pair => {
        // Split by unescaped colons
        const parts = splitByUnescaped(pair.trim(), ':');

        if (parts.length >= 2) {
          const key = parts[0].trim();
          // Join remaining parts in case value contains escaped colons
          const val = parts.slice(1).join(':').trim();

          if (key) {
            // Unescape the value
            result[key] = unescape(val);
          }
        }
      });

      return result;
    } catch (error) {
      console.error('Error parsing key-value pairs:', value, error);
      return {};
    }
  }

  return unescape(value);
}

/**
 * Splits a string by a delimiter, but only on unescaped occurrences.
 * @param str - String to split
 * @param delimiter - Delimiter character
 * @returns Array of split parts
 */
function splitByUnescaped(str: string, delimiter: string): string[] {
  const result: string[] = [];
  let current = '';
  let i = 0;

  while (i < str.length) {
    if (str[i] === '\\' && i + 1 < str.length && str[i + 1] === delimiter) {
      // Escaped delimiter - keep the backslash for now, will unescape later
      current += '\\' + delimiter;
      i += 2;
    } else if (str[i] === delimiter) {
      // Unescaped delimiter - split here
      result.push(current);
      current = '';
      i++;
    } else {
      current += str[i];
      i++;
    }
  }

  // Add the last part
  result.push(current);

  return result;
}

/**
 * Unescapes escaped colons and semicolons.
 * @param str - String to unescape
 * @returns Unescaped string
 */
function unescape(str: string): string {
  return str.replace(/\\:/g, ':').replace(/\\;/g, ';');
}
