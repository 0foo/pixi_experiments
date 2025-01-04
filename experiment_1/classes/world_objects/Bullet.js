class Bullet extends WorldObject{
    constructor(){
        location = 'assets/images/spaceship_art_pack_larger/blue/bullet.png'
    }

    async load_assets(){
        await PIXI.Assets.loadBundle('player');
        return this
    }

    initialize() {

    }

    update() {
        window.game_manager.app.ticker.add(() => {});
    }
}

export { Player };