import * as Illusionist from '../engine/Illusionist.js';
import { GameplayScene } from './scenes/GameplayScene.js';

// Access exports from the Illusionist namespace
const { app, SceneManager } = Illusionist;

// Initialize the Scene Manager
const sceneManager = new SceneManager(app);

// // Start with the Main Menu Scene
sceneManager.switchScene(new GameplayScene());

// // Game loop
app.ticker.add((delta) => {
  sceneManager.update(delta);
});



// Move stage
// stage.x = 6000;
// stage.y = 6000;
// Game loop
// app.ticker.add(() => {
//   updateTriangle(); // Update triangle and get camera position
// //   updateCoordinates(x, y); // Update coordinates display
// });
