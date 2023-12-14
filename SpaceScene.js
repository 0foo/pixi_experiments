class SpaceScene {
    constructor(){
        this.world_container=null;
        this.keyState = window.key_manager.keyState;
        this.boundary = {};
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
                right: background.width - app.screen.width,
                top: 0,
                bottom: background.height - app.screen.height
        };
    }

    update() {
        window.game_manager.app.ticker.add(() => {
            if (this.keyState["ArrowUp"]) {
                this.world_container.y = Math.min(this.world_container.y + 5, this.boundary.top);
            }
            if (this.keyState["ArrowDown"]) {
                this.world_container.y = Math.max(this.world_container.y - 5, -this.boundary.bottom);
            }
            if (this.keyState["ArrowLeft"]) {
                this.world_container.x = Math.min(this.world_container.x + 5, this.boundary.left);
            }
            if (this.keyState["ArrowRight"]) {
                this.world_container.x = Math.max(this.world_container.x - 5, -this.boundary.right);
            }
        });
    }
}

export { SpaceScene };