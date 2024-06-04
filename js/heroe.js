import { criatura } from "./criatura.js";

export class heroe extends criatura {
    #inventario = []

    constructor(nombre, vida = 100){
        super(nombre,vida)
        this.#inventario = []
    }

    utilizarItem() {

    }

    recibirVida(cantidad) {
        this.vida += cantidad;
        console.log(`${this.nombre} ha recibido ${cantidad} de vida. Vida actual: ${this.vida}`);
    }
}