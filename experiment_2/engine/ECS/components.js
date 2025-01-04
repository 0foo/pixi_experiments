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

export class PlayerControl {
    constructor() {
        this.keys = {};
    }
}

export class Movement {
    constructor(speed, acceleration, maxSpeed) {
        this.speed = speed;
        this.acceleration = acceleration;
        this.maxSpeed = maxSpeed;
    }
}

export class Rotation {
    constructor(angle = 0) {
        this.angle = angle;
    }
}


