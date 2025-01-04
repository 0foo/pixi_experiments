import { PIXI } from '/engine/Illusionist.js';

/**
 * Populates a PIXI container with a starry background.
 * If width and height are not provided, the size of the container is used.
 *
 * @param {PIXI.Container} container - The PIXI container to populate with stars.
 * @param {number} starCount - The number of stars to generate.
 * @param {number} [width] - The width of the area to fill with stars.
 * @param {number} [height] - The height of the area to fill with stars.
 */
export function generateStars(container, starCount) {
  // Use the container's bounds if width and height are not provided
  const areaWidth = container.width;
  const areaHeight = container.height;

  for (let i = 0; i < starCount; i++) {
    // Random position
    const x = Math.random() * areaWidth;
    const y = Math.random() * areaHeight;

    // Random size and brightness
    const size = Math.random() * (2 - 0.5) + 0.5; // Star size between 0.5 and 2
    const brightness = Math.floor(Math.random() * 0xffffff); // Random color

    // build star of random location and random brightness and random size
    let star = new PIXI.Graphics().circle(x, y, size).fill(brightness);

    // Add star to the container
    container.addChild(star);
  }
}
