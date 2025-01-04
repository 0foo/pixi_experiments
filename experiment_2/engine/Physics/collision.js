class CollisionSystem {
    constructor() {
        this.objects = []; // Store registered objects
        this.collisionRules = {}; // Store collision rules based on tags
    }

    // Register an object with a tag and a function to query its dimensions
    registerObject(id, tag, getDimensions) {
        this.objects.push({ id, tag, getDimensions });
    }

    // Define a collision rule between two tags
    onCollision(tag1, tag2, callback) {
        const key = `${tag1}-${tag2}`;
        this.collisionRules[key] = callback;
    }

    // Check for collisions
    detectCollisions() {
        for (let i = 0; i < this.objects.length; i++) {
            for (let j = i + 1; j < this.objects.length; j++) {
                const obj1 = this.objects[i];
                const obj2 = this.objects[j];

                // Query dimensions
                const dim1 = obj1.getDimensions();
                const dim2 = obj2.getDimensions();

                if (this.isColliding(dim1, dim2)) {
                    const key1 = `${obj1.tag}-${obj2.tag}`;
                    const key2 = `${obj2.tag}-${obj1.tag}`;

                    // Trigger the collision event if a rule exists
                    if (this.collisionRules[key1]) {
                        this.collisionRules[key1](obj1, obj2);
                    } else if (this.collisionRules[key2]) {
                        this.collisionRules[key2](obj2, obj1);
                    }
                }
            }
        }
    }

    // Check if two objects are colliding
    isColliding(dim1, dim2) {
        return (
            dim1.x < dim2.x + dim2.width &&
            dim1.x + dim1.width > dim2.x &&
            dim1.y < dim2.y + dim2.height &&
            dim1.y + dim1.height > dim2.y
        );
    }
}