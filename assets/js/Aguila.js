// Importa la clase Animal desde el archivo Animal.js
import Animal from './Animal.js';

// Obtiene el elemento de audio HTML con el ID "player"
let sonidoPlayer = document.getElementById("player");

// Imprime en la consola el elemento de audio obtenido
console.log("sonido en la clase aguila:", sonidoPlayer);

// Definición de la clase Aguila que extiende la clase Animal
class Aguila extends Animal {
    // Constructor de la clase Aguila
    constructor (nombre, edad, img, comentarios, sonido) {
        // Llama al constructor de la clase Animal utilizando super()
        super(nombre, edad, img, comentarios, sonido);
    }
    
    // Método para que el águila "Chille"
    Chillar() {
        // Establece la fuente del sonido del reproductor de audio
        // utilizando la propiedad _sonido de la instancia de Aguila
        sonidoPlayer.src = `assets/sounds/${this._sonido}`;
        
        // Reproduce el sonido utilizando el reproductor de audio
        sonidoPlayer.play();
    }
}

// Exporta la clase Aguila para que esté disponible para su uso en otros archivos
export default Aguila;