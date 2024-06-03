export class juego {
    #historial = [];
    #monstruo = null;
    //metodos, no se si está bien aquí 
    #loguear = "Esto debería logear las cosas al historial y mostrar en consola";
    #investigar = ""
    #atacar = ""

    // propiedades, no se si va aquí
    #monstruo = ""

    constructor(){
        this.#historial = [];
        this.#monstruo = null;
    }

    #generarNuevoMonstruo() {
        return {
            vida: Math.floor(Math.random() * 50) + 1
        }
    }

    logear(mensaje){
        this.historial.push(mensaje);
        console.log(mensaje);
    }

    investigar(agregado) {
        if(this.monstruo && this.#monstruo.vida > 0 ) {
            this.logear("No se puede investigar mientras que el mounstruo tenga vida")
            return;
        }

        this.#monstruo = this.#generarNuevoMonstruo();
        this.loguear(`Has encontrado un nuevo monstruo con ${this.#monstruo.vida} de vida!`);
    }

    set setHistorial(historial="") {
        this.historial = historial;
    }

    set setMounstro(mounstruo="mounstruoactual") {
        this.mounstruo = mounstruo;
    }


}