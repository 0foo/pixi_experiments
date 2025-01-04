import { PIXI } from '/engine/Illusionist.js';
import { Entity  } from '/engine/ECS.js';
import { PlayerControl } from '/game/ecs/components.js'

export class Player extends PIXI.Container {
    constructor(scene) {
        super();
        this.scene = scene
        this.triangle = new PIXI.Graphics();
        this.triangle.poly([
            0, -20, // Tip of the triangle
            -15, 15, // Bottom left
            15, 15, // Bottom right
        ]);
        this.triangle.fill(0xFF0000); // Red color
        this.addChild(this.triangle);


        // this.entity = new Entity();
        // this.entity.addComponent(new PlayerControl());

        // Initial position and rotation
        this.x = 4000;
        this.y =  4000;
        this.label = 'player_object';
        // this.rotation = 0;

        // // Movement properties
        this.speed = 0;
        this.acceleration = 0.5;
        this.maxSpeed = 20;
        this.player_control_system = new PlayerControlSystem()
    }


    update() {
        this.player_control_system.update(this)
        this.clampPosition();
     
    }

    clampPosition() {
        // Clamp the player's position to the scene boundaries
        this.x = Math.max(0, Math.min(this.x, this.scene.maxWidth));
        this.y = Math.max(0, Math.min(this.y, this.scene.maxHeight));
    }
}
