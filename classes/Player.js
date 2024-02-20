class Player {
    constructor(world_container){
        this.targetRotation = 0;   // Target rotation to reach
        this.rotationSpeed = 0.05; // Speed of rotation (adjust as needed)
        this.ship=null;
        this.camera=null;
        this.keyState = window.key_manager.keyState;
        this.max_speed=5;
        this.acceleration=.0000001
        this.speed=0
        this.boundary = {};
        this.centerX = 0;
        this.centerY = 0;
        this.app = window.game_manager.app
        this.camera = new PIXI.Container();
        this.camera.zIndex = 100; // ensure that the player is on top of the scene
        this.app.stage.addChild(camera);
    }


    initialize() {
        camera.addChild(ship)
        ship.anchor.set(0.5);  // This ensures the sprite is centered based on its middle
        ship.x = app.renderer.width / 2;
        ship.y = app.renderer.height / 2;
        this.ship = ship
        this.camera = camera;


        let line = new PIXI.Graphics();
        line.lineStyle(2, 0xFFFFFF, 1); // Set line style (thickness, color, alpha)
        line.moveTo(this.ship.x, this.ship.y); // Move to the sprite's center
        line.lineTo(this.ship.x + 50, this.ship.y); // Draw line to the right (zero angle)
        camera.addChild(line);

        this.boundary = {
            left: 0,
            right: -background.width+ app.screen.width,
            top: 0,
            bottom: -background.height + app.screen.height
        };  

        this.calc_center()

        return this;
    }

    update() {
        window.game_manager.app.ticker.add(() => {

            if (this.keyState.ArrowRight){
                this.ship.rotation += 0.1; // Rotate clockwise
            }
            if(this.keyState.ArrowLeft){
                this.ship.rotation -= 0.1; // Rotate counterclockwise
            }

        });
    }
    calc_center() {
        this.centerX = this.world_container.x + this.world_container.width / 2;
        this.centerY = this.world_container.y + this.world_container.height / 2
    }

    moveCloserToZero(number, amount) {
        let newNumber = Math.abs(number) - amount;
        newNumber = Math.max(newNumber, 0); // Ensure it doesn't go beyond zero
        return number >= 0 ? newNumber : -newNumber;
    }

    move() {

        var speed = 0
        var dx = Math.cos(this.player.ship.rotation);
        var dy = Math.sin(this.player.ship.rotation);

        window.game_manager.app.ticker.add(() => {
            let speed_decay = .02
            let acceleration = .04
            let spriteRotation = this.player.ship.rotation;

   
            if (this.keyState.ArrowUp) { 
                speed += acceleration 
                dx = Math.cos(spriteRotation);
                dy = Math.sin(spriteRotation);
            }

            if (this.world_container.y > this.boundary.top){
                speed = 0;
                this.world_container.y = this.boundary.top - 1;
            }

            if (this.world_container.y < this.boundary.bottom){
                speed = 0;
                this.world_container.y = this.boundary.bottom + 1;
            }

            if (this.world_container.x > this.boundary.left){
                speed = 0;
                this.world_container.x = this.boundary.left - 1;
            }

            if (this.world_container.x < this.boundary.right){
                speed = 0;
                this.world_container.x = this.boundary.right + 1;
            }

            
            this.world_container.y += dx * speed;
            this.world_container.x -= dy * speed;


            speed = this.moveCloserToZero(speed, speed_decay)


            this.calc_center();
        });
    }


}

export { Player };