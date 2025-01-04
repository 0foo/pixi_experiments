import { createTriangle } from './game_engine/createShapes.js';

import { app, stage, worldWidth, worldHeight } from './illui.js';
import { clamp } from './utils.js';

export function initializePlayer(startX, startY, rotationSpeed = 0.1, moveSpeed = 10) {
  let triangle = createTriangle(startX, startY, 30, 0xffd700);
  let rotationSpeed = rotationSpeed;
  let moveSpeed = moveSpeed;

}


// // Movement settings


// // Movement logic
// const keys = {};
// window.addEventListener('keydown', (e) => (keys[e.code] = true));
// window.addEventListener('keyup', (e) => (keys[e.code] = false));

// export function updatePlayer() {
//   // Rotate triangle
//   if (keys['ArrowLeft'] || keys['KeyA']) triangle.rotation -= rotationSpeed;
//   if (keys['ArrowRight'] || keys['KeyD']) triangle.rotation += rotationSpeed;

//   // Move forward
//   if (keys['ArrowUp'] || keys['KeyW']) {
//     const dx = Math.sin(triangle.rotation) * moveSpeed;
//     const dy = -Math.cos(triangle.rotation) * moveSpeed;

//     cameraX = clamp(cameraX + dx, 0, worldWidth - app.screen.width);
//     cameraY = clamp(cameraY + dy, 0, worldHeight - app.screen.height);
//   }

//   // Move stage
//   stage.x = -cameraX;
//   stage.y = -cameraY;

//   return { x: cameraX, y: cameraY }; // Return updated coordinates
// }
