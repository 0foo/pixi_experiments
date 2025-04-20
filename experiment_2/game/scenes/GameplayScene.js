import { RenderingSystem, PlayerControlSystem, PhysicsSystem } from '/engine/ECS.js';
import { BaseScene, app } from '/engine/Illusionist.js';
import { Stars, PIXI } from '/engine/Illusionist.js';
import { PlayerFactory } from '/game/objects/PlayerFactory.js';
import { AsteroidFactory } from '/game/objects/AsteroidFactory.js';

import { Renderable, Position } from '/engine/ECS.js';


export class GameplayScene extends BaseScene {


  onEnter() {
    //console.log(Math.round(Math.random() * 10000))
    this.setSize(1000, 1000)
    Stars.generateStars(this, 1000);

    // player creation
    this.player = new PlayerFactory().createPlayer(500, 500)
    let asteroid = new AsteroidFactory().createAsteroid(400,400)
    

    // add entity and graphics to scene/container
    this.addEntity(this.player, this.player.getComponent(Renderable).graphic, )
    this.addEntity(asteroid, asteroid.getComponent(Renderable).graphic)

  }

  onExit() {
    console.log("Exiting Gameplay Scene")
  }

  initSystems(){
    // setup systems
    this.systems.push(new PlayerControlSystem());
    this.systems.push(new RotationSystem());
    this.systems.push(new RenderingSystem());
    this.systems.push(new PhysicsSystem(this, .98));
  }

  onUpdate(delta) {

    this.pivot.x = Math.max(0, Math.min(this.player.getComponent(Position).x - app.renderer.screen.width / 2, this.width - app.renderer.screen.width));
    this.pivot.y = Math.max(0, Math.min(this.player.getComponent(Position).y - app.renderer.screen.height / 2, this.height - app.renderer.screen.height));
  }

}
