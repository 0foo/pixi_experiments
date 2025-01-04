import { Entity, Position, Velocity, Bounds, Renderable } from '/engine/ECS/Entity.js';
import { PIXI } from '/engine/Illusionist.js'

export class BulletFactory {
    createBullet(x, y, rotation, speed = 10) {
        // Create a new ECS entity
        const bullet = new Entity();

        // Add position component
        bullet.addComponent(new Position(x, y));

        // Add velocity component (calculated from rotation and speed)
        bullet.addComponent(new Velocity(
            Math.sin(rotation) * speed,
            -Math.cos(rotation) * speed
        ));

        // Add bounds component (e.g., circular collision area)
        bullet.addComponent(new Bounds('circle', x, y, 5)); // Radius of 5

        // Add renderable component
        const bulletGraphic = new PIXI.Graphics();
        bulletGraphic.circle(0, 0, 5).fill(0xFFFF00);
        bullet.addComponent(new Renderable(bulletGraphic));
        return bullet;
    }
}
