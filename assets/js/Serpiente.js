// Importa la clase Animal desde el archivo Animal.js
import Animal from './Animal.js';

// Obtiene el elemento de audio HTML con el ID "player"
let sonidoPlayer = document.getElementById("player");

// Definición de la clase Serpiente que extiende la clase Animal
class Serpiente extends Animal {
    // Constructor de la clase Serpiente
    constructor(nombre, edad, img, comentarios, sonido) {
        // Llama al constructor de la clase Animal utilizando super()
        super(nombre, edad, img, comentarios, sonido);
    }
    
    // Método para que la serpiente "Sisee"
    Sisear(sonido){
        // Establece la fuente del sonido del reproductor de audio
        // utilizando la propiedad _sonido de la instancia de Serpiente
        sonidoPlayer.src = `assets/sounds/${this._sonido}`;

        // Reproduce el sonido utilizando el reproductor de audio
        sonidoPlayer.play();
    }
}

// Exporta la clase Serpiente para que esté disponible para su uso en otros archivos
export default Serpiente;