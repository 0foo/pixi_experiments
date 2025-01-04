export class SceneManager {
    constructor() {
        this.scenes = [];
    }

    pushScene(scene) {
        if (this.currentScene()) {
            this.currentScene().exit();
        }
        this.scenes.push(scene);
        scene.enter();
    }

    popScene() {
        if (this.currentScene()) {
            this.currentScene().exit();
            this.scenes.pop();
        }
        if (this.currentScene()) {
            this.currentScene().enter();
        }
    }

    currentScene() {
        return this.scenes[this.scenes.length - 1];
    }

    update(delta) {
        if (this.currentScene()) {
            this.currentScene().update(delta);
        }
    }

    render() {
        if (this.currentScene()) {
            this.currentScene().render();
        }
    }
}


export class Scene {
    enter() {}
    exit() {}
    update(delta) {}
    render() {}
}


export class ObjectManager{
    
}



export function InitializeApp() {
    let app = new PIXI.Application({ 
        width: window.innerWidth, 
        height: window.innerHeight
    });
    document.body.appendChild(app.view);
    return app;
}