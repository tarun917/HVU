// src/ThreeJs/utils/mathUtils.jsx

/**
 * Clamps a number between a minimum and maximum value.
 * @param {number} value - The number to clamp.
 * @param {number} min - The minimum value.
 * @param {number} max - The maximum value.
 * @returns {number} - The clamped value.
 */
export const clamp = (value, min, max) => {
    return Math.max(min, Math.min(max, value));
  };
  
  /**
   * Linearly interpolates between two values.
   * @param {number} start - The start value.
   * @param {number} end - The end value.
   * @param {number} t - The interpolation factor (0 to 1).
   * @returns {number} - The interpolated value.
   */
  export const lerp = (start, end, t) => {
    return start + t * (end - start);
  };
  
  /**
   * Generates a random number between a minimum and maximum value.
   * @param {number} min - The minimum value.
   * @param {number} max - The maximum value.
   * @returns {number} - The random number.
   */
  export const randomBetween = (min, max) => {
    return Math.random() * (max - min) + min;
  };