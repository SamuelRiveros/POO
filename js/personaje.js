export class personaje {
    #vida = 20;
    #defensa = 50;
    #daño = 10;
    constructor(){
    this.setNombre = undefined;
    }

    set setNombre(nom="John") {
        this.nombre = nom;
    }
    set setVida(puntos){
        this.#vida += puntos;
    }

    set setDefensa(puntos){
        this.#defensa += puntos;
    }

    get getDefensa(){
        return this.#defensa;
    }

    set setAtaque(puntos){
        this.#daño += puntos;
    }

    atacar(instrumento = 0){
        if (instrumento) this.#daño += instrumento;
        return instrumento;
    }
    
}