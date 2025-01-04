export class SceneManager {
  constructor(app) {
    this.app = app;
    this.currentScene = null;
  }

  /**
   * Switch to a new scene.
   * @param {Scene} newScene - The new scene to switch to.
   */
  switchScene(newScene) {

    // Remove the current scene if it exists
    if (this.currentScene) {
      this.currentScene.onExit();
    }

    // Remove and destroy all children from this.app.stage
    // Might be better to just let garbage collector handle this?? something to look into
    this.app.stage.removeChildren().forEach(child => {
      if (child.destroy) {
          child.destroy({ children: true, texture: true, baseTexture: true });
      }
    });

    // Set the new scene
    this.currentScene = newScene;
    this.app.stage.addChild(this.currentScene);

    // Initialize the new scene
    this.currentScene.initialize(this);
    this.currentScene.onEnter();
  }

  /**
   * Update the current scene.
   * @param {number} delta - The delta time from the game loop.
   */
  update(delta) {
    if (this.currentScene) {
      this.currentScene.update(delta);
    }
  }
}
