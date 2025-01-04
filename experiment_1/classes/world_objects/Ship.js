class Ship {

    async load_assets(){
        await PIXI.Assets.loadBundle('player');
        return this
    }

    initialize(){
        // setup ship asset
        let ship_asset = PIXI.Assets.get('player_ship')
        let ship = new PIXI.AnimatedSprite(ship_asset.animations.thrustors);
        ship.animationSpeed = 0.1666
        ship.rotation =  90 * (Math.PI / 180);;  // Current rotation of the sprite
        ship.play()
        ship.scale.set(.2, .2)
        return ship_animated_sprite
    }
}