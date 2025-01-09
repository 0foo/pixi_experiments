// systems/UISystem.js
import { System } from '/engine/ECS.js';
import { Score, Lives, Position } from '/engine/ECS.js';
import { PIXI } from '/engine/Illusionist.js';

export class UISystem extends System {
    constructor(app) {
        super();
        this.app = app;
        this.container = new PIXI.Container();
        this.app.stage.addChild(this.container);

        // Create score text
        this.scoreText = new PIXI.Text('Score: 0', {
            fontFamily: 'Arial',
            fontSize: 24,
            fill: 0xffffff,
            align: 'left',
        });
        this.scoreText.position.set(10, 10);
        this.container.addChild(this.scoreText);

        // Create lives text
        this.livesText = new PIXI.Text('Lives: 3', {
            fontFamily: 'Arial',
            fontSize: 24,
            fill: 0xffffff,
            align: 'left',
        });
        this.livesText.position.set(10, 40);
        this.container.addChild(this.livesText);

        // Create player position text
        this.positionText = new PIXI.Text('Position: (0, 0)', {
            fontFamily: 'Arial',
            fontSize: 24,
            fill: 0xffffff,
            align: 'left',
        });
        this.positionText.position.set(10, 70);
        this.container.addChild(this.positionText);
    }

    update(entities, delta) {
        for (const entity of entities) {
            if (entity.hasComponent(Score)) {
                const score = entity.getComponent(Score);
                this.scoreText.text = `Score: ${score.value}`;
            }

            if (entity.hasComponent(Lives)) {
                const lives = entity.getComponent(Lives);
                this.livesText.text = `Lives: ${lives.count}`;
            }

            if (entity.hasLabel("player") && entity.hasComponent(Position)) {
                const position = entity.getComponent(Position);
                this.positionText.text = `Position: (${position.x.toFixed(1)}, ${position.y.toFixed(1)})`;
            }
        }
    }
}
