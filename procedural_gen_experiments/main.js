import { MySpriteSheet } from './lib/MySpriteSheet.js';
import { ScreenBasedMazeGenerator } from './lib/ProceduralGenerator/ScreenBasedMazeGenerator.js';

const app = new PIXI.Application();
await app.init({ width: 1000, height: 800, background: '#0000' });
document.body.appendChild(app.canvas);

const tileSize = 64;



// reference assets
await PIXI.Assets.add({ alias: 'tileset', src: './content/tileset.json' });
await PIXI.Assets.load('tileset');


// load assets
const the_sheet = MySpriteSheet.fromPixiAlias('tileset')

let the_indexes = [...the_sheet.sheet.framesArray.keys()]

const random_map = new ScreenBasedMazeGenerator(app.renderer.width, app.renderer.height, 64, -1, the_indexes).generateMaze();



the_sheet.drawGrid(random_map, app, 64); // optional tile size argument