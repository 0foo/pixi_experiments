// AsteroidFactory.js
import { Entity, Position, Rotation, Movement, Renderable, Velocity, Acceleration } from '/engine/ECS.js';
import { PIXI } from '/engine/Illusionist.js';


export class AsteroidFactory {

    createAsteroid(start_x, start_y, options = {}) {
        
        const asteroid = new Entity();

        // Set default or provided values
        // const speed = options.speed !== undefined ? options.speed : Math.random() * 2 + 0.5; // 0.5 to 2.5
        // const angle = options.angle !== undefined ? options.angle : Math.random() * Math.PI * 2; // 0 to 2π
        // const vx = Math.cos(angle) * speed;
        // const vy = Math.sin(angle) * speed;
        // const rotationSpeed = options.rotationSpeed !== undefined ? options.rotationSpeed : (Math.random() * 0.04 - 0.02); // -0.02 to 0.02


        // Create PixiJS Graphics for the asteroid
        const graphic = this.createRandomAsteroidGraphic();
        asteroid.addComponent(new Renderable(graphic))
        asteroid.addComponent(new Position(start_x, start_y));
        asteroid.addComponent(new Rotation(1, 1));


        // asteroid.addComponent(new Acceleration(0));
        // asteroid.addComponent(new Velocity());


        // Add label for identification
        asteroid.addLabel("asteroid");

        return asteroid;
    }

    createRandomAsteroidGraphic(options = {}) {
        const size = options.size !== undefined ? options.size : Math.random() * 30 + 10; // 10 to 40
        const sides = options.sides !== undefined ? options.sides : (Math.floor(Math.random() * 5) + 5); // 5 to 9 sides
        const variance = options.variance !== undefined ? options.variance : (size * 0.4);
        const fillColor = options.fillColor !== undefined ? options.fillColor : 0x808080; // Gray
        const lineColor = options.lineColor !== undefined ? options.lineColor : 0xFFFFFF; // White
        const lineWidth = options.lineWidth !== undefined ? options.lineWidth : 2; // Outline width

        const graphic = new PIXI.Graphics();

        const points = [];
        const angleStep = (Math.PI * 2) / sides;

        for (let i = 0; i < sides; i++) {
            const theta = i * angleStep;
            const r = size + (Math.random() * variance - variance / 2);
            const x = r * Math.cos(theta);
            const y = r * Math.sin(theta);
            points.push(x, y);
        }

        // Draw the polygon
        graphic.poly(points);
        graphic.fill(fillColor);

        // Set line style for outline
        graphic.setStrokeStyle(lineWidth, lineColor, 1);

        // Update the pivot to the center
        const bounds = graphic.getBounds();
        graphic.pivot.set(bounds.width / 2, bounds.height / 2);

        return graphic;
    }


    // createRandomAsteroidGraphic(options={}) {

    //     const size = options.size !== undefined ? options.size : Math.random() * 30 + 10; // 10 to 40
    //     const sides = options.sides !== undefined ? options.sides : (Math.floor(Math.random() * 5) + 5); // 5 to 9 sides
    //     const variance = options.variance !== undefined ? options.variance : (size * 0.4);
    //     const fillColor = options.fillColor !== undefined ? options.fillColor : 0x808080; // Gray
    //     const lineColor = options.lineColor !== undefined ? options.lineColor : 0xFFFFFF; // White
    //     const lineWidth = options.lineWidth !== undefined ? options.lineWidth : 2; // Outline width
        

    //     const graphic = new PIXI.Graphics();

    //     const points = [];
    //     const angleStep = (Math.PI * 2) / sides;
        
    //     for (let i = 0; i < sides; i++) {
    //         const theta = i * angleStep;
    //         const r = size + (Math.random() * variance - variance / 2);
    //         const x = r * Math.cos(theta);
    //         const y = r * Math.sin(theta);
    //         points.push(x, y);
    //     }
        
    //     // Draw the polygon
    //     graphic.poly(points);
    //     // Begin fill with specified color
    //     graphic.fill(fillColor);

    //     // Set line style for outline
    //     graphic.setStrokeStyle(lineWidth, lineColor, 1);
    //     // Set pivot to center for easier rotation and positioning

    //     graphic.pivot.set(0, 0);
        
    //     return graphic;
    // }
}
