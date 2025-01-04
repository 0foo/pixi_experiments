import { MovementSystem, RenderingSystem, PlayerControlSystem } from '/engine/ECS.js';
import { BaseScene, app } from '/engine/Illusionist.js';
import { Stars, PIXI } from '/engine/Illusionist.js';
import { PlayerFactory } from '/game/objects/PlayerFactory.js';
import { Renderable, Position } from '/engine/ECS.js';


export class GameplayScene extends BaseScene {


  onEnter() {
    //console.log(Math.round(Math.random() * 10000))
    this.setSize(8000, 8000)
    Stars.generateStars(this, 10000);

    // player creation
    this.player = new PlayerFactory(this).createPlayer(4000, 4000)
    this.entities.push(this.player); // Add player's entity to the entities list
  }

  onExit() {
    console.log("Exiting Gameplay Scene")
  }

  initSystems(){
    // setup systems
    this.systems.push(new PlayerControlSystem());
    this.systems.push(new MovementSystem(this));
    this.systems.push(new RenderingSystem());
  }

  onUpdate(delta) {
    // this.player.update(delta)
    // Update the camera to follow the player
    this.pivot.x = Math.max(0, Math.min(this.player.getComponent(Position).x - app.renderer.screen.width / 2, this.width - app.renderer.screen.width));
    this.pivot.y = Math.max(0, Math.min(this.player.getComponent(Position).y - app.renderer.screen.height / 2, this.height - app.renderer.screen.height));
  }

}
