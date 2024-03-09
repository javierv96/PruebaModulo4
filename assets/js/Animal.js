//Clase padre que representa un Animal.
class Animal {
    // Crea una instancia de Animal.
    constructor(nombre, edad, img, comentarios, sonido){
        this._nombre = nombre;
        this._edad = edad;
        this._img = img;
        this._comentarios = comentarios;
        this._sonido = sonido;
    }

    // Obtiene el nombre del animal.
    get nombre() {
        return this._nombre;
    }

    // Obtiene la edad del animal.
    get edad() {
        return this._edad;
    }

    // Obtiene la ruta de la imagen del animal.
    get img() {
        return this._img;
    }

    // Obtiene los comentarios sobre el animal.
    get comentarios(){
        return this._comentarios;
    }

    // Establece los comentarios sobre el animal.
    set comentarios(comentarios) {
        this._comentarios = comentarios;
    }

    // Obtiene el sonido del animal.
    get sonido() {
        return this._sonido;
    }
}

// Exporta la clase Animal para que esté disponible para su uso en otros archivos.
export default Animal;