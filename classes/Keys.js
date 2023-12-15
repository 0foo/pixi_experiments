class Keys{
    constructor(){
        this.keyState={};
        window.addEventListener("keydown", (e) => {
            this.keyState[e.code] = true;
            // console.log(e.code)
        });

        window.addEventListener("keyup", (e) =>{
            delete this.keyState[e.code];
        });
    }
}

export { Keys };