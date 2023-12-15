class Bullet {
    constructor(){
        location = 'assets/images/spaceship_art_pack_larger/blue/bullet.png'
    }

    async load_assets(){
        await PIXI.Assets.loadBundle('player');
        return this
    }

    initialize() {
        // setup player camera
        let app = window.game_manager.app
        let camera = new PIXI.Container();
        camera.zIndex = 100; // ensure that the player is on top of the scene
        app.stage.addChild(camera);

        // setup ship asset
        let ship_asset = PIXI.Assets.get('player_ship')
        let ship = new PIXI.AnimatedSprite(ship_asset.animations.thrustors);
        ship.animationSpeed = 0.1666
        ship.play()
        ship.scale.set(.2, .2)
        camera.addChild(ship)
        ship.anchor.set(0.5);  // This ensures the sprite is centered based on its middle
        ship.x = app.renderer.width / 2;
        ship.y = app.renderer.height / 2;
        this.ship = ship
        this.camera = camera;

        //setup key bindings
        window.addEventListener("keydown", () => {
            this.updateTargetRotation();
        });

        window.addEventListener("keyup", () =>{
            this.updateTargetRotation();
        });

        return this;
    }


    updateTargetRotation() {
        if (this.keyState.ArrowUp && this.keyState.ArrowRight) {
            this.targetRotation = Math.PI / 4; // Up-Right
        } else if (this.keyState.ArrowUp && this.keyState.ArrowLeft) {
            this.targetRotation = -Math.PI / 4; // Up-Left
        } else if (this.keyState.ArrowDown && this.keyState.ArrowRight) {
            this.targetRotation = 3 * Math.PI / 4; // Down-Right
        } else if (this.keyState.ArrowDown && this.keyState.ArrowLeft) {
            this.targetRotation = -3 * Math.PI / 4; // Down-Left
        } else if (this.keyState.ArrowUp) {
            this.targetRotation = 0; // Up
        } else if (this.keyState.ArrowRight) {
            this.targetRotation = Math.PI / 2; // Right
        } else if (this.keyState.ArrowDown) {
            this.targetRotation = Math.PI; // Down
        } else if (this.keyState.ArrowLeft) {
            this.targetRotation = -Math.PI / 2; // Left
        }
    }

    update() {
        window.game_manager.app.ticker.add(() => {

            let delta = ((this.targetRotation - this.currentRotation + 3 * Math.PI) % (2 * Math.PI)) - Math.PI;

            if (Math.abs(delta) > 0.01) {
                this.currentRotation += delta * this.rotationSpeed;
                this.ship.rotation = this.currentRotation;
            }
        });
    }
}

export { Player };