import { BaseScene } from '/engine/Illusionist.js';
import { Stars, PIXI, app } from '/engine/Illusionist.js';
import { Player } from '/game/objects/Player.js'


export class GameplayScene extends BaseScene {

  onEnter() {
    //console.log(Math.round(Math.random() * 10000))
    this.setSize(8000, 8000)
    Stars.generateStars(this, 10000);
    this.player = new Player(this)
    this.addChild(this.player)
  }


  onExit() {
    console.log("Exiting Gameplay Scene")
  }

  update(delta){
    this.player.update(delta)
    // Update the camera to follow the player
    this.pivot.x = Math.max(0, Math.min(this.player.x - app.renderer.screen.width / 2, this.width - app.renderer.screen.width));
    this.pivot.y = Math.max(0, Math.min(this.player.y - app.renderer.screen.height / 2, this.height - app.renderer.screen.height));
  }

}
