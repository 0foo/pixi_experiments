class SpaceScene {
    constructor(){
        this.world_container=null;
        this.keyState = window.key_manager.keyState;
        this.boundary = {};
        this.centerX = 0;
        this.centerY = 0;
        this.player=window.player
    }

    async load_assets(){
        await PIXI.Assets.loadBundle('space_scene');
    }

    initialize() {
        let app = window.game_manager.app
        const background = PIXI.Sprite.from('background');
        background.width = app.screen.width * 4;  
        background.height = app.screen.height * 4; 
        this.world_container = new PIXI.Container();
        this.world_container.addChild(background)
        app.stage.addChild(this.world_container);
        
        this.boundary = {
                left: 0,
                right: -background.width+ app.screen.width,
                top: 0,
                bottom: -background.height + app.screen.height
        };

        this.calc_center()
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

    update() {

        let speed_x = 0
        let speed_y = 0
        window.game_manager.app.ticker.add(() => {
            // console.log(window.key_manager.keyState)
            let speed_decay = .01
            // console.log(this.player.speed)
            let acceleration = .1
   
            if (this.keyState.ArrowRight) { speed_x -= acceleration  }
            if (this.keyState.ArrowLeft) { speed_x += acceleration  }
            if (this.keyState.ArrowUp) { speed_y += acceleration  }
            if (this.keyState.ArrowDown) { speed_y -= acceleration  }
            

            if (this.world_container.y > this.boundary.top){
                speed_y = 0;
                this.world_container.y = this.boundary.top - 1;
                console.log("Test")
            }

            if (this.world_container.y < this.boundary.bottom){
                speed_y = 0;
                this.world_container.y = this.boundary.bottom + 1;
            }

            if (this.world_container.x > this.boundary.left){
                speed_x = 0;
                this.world_container.x = this.boundary.left - 1;
            }

            if (this.world_container.x < this.boundary.right){
                speed_x = 0;
                this.world_container.x = this.boundary.right + 1;
            }

            console.log(this.world_container.x + "/" + this.boundary.left)
            // console.log(speed_x)
            
            this.world_container.y += speed_y;
            this.world_container.x +=  speed_x;

            // console.log(speed_x + "/" + speed_y)

            speed_y = this.moveCloserToZero(speed_y, speed_decay)
            speed_x = this.moveCloserToZero(speed_x, speed_decay)

            // if ( Object.keys(window.key_manager.keyState).length > 0){
            //     this.player.speed += this.player.acceleration
            // } 

            // if (this.player.speed >= this.player.max_speed){
            //     this.player.speed = this.player.max_speed;
            // }

            // this.player.speed = Math.max(this.player.speed - speed_decay, 0)

            
    

            // if (this.world_container.x < this.boundary.left || this.world_container.x > this.boundary.right){
            //     this.world_container.x = 0
            // }


            // // if (this.keyState.ArrowUp) { this.world_container.y + acceleration }
            // // if (this.keyState.ArrowDown) { this.world_container.y - acceleration }
            // // if (this.keyState.ArrowLeft) { this.world_container.x + acceleration }

      
            // this.world_container.y -= speed_decay;
            // this.world_container.x -= speed_decay;

            // this.world_container.y = Math.max(this.world_container.y, 0)
            // this.world_container.x = Math.max(this.world_container.x, 0)

            this.calc_center();
        });
    }
}

export { SpaceScene };