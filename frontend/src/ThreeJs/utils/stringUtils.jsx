// src/ThreeJs/utils/stringUtils.jsx

/**
 * Capitalizes the first letter of a string.
 * @param {string} str - The string to capitalize.
 * @returns {string} - The capitalized string.
 */
export const capitalize = (str) => {
    if (!str) return '';
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  
  /**
   * Trims a string to a specified length and adds ellipsis if needed.
   * @param {string} str - The string to trim.
   * @param {number} length - The maximum length.
   * @returns {string} - The trimmed string.
   */
  export const trimToLength = (str, length) => {
    if (str.length <= length) return str;
    return str.substring(0, length) + '...';
  };
  
  /**
   * Reverses a string.
   * @param {string} str - The string to reverse.
   * @returns {string} - The reversed string.
   */
  export const reverseString = (str) => {
    return str.split('').reverse().join('');
  };