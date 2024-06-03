import { juego } from "./juego";

export class combate extends juego {
    constructor(heroe, monstruo){
        this.heroe = heroe;
        this.monstruo = monstruo;
        
    }

    atacar() {
        const daño = Math.floor(Math.random() * 10) + 1;
        this.monstruo.vida -= daño;
        return daño;
    }

    esMonstruoDerrotado() {
        return this.monstruo.vida <= 0;
    }
}