import * as PIXI from 'https://cdnjs.cloudflare.com/ajax/libs/pixi.js/8.0.0/pixi.mjs';
import { BaseScene } from './Scene/BaseScene.js';
import { SceneManager } from './Scene/SceneManager.js';
import * as Shapes from './Utils/shapes.js';
import * as Utils from './Utils/utils.js';
import * as Stars from './Utils/stars.js';
import * as Entity from './ECS/Entity.js';
import * as System from './ECS/System.js'



// Create the application helper and add its render target to the page
// const app = new PIXI.Application();
// await app.init({ width: 640, height: 360 });
// document.body.appendChild(app.canvas);


// create app and append to the browser DOM
export const app = new PIXI.Application()

await app.init({
  width: window.innerWidth,
  height: window.innerHeight,
  backgroundAlpha: 0

});
document.body.appendChild(app.canvas);



// // Handle window resizing
window.addEventListener('resize', () => {
  app.renderer.resize(window.innerWidth, window.innerHeight);
});

// Export a container for the stage
export const stage = new PIXI.Container();
app.stage.addChild(stage);

// Export world dimensions
export const worldWidth = window.innerWidth;
export const worldHeight = window.innerHeight;

// Engine Exports
export { PIXI, BaseScene, SceneManager, Shapes, Utils, Stars, Entity, System };