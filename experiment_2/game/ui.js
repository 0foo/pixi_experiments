import { app } from './app.js';

// Create coordinate display
const coordinatesText = new PIXI.Text(`Coordinates: X=8000, Y=8000`, {
  fontFamily: 'Arial',
  fontSize: 20,
  fill: 0xffffff,
});
coordinatesText.x = 10;
coordinatesText.y = app.screen.height - 30;
coordinatesText.resolution = 2;
app.stage.addChild(coordinatesText);

// Update coordinates display
export function updateCoordinates(cameraX, cameraY) {
  coordinatesText.text = `Coordinates: X=${Math.round(cameraX)}, Y=${Math.round(cameraY)}`;
  coordinatesText.y = app.screen.height - 30; // Adjust on resize
}
