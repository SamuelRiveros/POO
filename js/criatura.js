import { juego } from "./juego"

export class criatura {
    #nombre
    #vida
    #vidaMaxima
    #ataque

    constructor(nombre, vida){
        this.nombre = nombre;
        this.vida = vida;
    }
}