import {Position, Movement, Rotation, Renderable, Velocity, Acceleration } from '/engine/ECS.js'


export class PlayerControlSystem {
    constructor() {
        this.keys = {}; // Track key states

        // Bind key event listeners
        document.addEventListener("keydown", this.handleKeyDown.bind(this));
        document.addEventListener("keyup", this.handleKeyUp.bind(this));
    }

    handleKeyDown(event) {
        this.keys[event.key] = true;
    }

    handleKeyUp(event) {
        this.keys[event.key] = false;
    }

    update(entities, delta) {
        for (const entity of entities) {
            if (!entity.hasLabel("player")) continue;

            const rotation = entity.getComponent(Rotation);
            const velocity = entity.getComponent(Velocity);
            const acceleration = entity.getComponent(Acceleration);


            if (!rotation || !velocity || !acceleration) continue;

            this.handleRotation(rotation);
            this.handleAcceleration(velocity, rotation, acceleration);
        }
    }

    handleRotation(rotation) {
        if (this.keys["ArrowLeft"]) {
            rotation.angle -= rotation.speed; // Rotate counterclockwise
        }
        if (this.keys["ArrowRight"]) {
            rotation.angle += rotation.speed; // Rotate clockwise
        }
    }

    handleAcceleration(velocity, rotation, acceleration) {
        if (this.keys["ArrowUp"]) {
            velocity.vx += Math.sin(rotation.angle) * acceleration.go;
            velocity.vy -= Math.cos(rotation.angle) * acceleration.go;
        }
    }
}


export class RenderingSystem {
    update(entities, delta) {
        for (const entity of entities) {
            if (
                entity.hasComponent(Position) &&
                entity.hasComponent(Renderable) &&
                entity.hasComponent(Rotation)
            ) {
                const position = entity.getComponent(Position);
                const renderable = entity.getComponent(Renderable);
                const rotation = entity.getComponent(Rotation);

                // Update position
                renderable.graphic.x = position.x;
                renderable.graphic.y = position.y;

                // Update rotation (independent of movement)
                renderable.graphic.rotation = rotation.angle;
            }
        }
    }
}

export class PhysicsSystem {
    constructor(scene, friction=0.98) {
        this.scene = scene; // Scene boundaries for clamping
        this.friction = friction
    }

    update(entities, delta) {
        for (const entity of entities) {
            const position = entity.getComponent(Position);
            const velocity = entity.getComponent(Velocity);

            if (!position || !velocity) continue;

            this.applyVelocity(position, velocity);
            this.applyFriction(velocity);
            this.clampPosition(position);
        }
    }

    applyVelocity(position, velocity) {
        // Update position based on velocity
        position.x += velocity.vx;
        position.y += velocity.vy;
    }

    applyFriction(velocity) {
        // Apply friction to slow down over time
        velocity.vx *= this.friction;
        velocity.vy *= this.friction;
    }

    clampPosition(position) {
        // Ensure the entity stays within the scene boundaries
        position.x = Math.max(0, Math.min(position.x, this.scene.maxWidth));
        position.y = Math.max(0, Math.min(position.y, this.scene.maxHeight));
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
            
//             if(entity.hasLabel("player")) {
//                 const position = entity.getComponent(Position);
//                 const rotation = entity.getComponent(Rotation);
//                 const movement = entity.getComponent(Movement);

//                 // Ensure the entity has all required components
//                 if (position && rotation && movement && control) {
//                     // Handle rotation
//                     if (control.keys["ArrowLeft"]) {
//                         rotation.angle -= 0.05; // Rotate counterclockwise
//                     }
//                     if (control.keys["ArrowRight"]) {
//                         rotation.angle += 0.05; // Rotate clockwise
//                     }

//                     // Handle movement
//                     if (control.keys["ArrowUp"]) {
//                         movement.speed = Math.min(movement.speed + movement.acceleration, movement.maxSpeed);
//                     } else {
//                         movement.speed = Math.max(movement.speed - movement.acceleration * 0.5, 0); // Slow down gradually
//                     }

//                     // Update position based on rotation and speed
//                     position.x += Math.sin(rotation.angle) * movement.speed;
//                     position.y -= Math.cos(rotation.angle) * movement.speed;
//                 }
//                 return;
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
