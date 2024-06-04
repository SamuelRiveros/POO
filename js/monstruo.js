import { criatura } from "./criatura.js";

export class monstruo extends criatura {

    constructor(nombre, vida = 100){
        super(nombre, vida)
    }
}

export class Orco extends monstruo {
    constructor() {
        super("Orco");
    }
}

export class Goblin extends monstruo {
    constructor() {
        super("Goblin");
    }
}

export class Kobold extends monstruo {
    constructor() {
        super("Kobold");
    }
}