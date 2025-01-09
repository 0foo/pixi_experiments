// AsteroidFactory.js
import { Entity, Position, Rotation, Movement, Renderable, Velocity, Acceleration } from '/engine/ECS.js';
import { PIXI } from '/engine/Illusionist.js';

/**
 * AsteroidFactory Class
 * 
 * Responsible for creating asteroid entities with random properties and graphical representations.
 */
export class AsteroidFactory {
    /**
     * Creates an instance of AsteroidFactory.
     */

    /**
     * Generates a random asteroid entity.
     * @param {Object} options - Optional parameters to override defaults.
     * @param {number} [options.x] - X position of the asteroid.
     * @param {number} [options.y] - Y position of the asteroid.
     * @param {number} [options.size] - Size (radius) of the asteroid.
     * @param {number} [options.speed] - Speed of the asteroid.
     * @param {number} [options.angle] - Movement angle in radians.
     * @param {number} [options.rotationSpeed] - Rotation speed in radians/frame.
     * @param {number} [options.sides] - Number of sides for the asteroid polygon.
     * @param {number} [options.variance] - Variance in radius to create irregularity.
     * @param {number} [options.fillColor] - Fill color in hexadecimal.
     * @param {number} [options.lineColor] - Outline color in hexadecimal.
     * @param {number} [options.lineWidth] - Width of the outline.
     * @returns {Entity} - The created asteroid entity.
     */

    createAsteroid(screenWidth, screenHeight, options = {}) {
        const asteroid = new Entity();

        // Set default or provided values
        const size = options.size !== undefined ? options.size : Math.random() * 30 + 10; // 10 to 40
        const x = options.x !== undefined ? options.x : Math.random() * screenWidth;
        const y = options.y !== undefined ? options.y : Math.random() * screenHeight;
        const speed = options.speed !== undefined ? options.speed : Math.random() * 2 + 0.5; // 0.5 to 2.5
        const angle = options.angle !== undefined ? options.angle : Math.random() * Math.PI * 2; // 0 to 2π
        const vx = Math.cos(angle) * speed;
        const vy = Math.sin(angle) * speed;
        const rotationSpeed = options.rotationSpeed !== undefined ? options.rotationSpeed : (Math.random() * 0.04 - 0.02); // -0.02 to 0.02
        const sides = options.sides !== undefined ? options.sides : (Math.floor(Math.random() * 5) + 5); // 5 to 9 sides
        const variance = options.variance !== undefined ? options.variance : (size * 0.4);
        const fillColor = options.fillColor !== undefined ? options.fillColor : 0x808080; // Gray
        const lineColor = options.lineColor !== undefined ? options.lineColor : 0xFFFFFF; // White
        const lineWidth = options.lineWidth !== undefined ? options.lineWidth : 2; // Outline width

        // Create PixiJS Graphics for the asteroid
        const graphic = this.createRandomAsteroidGraphic({
            size,
            sides,
            variance,
            fillColor,
            lineColor,
            lineWidth,
        });

        asteroid.addComponent(new Position(0, 0));
        asteroid.addComponent(new Rotation(.1, 0));
        asteroid.addComponent(new Acceleration(.5));
        asteroid.addComponent(new Velocity());

        // // Assign components to the asteroid entity
        // asteroid.addComponent(new Position(x, y));
        // asteroid.addComponent(new Velocity(vx, vy));
        // asteroid.addComponent(new Rotation(0, rotationSpeed));
        // asteroid.addComponent(new Renderable(graphic));
        // asteroid.addComponent(new Movement()); // If using a Movement component
        // asteroid.addComponent(new Acceleration()); // If using an Acceleration component

        // Add label for identification
        asteroid.addLabel("asteroid");

        return asteroid;
    }

    /**
     * Generates a PixiJS Graphics object representing an irregular asteroid polygon.
     *
     * @param {Object} params - Parameters for the asteroid graphic.
     * @param {number} params.size - Base radius of the asteroid.
     * @param {number} params.sides - Number of sides for the polygon.
     * @param {number} params.variance - Variance in radius to create irregularity.
     * @param {number} params.fillColor - Fill color in hexadecimal.
     * @param {number} params.lineColor - Line (outline) color in hexadecimal.
     * @param {number} params.lineWidth - Width of the outline.
     * @returns {PIXI.Graphics} - The generated Graphics object.
     */
    createRandomAsteroidGraphic({
        size = 20,
        sides = 8,
        variance = 8,
        fillColor = 0x808080,    // Gray
        lineColor = 0xFFFFFF,    // White
        lineWidth = 2,
    } = {}) {
        const graphic = new PIXI.Graphics();
        
        // Begin fill with specified color
        graphic.fill(fillColor);
        
        // Set line style for outline
        graphic.setStrokeStyle(lineWidth, lineColor, 1);
        
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
        
        // Set pivot to center for easier rotation and positioning
        graphic.pivot.set(0, 0);
        
        return graphic;
    }
}
