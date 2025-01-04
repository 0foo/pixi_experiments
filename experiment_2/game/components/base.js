class Position {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

class Velocity {
    constructor(vx = 0, vy = 0) {
        this.vx = vx;
        this.vy = vy;
    }
}

class Renderable {
    constructor(graphic) {
        this.graphic = graphic;
    }
}

class Bullet {
    constructor(speed) {
        this.speed = speed;
    }
}

class PlayerControl {
    constructor() {
        this.keys = {};
    }
}