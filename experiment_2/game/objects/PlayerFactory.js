import { Entity } from '/engine/ECS.js';
import { Position, Rotation, Movement, Renderable } from '/engine/ECS.js';
import { PIXI } from '/engine/Illusionist.js';

export class PlayerFactory {
    constructor(scene) {
        this.scene = scene;
    }

    createPlayer() {
        const player = new Entity();
        let start_width = window.innerWidth / 2
        let start_height = window.innerHeight / 2
        player.addComponent(new Position(start_width, start_height));
        player.addComponent(new Rotation(0));
        player.addComponent(new Movement(0, .001, null));
        // // player.addComponent(new PlayerControlSystem());
        const triangle = new PIXI.Graphics();
        triangle.poly([
            0, -20, // Tip of the triangle
            -15, 15, // Bottom left
            15, 15, // Bottom right
        ]);
        triangle.fill(0xFF0000); // Red color
        player.addComponent(new Renderable(triangle));
        this.scene.addChild(
            player.getComponent(Renderable).graphic
        )
        return player;
    }
}
