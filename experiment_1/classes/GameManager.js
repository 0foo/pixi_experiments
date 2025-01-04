class GameManager {
    constructor(){
        this.app = null;
        this.scene = null;
        this.player = null;
    }
    
    initializeApp() {
        const app = new PIXI.Application({ 
            width: window.innerWidth, 
            height: window.innerHeight
        });
        document.body.appendChild(app.view);
        app.stage.sortableChildren = true;
        this.app = app;
        // return this
    }

    async loadAssetManifest() {
        try {
            const response = await fetch('/assets/manifest.json');
            const manifest = await response.json();
            await PIXI.Assets.init({manifest});
        } catch (error) {
            console.error('Error loading JSON:', error);
            // Handle error (e.g., return, throw, etc.)
        }
        // return this
    }
}


export { GameManager };