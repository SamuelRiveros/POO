import {personaje} from "./personaje.js";

export class mago extends personaje {
    #dañado = true;
    constructor(nom){
        super();
        this.nombre = nom;
        this.setvida = 15;
        this.dañado();
    }

    dañado(){
        if(this.#dañado) this.setVida - 10 /* No está disminuyendo la cantidad */ , console.log("El mago ha sido dañado");
    }
}