import { combate } from "./combate";
import { Orco, Goblin, Kobold } from "./monstruo";

export class juego {
    #historial = [];
    #monstruo = null;
    #combate = null;
    #heroe = null;
    
    constructor(heroe){
        // Aquí propiedades //
        this.#historial = [];
        this.#monstruo = null;
        this.#heroe = heroe;
    }
    
    #generarNuevoMonstruo() {
        const tiposDeMonstruo = [Orco, Goblin, Kobold];
        const indiceAleatorio = Math.floor(Math.random() * tiposDeMonstruo.length);
        return new tiposDeMonstruo[indiceAleatorio]();
    }
    
    
    
    // Estos serían basicamente los métodos

    logear(mensaje){
        this.#historial.push(mensaje);
        console.log(mensaje);
    }

    investigar() {
        if(this.#monstruo && this.#monstruo.vida > 0 ) {
            this.logear("No se puede investigar mientras que el mounstruo tenga vida")
            return;
        }

        this.#monstruo = this.#generarNuevoMonstruo();
        this.#combate = new combate(this.#heroe, this.#monstruo)
        this.logear(`Has encontrado un nuevo monstruo con ${this.#monstruo.vida} de vida!`);
    }

    atacar() {
        if (!this.#monstruo || this.#monstruo.vida <= 0 ) {
            this.logear("No se puede atacar al monstruo, ya que está muerto || No hay monstruos para atacar")
            return;
        }

        const daño = this.#combate.atacar()
        this.logear("Atacas al monstruo !, le has sacado ${danio} de vida");

        if (this.#combate.esMonstruoDerrotado()) {
            this.logear("¡Has asesinado al monstruo!");
        }

    }

}



// Ejemplo de uso
// // const juego = new Juego();
// juego.investigar();
// juego.atacar();