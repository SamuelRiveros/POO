export class Inventario {
    #items = [];

    constructor() {
        this.#items = [];
    }

    agregar(item) {
        this.#items.push(item);
        console.log(`¡Has agregado un ítem: ${item.nombre}!`);
    }

    utilizar(nombreItem, objetivo) {
        const index = this.#items.findIndex(item => item.nombre === nombreItem);
        if (index !== -1) {
            const item = this.#items[index];
            item.utilizar(objetivo);
            this.#items.splice(index, 1);
            console.log(`Has utilizado el ítem: ${nombreItem}`);
        } else {
            console.log(`El ítem ${nombreItem} no está en el inventario.`);
        }
    }

    remover(nombreItem) {
        const index = this.#items.findIndex(item => item.nombre === nombreItem);
        if (index !== -1) {
            this.#items.splice(index, 1);
            console.log(`Has removido el ítem: ${nombreItem}`);
        } else {
            console.log(`El ítem ${nombreItem} no está en el inventario.`);
        }
    }

    imprimirItems() {
        console.log("Inventario:", this.#items.map(item => item.nombre));
    }
}
