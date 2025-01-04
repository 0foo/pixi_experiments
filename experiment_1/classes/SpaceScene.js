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



        let spacebomb_asset = PIXI.Assets.get('spacebomb')
        let spacebomb = new PIXI.AnimatedSprite(spacebomb_asset.animations.blink);
        spacebomb.animationSpeed = 0.1666
        spacebomb.play()
        spacebomb.scale.set(.2, .2)
        this.world_container.addChild(spacebomb)
    }

}

export { SpaceScene };