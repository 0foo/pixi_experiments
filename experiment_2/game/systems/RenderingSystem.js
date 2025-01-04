class RenderingSystem {
    update(entities) {
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