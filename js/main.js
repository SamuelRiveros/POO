import {personaje} from "./personaje.js";
import {mago} from "./mago.js";
import {guerrero} from "./guerrero.js";


let personajedefault = new personaje("Samuel");
let personajeGuerrero = new guerrero("Julio");
let personajeMago = new mago("Juams");


console.log(personajedefault, personajeGuerrero, personajeMago);