/**
 * Validates a hexadecimal color value.
 *
 * @param hex - The hex color string to validate (e.g., "#FF0000" or "#F00")
 * @returns The validated hex string if valid, undefined otherwise
 *
 * @example
 * validateHex('#FF0000') // Returns: "#FF0000"
 * validateHex('#F00') // Returns: "#F00"
 * validateHex('invalid') // Returns: undefined
 */
export function validateHex(hex: string): string | undefined {
  const hexPattern = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;

  return hexPattern.test(hex) ? hex : undefined;
}

/**
 * Validates a CSS size value with unit.
 *
 * @param size - The size string to validate (e.g., "10px", "1.5em", "100%")
 * @returns The validated size string if valid, undefined otherwise
 *
 * @example
 * validateSize('10px') // Returns: "10px"
 * validateSize('1.5em') // Returns: "1.5em"
 * validateSize('invalid') // Returns: undefined
 */
export function validateSize(size: string): string | undefined {
  const sizePattern =
    /^(\d*\.?\d+)(px|cm|mm|in|pt|pc|em|ex|ch|rem|vw|vh|vmin|vmax|%)$/;

  return sizePattern.test(size) ? size : undefined;
}

/**
 * Validates a CSS border style value.
 *
 * @param style - The border style to validate
 * @returns The validated style string if valid, undefined otherwise
 *
 * @example
 * validateBorderStyle('solid') // Returns: "solid"
 * validateBorderStyle('invalid') // Returns: undefined
 */
export function validateBorderStyle(style: string): string | undefined {
  const validStyles = [
    'none',
    'hidden',
    'dotted',
    'dashed',
    'solid',
    'double',
    'groove',
    'ridge',
    'inset',
    'outset',
  ];

  return validStyles.includes(style) ? style : undefined;
}

/**
 * Validates a CSS duration value (milliseconds or seconds).
 *
 * @param duration - The duration string to validate (e.g., "500ms", "2s")
 * @returns The validated duration string if valid, undefined otherwise
 *
 * @example
 * validateDuration('500ms') // Returns: "500ms"
 * validateDuration('2.5s') // Returns: "2.5s"
 * validateDuration('invalid') // Returns: undefined
 */
export function validateDuration(duration: string): string | undefined {
  const durationPattern = /^(\d*\.?\d+)(ms|s)$/;

  return durationPattern.test(duration) ? duration : undefined;
}

/**
 * Generates a random alphanumeric ID string.
 *
 * @param length - The length of the ID to generate (default: 5)
 * @returns A random alphanumeric string
 *
 * @example
 * generateId() // Returns: "aBc12" (5 characters)
 * generateId(8) // Returns: "xY9zQ4m2" (8 characters)
 */
export function randomString(length = 5): string {
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  return Array.from({ length }, () =>
    characters.charAt(Math.floor(Math.random() * characters.length)),
  ).join('');
}

/**
 * Converts a string to title case by capitalizing the first letter of each word.
 *
 * @param str - The string to convert to title case
 * @returns The string in title case format
 *
 * @example
 * titleCase('hello world') // Returns: "Hello World"
 * titleCase('THE QUICK BROWN FOX') // Returns: "The Quick Brown Fox"
 */
export function titleCase(str: string): string {
  return str
    ? str
        .toLowerCase()
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')
    : '';
}
