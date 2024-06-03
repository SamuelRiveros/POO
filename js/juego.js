export class juego {
    #historial = [];
    #monstruo = null;
    
    constructor(){
        // Aquí propiedades //
        this.#historial = [];
        this.#monstruo = null;
    }
    
    #generarNuevoMonstruo() {
        return {
            vida: Math.floor(Math.random() * 50) + 1
        }
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
        this.loguear(`Has encontrado un nuevo monstruo con ${this.#monstruo.vida} de vida!`);
    }

    atacar() {
        if (!this.#monstruo || this.#monstruo.vida <= 0 ) {
            this.logear("No se puede atacar al monstruo, ya que está muerto || No hay monstruos para atacar")
        }
        return;

        const danio = Math.floor(math.random() *10) + 1;
        this.#monstruo.vida -= danio;
        this.logear("Atacas al monstruo !, le has sacado ${danio} de vida");

        if (!this.monstruo.vida <= 0 ) {
            this.logear("Has asesinado al monstruo !")
        }

    }


    set setHistorial(historial="") {
        this.historial = historial;
    }

    set setMounstro(mounstruo="mounstruoactual") {
        this.mounstruo = mounstruo;
    }


}

// Ejemplo de uso:
// const juego = new Juego();
juego.investigar();
juego.atacar();