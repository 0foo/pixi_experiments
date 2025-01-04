import { PIXI } from '/engine/Illusionist.js';


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

        // Initial position and rotation
        this.x = 4000;
        this.y =  4000;
        this.label = 'player_object';
        // this.rotation = 0;

        // // Movement properties
        this.speed = 0;
        this.acceleration = 0.5;
        this.maxSpeed = 20;

        // // Add keyboard event listeners
        window.addEventListener("keydown", this.onKeyDown.bind(this));
        window.addEventListener("keyup", this.onKeyUp.bind(this));

        // // Track pressed keys
        this.keys = {};
    }

    onKeyDown(event) {
        this.keys[event.key] = true;
    }

    onKeyUp(event) {
        this.keys[event.key] = false;
    }

    update() {
        // Rotation with left/right arrow keys
        if (this.keys["ArrowLeft"]) {
            this.rotation -= 0.05; // Rotate counterclockwise
        }
        if (this.keys["ArrowRight"]) {
            this.rotation += 0.05; // Rotate clockwise
        }

        // Move forward with up arrow key
        if (this.keys["ArrowUp"]) {
            this.speed = Math.min(this.speed + this.acceleration, this.maxSpeed);
        } else {
            this.speed = Math.max(this.speed - this.acceleration * 0.5, 0); // Slow down gradually
        }

        // Update position based on current rotation and speed
        this.x += Math.sin(this.rotation) * this.speed;
        this.y -= Math.cos(this.rotation) * this.speed;

        // Prevent the player from leaving the scene boundaries
        this.clampPosition();
    }

    clampPosition() {
        // Clamp the player's position to the scene boundaries
        this.x = Math.max(0, Math.min(this.x, this.scene.width));
        this.y = Math.max(0, Math.min(this.y, this.scene.height));
    }
}
