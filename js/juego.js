import { combate } from "./combate.js";

import { Orco, Goblin, Kobold } from "./monstruo.js";

import { heroe } from './heroe.js';
import { item } from './item.js';

export class juego {
    #historial = [];
    #monstruo = null;

    #combate = null;
    #heroe = null;

    #juegoTerminado = false;

    
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
        if (this.#juegoTerminado) {
            this.logear("No puedes investigar, el juego ha terminado.");
            return;
        }


        if(this.#monstruo && this.#monstruo.vida > 0 ) {
            this.logear("No se puede investigar mientras que el mounstruo tenga vida")
            return;
        }

        this.#monstruo = this.#generarNuevoMonstruo();
        this.#combate = new combate(this.#heroe, this.#monstruo)
        this.logear(`Has encontrado un nuevo monstruo con ${this.#monstruo.vida} de vida!`);
    }

    atacar() {
        if (this.#juegoTerminado) {
            this.logear("No puedes atacar, el juego ha terminado.");
            return;
        }


        if (!this.#monstruo || this.#monstruo.vida <= 0 ) {
            this.logear("No se puede atacar al monstruo, ya que está muerto || No hay monstruos para atacar")
            return;
        }

        const daño = this.#combate.atacar()
        this.logear(`Atacas al monstruo !, le has sacado ${daño} de vida`);

        if (this.#combate.esMonstruoDerrotado()) {
            this.logear("¡Has asesinado al monstruo!");
        }

        this.#actualizarEstadoJuego();  // Verificar el estado del juego después de atacar

    }

    ejecutar(accion) {

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
            default:
                this.logear(`Acción no reconocida: ${accion}`);
                break;
        }

    }

    // administración de juego //

    juegoterminado() {
        if (!this.#heroe || this.#heroe.vida <= 0) {
            this.logear("El heroe está muerto, juego terminado")
            return;
        }
    }

    reiniciarjuego() {
        this.#heroe.vida = 100
        this.#juegoTerminado = false;
        this.logear("Juego reiniciado")
    }

    #actualizarEstadoJuego() {
        if (this.#heroe.vida <= 0) {
            this.#juegoTerminado = true;
            this.logear("El juego ha terminado. El héroe no tiene vida.");
        }
    }

    // Getter para el historial
    get historial() {
        return this.#historial;
    }

    set heroe(nuevoHeroe) {
        this.#heroe = nuevoHeroe;
        this.#actualizarEstadoJuego(); // Verificar el estado del juego al cambiar de héroe
    }

    get heroe() {
        return this.#heroe;
    }
    

    utilizarItem() {

    }
    

}

// Aqui el MainGame //

// Crear un héroe
const heroename = new heroe("Samuel", 100, 100);



// Crear un ítem
const pocion = new item("Poción de Vida");

// Usar el ítem en el héroe
pocion.utilizar(heroe); // Samuel ha recibido 20 de vida. Vida actual: 120


// let heroe = new heroe("Samuel", 100, 100);;

// let juego = new juego(heroe);

// juego.investigar();
// juego.atacar();