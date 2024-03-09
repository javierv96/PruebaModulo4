import Animal from './Animal.js';

class Lobo extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido);
    }
    
    Aullar(sonido){
        return `assets/sounds/${sonido}`;
    }
}

export default Lobo;