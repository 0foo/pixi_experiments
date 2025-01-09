import { Entity, Position, Rotation, Movement, Renderable, Velocity, Acceleration } from '/engine/ECS.js';
import { PIXI } from '/engine/Illusionist.js';

export class PlayerFactory {

    createPlayer(start_x, start_y) {
        const player = new Entity();
        player.addComponent(new Position(start_x, start_y));
        player.addComponent(new Rotation(.1, 0));
        player.addComponent(new Acceleration(.5));
        player.addComponent(new Velocity());

        // // player.addComponent(new PlayerControlSystem());
        const triangle = new PIXI.Graphics();
        triangle.poly([
            0, -20, // Tip of the triangle
            -15, 15, // Bottom left
            15, 15, // Bottom right
        ]);
        triangle.fill(0xFF0000); // Red color
        player.addComponent(new Renderable(triangle));
        player.addLabel("player")
        return player;
    }
}
