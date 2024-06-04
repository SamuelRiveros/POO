export class item {
    #nombre = null

    constructor(nombre){
        this.#nombre = nombre

    }

    get nombre() {
        return this.#nombre;
    }

    utilizar(objetivo){
        if (objetivo && typeof objetivo.recibirVida === "function" ) {
            objetivo.recibirVida(10);
        } else {
            console.log("El objetivo no puede recibir vida")
        }
    }
}