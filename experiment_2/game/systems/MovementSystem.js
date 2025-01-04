class MovementSystem {
    update(entities, delta) {
        for (const entity of entities) {
            if (entity.hasComponent(Position) && entity.hasComponent(Velocity)) {
                const position = entity.getComponent(Position);
                const velocity = entity.getComponent(Velocity);

                position.x += velocity.vx * delta;
                position.y += velocity.vy * delta;
            }
        }
    }
}