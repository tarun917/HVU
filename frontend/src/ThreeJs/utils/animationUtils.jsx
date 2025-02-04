// src/ThreeJs/utils/animationUtils.jsx

/**
 * Eases in an animation using a quadratic function.
 * @param {number} t - The time factor (0 to 1).
 * @returns {number} - The eased value.
 */
export const easeInQuad = (t) => {
    return t * t;
  };
  
  /**
   * Eases out an animation using a quadratic function.
   * @param {number} t - The time factor (0 to 1).
   * @returns {number} - The eased value.
   */
  export const easeOutQuad = (t) => {
    return t * (2 - t);
  };
  
  /**
   * Eases in and out an animation using a quadratic function.
   * @param {number} t - The time factor (0 to 1).
   * @returns {number} - The eased value.
   */
  export const easeInOutQuad = (t) => {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  };