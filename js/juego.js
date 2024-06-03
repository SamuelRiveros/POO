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

    // propiedades, no se si va aquí
    

    set setHistorial(historial="") {
        this.historial = historial;
    }

    set setMounstro(mounstruo="mounstruoactual") {
        this.mounstruo = mounstruo;
    }


}