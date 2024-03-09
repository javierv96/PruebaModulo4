// Importación de las clases de diferentes animales
import Leon from "./Leon.js";
import Aguila from "./Aguila.js";
import Lobo from "./Lobo.js";
import Oso from "./Oso.js";
import Serpiente from "./Serpiente.js";

// Array para almacenar los animales registrados
let animalesRegistrados = [];

// Promesa para obtener los datos de los animales desde un archivo JSON
const animalesDataPromise = (async () => {
    try {
        const url = 'assets/js/animales.json';
        const respuesta = await fetch(url);

        // Verificar si la respuesta es exitosa
        if (!respuesta.ok) {
            throw new Error('No se pudo obtener los animales');
        }

        // Convertir la respuesta a formato JSON y devolver los datos de los animales
        const data = await respuesta.json();
        return data.animales;

    } catch (error) {
        console.error('Error al obtener animales:', error);
        return null;
    }
})();

// Función para registrar un animal
const formAnimals = async () => {
    try {
        const data = await animalesDataPromise;

        // Obtener los valores del formulario
        let name = document.getElementById('animal').value;
        let edad = document.getElementById('edad').value;
        let comentarios = document.getElementById('comentarios').value;

        // Verificar si los datos de los animales están disponibles
        if (!data) {
            console.error('Los datos de los animales no están definidos.');
            return;
        }

        // Buscar el animal seleccionado en los datos
        const animalElegido = data.find(animal => animal.name === name);

        // Verificar si el animal seleccionado está en los datos
        if (!animalElegido) {
            console.log('Animal no reconocido');
            return;
        }

        // Crear una instancia del animal seleccionado y agregarlo al array de animales registrados
        switch (name) {
            case 'Leon':
                const leon = new Leon(name, edad, animalElegido.imagen, comentarios, animalElegido.sonido);
                modal(leon);
                animalesRegistrados.push(leon);
                break;

            case 'Lobo':
                const lobo = new Lobo(name, edad, animalElegido.imagen, comentarios, animalElegido.sonido);
                modal(lobo);
                animalesRegistrados.push(lobo);
                break;

            case 'Oso':
                const oso = new Oso(name, edad, animalElegido.imagen, comentarios, animalElegido.sonido);
                modal(oso);
                animalesRegistrados.push(oso);
                break;

            case 'Serpiente':
                const serpiente = new Serpiente(name, edad, animalElegido.imagen, comentarios, animalElegido.sonido);
                modal(serpiente);
                animalesRegistrados.push(serpiente);
                break;

            case 'Aguila':
                const aguila = new Aguila(name, edad, animalElegido.imagen, comentarios, animalElegido.sonido);
                modal(aguila);
                animalesRegistrados.push(aguila);
                break;

            default:
                console.log('Animal no reconocido');
                break;
        }

        return animalesRegistrados;
    } catch (error) {
        console.error('Error al obtener los datos de los animales:', error);
    }
};

// Función para reproducir el sonido del animal seleccionado
window.playSound = (animal) => {
    const animalRegistrado = animalesRegistrados.find((a) => a._nombre == animal);

    // Llamar al método correspondiente para reproducir el sonido del animal
    switch (animal) {
        case 'Leon':
            animalRegistrado.Rugir();
            break;
        case 'Lobo':
            animalRegistrado.Aullar();
            break;
        case 'Oso':
            animalRegistrado.Grunir();
            break;
        case 'Serpiente':
            animalRegistrado.Sisear();
            break;
        case 'Aguila':
            animalRegistrado.Chillar();
            break;
        default:
            console.log('Animal no reconocido');
            break;
    }
};

// Función para mostrar los animales registrados en tarjetas
const mostrarAnimalesRegistrados = (animalesRegistrados) => {
    const container = document.getElementById('Animales');
    let postHTML = '';

    // Generar HTML para cada animal registrado
    animalesRegistrados.forEach(animal => {
        postHTML +=
            '<div class="card" style="width: 19rem;">' +
            `<img src="assets/imgs/${animal.img}" class="card-img-top" id="cardTabla">
            <div>
            <button onclick="playSound('${animal.nombre}')" class="btn btn-secondary w-100"> <img height="30" src="assets/imgs/audio.svg" /> </button>
            </div>
            ` +
            '</div>';
    });

    // Mostrar las tarjetas en el contenedor
    container.innerHTML = postHTML;
};

// Función para mostrar un modal con la información del animal registrado
const modal = (animal) => {
    const modalContent = `
             <div class="modal-dialog modal-dialog-centered w-50 text-light" role="document">
                <div class="modal-content bg-dark" style="width: 350px">
                     <div class="modal-header">
                         <h5 class="modal-title">${animal.nombre}</h5>
                         <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                             <span aria-hidden="true">&times;</span>
                         </button>
                     </div>
                     <div class="modal-body">
                         <img src="assets/imgs/${animal.img}" class="img-fluid" alt="${animal.nombre}" style="width: 340px" />
                        <p>Edad: ${animal.edad}</p>
                         <p>Comentarios: ${animal.comentarios}</p>
                         <div>
                         <button onclick="playSound('${animal.nombre}')" class="btn btn-secondary w-100"> <img height="30" src="assets/imgs/audio.svg" /> </button>
                         </div>
                     </div>
                 </div>
             </div>
         `;
    document.getElementById('exampleModal').innerHTML = modalContent;
    $('#exampleModal').modal('show');
}

// Event listener para detectar cambios en la selección de animales en el formulario
document.getElementById('animal').addEventListener('change', async () => {
    const selectedAnimal = document.getElementById('animal').value;
    const animalElegido = (await animalesDataPromise).find(animal => animal.name === selectedAnimal);

    // Mostrar la imagen previa del animal seleccionado
    if (animalElegido) {
        document.getElementById('preview').style.backgroundImage = `url(assets/imgs/${animalElegido.imagen})`;
    } else {
        console.log('Animal no reconocido');
    }
});

// Event listener para registrar nuevos animales cuando se hace clic en el botón "Registrar"
document.getElementById("btnRegistrar").addEventListener("click", async () => {
    // Llamar a la función formAnimals y mostrar los animales registrados
    const animalesRegistrados = await formAnimals();
    if (animalesRegistrados) {
        mostrarAnimalesRegistrados(animalesRegistrados);
    }
});