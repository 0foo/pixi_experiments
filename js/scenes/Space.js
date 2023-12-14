class Space{
    async load(){

        this.assetManifest = {
            images: [
                { name: "background", url: "/assets/starfield-background-1.jpg" }
            ],
        };

        await PIXI.Assets.load(this.assetManifest)
    }
    enter(app) {

        const background = PIXI.Sprite.from(background_path);
        background.width = app.screen.width * 4;  
        background.height = app.screen.height * 4; 
        const scene_container = new PIXI.Container();
        scene_container.addChild(background)
        app.stage.addChild(scene_container);
        let camera = new PIXI.Container();
        app.stage.addChild(camera);
    }
    update(delta) {
        console.log("update")
    }
    render() {
        // Render logic for GameScene
    }
    // Additional methods specific to GameScene
    exit(){
        // pass
    }
}


export { Space };