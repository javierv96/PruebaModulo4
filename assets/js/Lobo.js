// Importa la clase Animal desde el archivo Animal.js
import Animal from './Animal.js';

// Obtiene el elemento de audio HTML con el ID "player"
let sonidoPlayer = document.getElementById("player");

// Definición de la clase Lobo que extiende la clase Animal
class Lobo extends Animal {
    // Constructor de la clase Lobo
    constructor(nombre, edad, img, comentarios, sonido) {
        // Llama al constructor de la clase Animal utilizando super()
        super(nombre, edad, img, comentarios, sonido);
    }
    
    // Método para que el lobo "Aulle"
    Aullar(sonido){
        // Establece la fuente del sonido del reproductor de audio
        // utilizando la propiedad _sonido de la instancia de Lobo
        sonidoPlayer.src = `assets/sounds/${this._sonido}`;

        // Reproduce el sonido utilizando el reproductor de audio
        sonidoPlayer.play();
    }
}

// Exporta la clase Lobo para que esté disponible para su uso en otros archivos
export default Lobo;