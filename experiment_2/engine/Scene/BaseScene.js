import { PIXI } from '/engine/Illusionist.js';

export class BaseScene extends PIXI.Container {
  /**
   * @param {number|null} width - The desired width of the scene (defaults to screen width if null).
   * @param {number|null} height - The desired height of the scene (defaults to screen height if null).
   */
  constructor() {
    super();
  }

  /**
   * Sets the size of the scene.
   * @param {number} width - The width of the scene.
   * @param {number} height - The height of the scene.
   * Defaults to screen size if false or null provided
   */
  setSize(width, height) {   
    this.width = width
    this.height = height
    this.background = null; // Placeholder for background graphic

    // If there's a background, remove it and redefine the bounds
    if (this.background) {
      this.removeChild(this.background);
      this.background.destroy()
    }
    //create a transluscent background to give the logical container dimensions 
    this.background = new PIXI.Graphics()
      .rect(0, 0, width, height)
      .fill({ color: 0x000000, alpha: 1 });
    this.background.label = 'background_fill';
    this.addChildAt(this.background, 0); 
    // console.log(this.width); // Should return the rectangle bounds
   }


  /**
   * Called when the scene is entered.
   * @param {SceneManager} sceneManager - The Scene Manager instance.
   */
  initialize(sceneManager) {
    this.sceneManager = sceneManager;
    console.log('Entered scene:', this.constructor.name);
  }

  /**
   * To be used by subclasses.
   */
  onEnter() {
    console.log("If you're seeing this you need to overwrite the onEnter method in your scene");
  }

  /**
   * Called when the scene is exited.
   */
  onExit() {
    console.log('Exited scene:', this.constructor.name);
  }

  /**
   * Called every frame during the game loop.
   * @param {number} delta - The delta time from the game loop.
   */
  update(delta) {}
}
