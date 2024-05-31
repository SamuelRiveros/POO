import {personaje} from "./personaje.js";

export class guerrero extends personaje{
    #pechera = true;
    constructor(nom){
        super();
        this.nombre = nom;
        this.setvida = 10;
        this.armadura();
    }

    armadura(){
        if(this.#pechera) this.setDefensa = 100;
    }
} 