import { Combate } from "./combate.js";
import { Orco, Goblin, Kobold } from "./monstruo.js";
import { Item } from "./item.js";

export class Juego {
    #historial = [];
    #monstruo = null;
    #combate = null;
    #heroe = null;
    #juegoTerminado = false;

    constructor(heroe) {
        this.#historial = [];
        this.#monstruo = null;
        this.#heroe = heroe;
    }

    #generarNuevoMonstruo() {
        const tiposDeMonstruo = [Orco, Goblin, Kobold];
        const indiceAleatorio = Math.floor(Math.random() * tiposDeMonstruo.length);
        return new tiposDeMonstruo[indiceAleatorio]();
    }

    logear(mensaje) {
        this.#historial.push(mensaje);
        console.log(mensaje);
    }

    #actualizarEstadoJuego() {
        if (this.#heroe.vida <= 0) {
            this.#juegoTerminado = true;
            this.logear("El juego ha terminado. El héroe no tiene vida.");
        }
    }

    investigar() {
        if (this.#juegoTerminado) {
            this.logear("No puedes investigar, el juego ha terminado.");
            return;
        }

        if (this.#monstruo && this.#monstruo.vida > 0) {
            this.logear("No se puede investigar mientras que el monstruo tenga vida.");
            return;
        }

        const probabilidad = Math.random();
        if (probabilidad < 0.5) {  // 50% de probabilidad de encontrar un monstruo
            this.#monstruo = this.#generarNuevoMonstruo();
            this.#combate = new Combate(this.#heroe, this.#monstruo);
            this.logear(`¡Has encontrado un nuevo monstruo con ${this.#monstruo.vida} de vida!`);
        } else {  // 50% de probabilidad de encontrar un ítem
            const pocion = new Item("Poción de Vida");
            this.#heroe.agregarItem(pocion);
        }
    }

    atacar() {
        if (this.#juegoTerminado) {
            this.logear("No puedes atacar, el juego ha terminado.");
            return;
        }

        if (!this.#monstruo || this.#monstruo.vida <= 0) {
            this.logear("No se puede atacar al monstruo, ya que está muerto o no hay monstruos para atacar.");
            return;
        }

        const daño = this.#combate.atacar();
        this.logear(`¡Atacas al monstruo! Le has sacado ${daño} de vida.`);

        if (this.#combate.esMonstruoDerrotado()) {
            this.logear("¡Has asesinado al monstruo!");
        }

        this.#actualizarEstadoJuego();  // Verificar el estado del juego después de atacar
    }

    ejecutar(accion, parametro = null) {
        if (this.#juegoTerminado) {
            this.logear("No puedes ejecutar acciones, el juego ha terminado.");
            return;
        }

        switch (accion.toLowerCase()) {
            case 'investigar':
                this.investigar();
                break;
            case 'atacar':
                this.atacar();
                break;
            case 'utilizar':
                if (parametro) {
                    this.#heroe.utilizarItem(parametro);
                } else {
                    this.logear("Debes especificar un ítem para utilizar.");
                }
                break;
            case 'inventario':
                this.#heroe.mostrarInventario();
                break;
            default:
                this.logear(`Acción no reconocida: ${accion}`);
                break;
        }
    }

    reiniciarJuego() {
        this.#heroe.vida = 100;
        this.#juegoTerminado = false;
        this.logear("Juego reiniciado");
    }

    // Getter para el historial
    get historial() {
        return this.#historial;
    }

    // Getter y Setter para el héroe
    set heroe(nuevoHeroe) {
        this.#heroe = nuevoHeroe;
        this.#actualizarEstadoJuego(); // Verificar el estado del juego al cambiar de héroe
    }

    get heroe() {
        return this.#heroe;
    }
}


// Aqui el MainGame //

//ejemplos de uso en consola

// import { Heroe } from './heroe.js';
// import { Juego } from './juego.js';
// import { Item } from './item.js';

// // Crear un héroe
// const heroe = new Heroe("Samuel", 100, 100, 10);

// // Crear un juego con el héroe
// const juego = new Juego(heroe);

// // Investigar
// juego.ejecutar('investigar'); // se puede encontrar un monstruo o una poción

// // Mostrar inventario
// juego.ejecutar('inventario'); // Mostrar el inventario del héroe

// // Usar un ítem
// juego.ejecutar('utilizar', 'Poción de Vida'); // Usar la poción de vida

// // Mostrar inventario nuevamente
// juego.ejecutar('inventario'); // Mostrar el inventario del héroe después de usar el ítem
