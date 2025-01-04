export class Bullet extends PIXI.Graphics {
    constructor(x, y, rotation) {
        super();

        this.beginFill(0xFFFF00); // Yellow color
        this.drawCircle(0, 0, 5); // Small circle as the bullet
        this.endFill();

        // Set initial position and rotation
        this.x = x;
        this.y = y;
        this.rotation = rotation;

        // Speed of the bullet
        this.speed = 10;
    }

    update() {
        // Move the bullet forward
        this.x += Math.sin(this.rotation) * this.speed;
        this.y -= Math.cos(this.rotation) * this.speed;
    }
}
