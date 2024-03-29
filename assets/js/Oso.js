// Importa la clase Animal desde el archivo Animal.js
import Animal from './Animal.js';

// Obtiene el elemento de audio HTML con el ID "player"
let sonidoPlayer = document.getElementById("player");

// Definición de la clase Oso que extiende la clase Animal
class Oso extends Animal {
    // Constructor de la clase Oso
    constructor(nombre, edad, img, comentarios, sonido) {
        // Llama al constructor de la clase Animal utilizando super()
        super(nombre, edad, img, comentarios, sonido);
    }
    
    // Método para que el oso "Gruña"
    Grunir(sonido){
        // Establece la fuente del sonido del reproductor de audio
        // utilizando la propiedad _sonido de la instancia de Oso
        sonidoPlayer.src = `assets/sounds/${this._sonido}`;

        // Reproduce el sonido utilizando el reproductor de audio
        sonidoPlayer.play();
    }
}

// Exporta la clase Oso para que esté disponible para su uso en otros archivos
export default Oso;