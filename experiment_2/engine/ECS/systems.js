import {Position, Movement, Rotation, Renderable } from '/engine/ECS.js'

export class MovementSystem {
    constructor(scene) {
        this.scene = scene; // Reference to the scene for boundary clamping
    }

    update(entities, delta) {
        for (const entity of entities) {
            const position = entity.getComponent(Position);
            const movement = entity.getComponent(Movement);
            const rotation = entity.getComponent(Rotation);
            // console.log(position.x, position.y)

            // Ensure the entity has the required components
            if (position && movement && rotation) {
                // Apply movement based on the rotation angle
                position.x += Math.sin(rotation.angle) * movement.speed;
                position.y -= Math.cos(rotation.angle) * movement.speed;
                console.log(position.x, position.y)

                // Adjust speed based on acceleration
                if (movement.maxSpeed) {
                    movement.speed = Math.min(movement.speed + movement.acceleration, movement.maxSpeed);
                }
                else{
                    movement.speed = movement.speed + movement.acceleration ;
                }

                // Clamp position within the scene boundaries
                this.clampPosition(position);
            }
        }
    }

    clampPosition(position) {
        // Clamp the position to the scene boundaries
        position.x = Math.max(0, Math.min(position.x, this.scene.maxWidth));
        position.y = Math.max(0, Math.min(position.y, this.scene.maxHeight));
    }
}


export class RenderingSystem {
    update(entities, delta) {
        for (const entity of entities) {
            if (entity.hasComponent(Position) && entity.hasComponent(Renderable)) {
                const position = entity.getComponent(Position);
                const renderable = entity.getComponent(Renderable);

                renderable.graphic.x = position.x;
                renderable.graphic.y = position.y;
            }
        }
    }
}



// export class PlayerContainerControlSystem {
//     constructor(playerEntity) {
//         this.keys = {};
//         this.playerEntity = playerEntity;
//         window.addEventListener("keydown", (e) => this.keys[e.key] = true);
//         window.addEventListener("keyup", (e) => this.keys[e.key] = false);
//     }// Bullet size
    

//     update() {
//         // Rotation with left/right arrow keys
//         if (this.keys["ArrowLeft"]) {
//             playerEntity.rotation -= 0.05; // Rotate counterclockwise
//         }
//         if (this.keys["ArrowRight"]) {
//             playerEntity.rotation += 0.05; // Rotate clockwise
//         }

//         // Move forward with up arrow key
//         if (this.keys["ArrowUp"]) {
//             playerEntity.speed = Math.min(playerEntity.speed + playerEntity.acceleration, playerEntity.maxSpeed);
//         } else {
//             playerEntity.speed = Math.max(playerEntity.speed - playerEntity.acceleration * 0.5, 0); // Slow down gradually
//         }

//         // Update position based on current rotation and speed
//         playerEntity.x += Math.sin(playerEntity.rotation) * playerEntity.speed;
//         playerEntity.y -= Math.cos(playerEntity.rotation) * playerEntity.speed;
//     }
// }

// export class PlayerControlSystem {
//     update(entities, delta) {
//         for (const entity of entities) {
//             const position = entity.getComponent(Position);
//             const rotation = entity.getComponent(Rotation);
//             const movement = entity.getComponent(Movement);
//             const control = entity.getComponent(PlayerControl);

//             // Ensure the entity has all required components
//             if (position && rotation && movement && control) {
//                 // Handle rotation
//                 if (control.keys["ArrowLeft"]) {
//                     rotation.angle -= 0.05; // Rotate counterclockwise
//                 }
//                 if (control.keys["ArrowRight"]) {
//                     rotation.angle += 0.05; // Rotate clockwise
//                 }

//                 // Handle movement
//                 if (control.keys["ArrowUp"]) {
//                     movement.speed = Math.min(movement.speed + movement.acceleration, movement.maxSpeed);
//                 } else {
//                     movement.speed = Math.max(movement.speed - movement.acceleration * 0.5, 0); // Slow down gradually
//                 }

//                 // Update position based on rotation and speed
//                 position.x += Math.sin(rotation.angle) * movement.speed;
//                 position.y -= Math.cos(rotation.angle) * movement.speed;
//             }
//         }
//     }
// }




// export class ShootingSystem {
//     constructor(scene, playerEntity) {
//         this.scene = scene;
//         this.playerEntity = playerEntity;
//     }

//     shoot(entities) {
//         const playerPos = this.playerEntity.getComponent(Position);
//         const playerVel = this.playerEntity.getComponent(Velocity);
//         const playerRenderable = this.playerEntity.getComponent(Renderable);

//         // Create a new bullet entity
//         const bullet = new Entity();
//         bullet.addComponent(new Position(playerPos.x, playerPos.y));
//         bullet.addComponent(new Velocity(
//             Math.sin(playerRenderable.graphic.rotation) * 10,
//             -Math.cos(playerRenderable.graphic.rotation) * 10
//         ));
//         bullet.addComponent(new Bullet(10));
//         bullet.addComponent(new Renderable(new PIXI.Graphics()
//             .beginFill(0xFFFF00)
//             .drawCircle(0, 0, 5)
//             .endFill())
//         );

//         this.scene.addChild(bullet.getComponent(Renderable).graphic);
//         entities.push(bullet);
//     }
// }
