import { combate } from "./combate.js";

import { Orco, Goblin, Kobold } from "./monstruo.js";

import { heroe } from './heroe.js';
import { item } from './item.js';

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
        this.logear(`Atacas al monstruo !, le has sacado ${daño} de vida`);

        if (this.#combate.esMonstruoDerrotado()) {
            this.logear("¡Has asesinado al monstruo!");
        }

    }

    ejecutar(accion) {
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

    juegoterminado() {
        if (!this.#heroe || this.#heroe.vida <= 0) {
            this.logear("El heroe está muerto, juego terminado")
            return;
        }
    }

    reiniciarjuego() {
        this.#heroe.vida = 100
        this.logear("Juego reiniciado")
    }

    utilizarItem() {

    }



    // get historial() {
    //     return this.#historial;
    // }

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