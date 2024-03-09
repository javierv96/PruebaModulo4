import Animal from './Animal.js';

class Aguila extends Animal {
    constructor (nombre, edad, img, comentarios, sonido){
        super(nombre, edad, img, comentarios, sonido);

    }
    
    Chillar(sonido){
        return `assets/sounds/${sonido}`;
    }
}

export default Aguila;