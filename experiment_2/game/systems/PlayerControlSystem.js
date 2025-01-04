class PlayerControlSystem {
    constructor() {
        this.keys = {};
        window.addEventListener("keydown", (e) => this.keys[e.key] = true);
        window.addEventListener("keyup", (e) => this.keys[e.key] = false);
    }

    update(playerEntity) {
        const velocity = playerEntity.getComponent(Velocity);
        const renderable = playerEntity.getComponent(Renderable);

        if (this.keys["ArrowLeft"]) renderable.graphic.rotation -= 0.05;
        if (this.keys["ArrowRight"]) renderable.graphic.rotation += 0.05;

        if (this.keys["ArrowUp"]) {
            velocity.vx = Math.sin(renderable.graphic.rotation) * 5;
            velocity.vy = -Math.cos(renderable.graphic.rotation) * 5;
        } else {
            velocity.vx *= 0.95;
            velocity.vy *= 0.95;
        }
    }
}
