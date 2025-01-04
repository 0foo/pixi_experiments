class ShootingSystem {
    constructor(scene, playerEntity) {
        this.scene = scene;
        this.playerEntity = playerEntity;
    }

    shoot(entities) {
        const playerPos = this.playerEntity.getComponent(Position);
        const playerVel = this.playerEntity.getComponent(Velocity);
        const playerRenderable = this.playerEntity.getComponent(Renderable);

        // Create a new bullet entity
        const bullet = new Entity();
        bullet.addComponent(new Position(playerPos.x, playerPos.y));
        bullet.addComponent(new Velocity(
            Math.sin(playerRenderable.graphic.rotation) * 10,
            -Math.cos(playerRenderable.graphic.rotation) * 10
        ));
        bullet.addComponent(new Bullet(10));
        bullet.addComponent(new Renderable(new PIXI.Graphics()
            .beginFill(0xFFFF00)
            .drawCircle(0, 0, 5)
            .endFill())
        );

        this.scene.addChild(bullet.getComponent(Renderable).graphic);
        entities.push(bullet);
    }
}
