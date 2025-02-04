// src/ThreeJs/utils/physicsUtils.jsx

/**
 * Converts degrees to radians.
 * @param {number} degrees - The value in degrees.
 * @returns {number} - The value in radians.
 */
export const degreesToRadians = (degrees) => {
    return (degrees * Math.PI) / 180;
  };
  
  /**
   * Converts radians to degrees.
   * @param {number} radians - The value in radians.
   * @returns {number} - The value in degrees.
   */
  export const radiansToDegrees = (radians) => {
    return (radians * 180) / Math.PI;
  };
  
  /**
   * Calculates the distance between two points in 3D space.
   * @param {object} point1 - The first point {x, y, z}.
   * @param {object} point2 - The second point {x, y, z}.
   * @returns {number} - The distance between the points.
   */
  export const distanceBetweenPoints = (point1, point2) => {
    const dx = point2.x - point1.x;
    const dy = point2.y - point1.y;
    const dz = point2.z - point1.z;
    return Math.sqrt(dx * dx + dy * dy + dz * dz);
  };