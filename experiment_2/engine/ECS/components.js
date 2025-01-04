export class Position {
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }
}

export class Velocity {
    constructor(vx = 0, vy = 0) {
        this.vx = vx;
        this.vy = vy;
    }
}

export class Renderable {
    constructor(graphic) {
        this.graphic = graphic;
    }
}

export class Bullet {
    constructor(speed) {
        this.speed = speed;
    }
}

export class Movement {
    constructor(speed, acceleration, deceleration, maxSpeed, direction = 0) {
        this.speed = speed;
        this.acceleration = acceleration;
        this.deceleration = deceleration;
        this.maxSpeed = maxSpeed;
        this.direction = direction;
    }
}

export class Rotation {
    constructor(speed, angle = 0 ) {
        this.speed = speed;
        this.angle = angle;
    }
}


