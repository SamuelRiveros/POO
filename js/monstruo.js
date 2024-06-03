import { criatura } from "./criatura";

export class monstruo extends criatura {

    constructor(nombre, vida = 100){
        super(nombre, vida)
    }
}

export class Orco extends monstruo {
    constructor() {
        super("Orco");  // Vida por defecto de 100
    }
}

export class Goblin extends monstruo {
    constructor() {
        super("Goblin");  // Vida por defecto de 100
    }
}

export class Kobold extends monstruo {
    constructor() {
        super("Kobold");  // Vida por defecto de 100
    }
}