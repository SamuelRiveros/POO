import { criatura } from "./criatura.js";
import { item } from "./item.js";

export class heroe extends criatura {
    #inventario = []

    constructor(nombre, vida = 100, vidaMaxima = 100, ataque = 10){
        super(nombre,vida, vidaMaxima, ataque)

        this.#inventario = []
    }

    
    recibirVida(cantidad) {
        this.vida += cantidad;
        
        if (this.vida > this.vidaMaxima) {
            this.vida = this.vidaMaxima
        }
        console.log(`${this.nombre} ha recibido ${cantidad} de vida. Vida actual: ${this.vida}`);
    }
    
    agregarItem() {
        this.#inventario.push(item)
        console.log(`¡Has encontrado un ítem: ${item.nombre}!`);
    }

    utilizarItem() {
        const index = this.#inventario.findIndex(item => item.nombre === nombreItem);
        if (index !== -1) {
            const item = this.#inventario[index];
            item.utilizar(this);
            this.#inventario.splice(index, 1);
            console.log(`Has utilizado el ítem " ${nombreItem} "`)
        } else {
            console.log(`El item " ${nombreItem} " no está en tu inventario`)
        }
    }

    mostrarInventario() {
        console.log("Inventario:", this.#inventario.map(item => item.nombre));
    }
}