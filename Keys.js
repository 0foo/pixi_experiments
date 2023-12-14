class Keys{
    constructor(){
        this.keyState={};
        window.addEventListener("keydown", (e) => {
            this.keyState[e.code] = true;
        });

        window.addEventListener("keyup", (e) =>{
            this.keyState[e.code] = false;
        });
    }
}

export { Keys };