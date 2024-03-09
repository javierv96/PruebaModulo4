import Animal from './Animal.js';

let sonidoPlayer = document.getElementById("player");
console.log("sonido en la clase aguila:",sonidoPlayer);

class Aguila extends Animal {
    constructor (nombre, edad, img, comentarios, sonido){
        super(nombre, edad, img, comentarios, sonido);
    }
    
    Chillar(){
        sonidoPlayer.src = `assets/sounds/${this._sonido}`;
        sonidoPlayer.play();
    }
}

export default Aguila;