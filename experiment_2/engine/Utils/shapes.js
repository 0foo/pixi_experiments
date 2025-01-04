import { PIXI } from '/engine/Illusionist.js';

/**
 * Creates a circle and adds it to the stage.
 * @param {number} x - The x-coordinate for the circle.
 * @param {number} y - The y-coordinate for the circle.
 * @param {number} radius - The radius of the circle.
 * @param {number} color - The color of the circle.
 * @param {boolean} filled - Whether the circle is filled or outlined.
 * @param {number} [lineWidth=2] - Line width (for outlined shapes).
 * @returns {PIXI.Graphics} - The created circle graphic.
 */
export function createCircle(x, y, radius, color, filled, lineWidth = 2) {
  const circle = new PIXI.Graphics();
  if (filled) {
    circle.beginFill(color);
  } else {
    circle.lineStyle(lineWidth, color);
  }
  circle.drawCircle(0, 0, radius);
  if (filled) {
    circle.endFill();
  }
  circle.x = x;
  circle.y = y;
  return circle;
}

/**
 * Creates a triangle and adds it to the stage.
 * @param {number} x - The x-coordinate for the triangle.
 * @param {number} y - The y-coordinate for the triangle.
 * @param {number} size - The size (height) of the triangle.
 * @param {number} color - The color of the triangle.
 * @param {boolean} filled - Whether the triangle is filled or outlined.
 * @param {number} [lineWidth=2] - Line width (for outlined shapes).
 * @returns {PIXI.Graphics} - The created triangle graphic.
 */
export function createTriangle(x, y, size, color, filled = true, lineWidth = 2) {
  const triangle = new PIXI.Graphics();
  if (filled) {
    triangle.beginFill(color);
  } else {
    triangle.lineStyle(lineWidth, color);
  }
  triangle.moveTo(0, -size); // Top point
  triangle.lineTo(size / 2, size / 2); // Bottom-right point
  triangle.lineTo(-size / 2, size / 2); // Bottom-left point
  triangle.lineTo(0, -size); // Close the triangle
  if (filled) {
    triangle.endFill();
  }
  triangle.x = x;
  triangle.y = y;
  return triangle;
}

/**
 * Creates a rectangle and adds it to the stage.
 * @param {number} x - The x-coordinate for the rectangle.
 * @param {number} y - The y-coordinate for the rectangle.
 * @param {number} width - The width of the rectangle.
 * @param {number} height - The height of the rectangle.
 * @param {number} color - The color of the rectangle.
 * @param {boolean} filled - Whether the rectangle is filled or outlined.
 * @param {number} [lineWidth=2] - Line width (for outlined shapes).
 * @returns {PIXI.Graphics} - The created rectangle graphic.
 */
export function createRectangle(x, y, width, height, color, filled, lineWidth = 2) {
  const rectangle = new PIXI.Graphics();
  if (filled) {
    rectangle.beginFill(color);
  } else {
    rectangle.lineStyle(lineWidth, color);
  }
  rectangle.drawRect(-width / 2, -height / 2, width, height);
  if (filled) {
    rectangle.endFill();
  }
  rectangle.x = x;
  rectangle.y = y;
  return rectangle;
}
