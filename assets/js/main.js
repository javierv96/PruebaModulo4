import Leon from "./Leon.js";
import Aguila from "./Aguila.js";
import Lobo from "./Lobo.js";
import Oso from "./Oso.js";
import Serpiente from "./Serpiente.js";

let animalesRegistrados = [];

const animalesDataPromise = (async () => {
    try {
        const url = 'assets/js/animales.json';
        const respuesta = await fetch(url);
        console.log("objeto respuesta:", respuesta);
        if (!respuesta.ok) {
            throw new Error('No se pudo obtener los animales');
        }

        const data = await respuesta.json();
        console.log("objeto convertido a json: ", data);
        return data.animales;

    } catch (error) {
        console.error('Error al obtener animales:', error);
        return null;
    }
})();

const formAnimals = async () => {
    try {
        const data = await animalesDataPromise;

        let name = document.getElementById('animal').value;
        let edad = document.getElementById('edad').value;
        let comentarios = document.getElementById('comentarios').value;

        if (!data) {
            console.error('Los datos de los animales no están definidos.');
            return;
        }

        const animalElegido = data.find(animal => animal.name === name);

        if (!animalElegido) {
            console.log('Animal no reconocido');
            return;
        }

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

window.playSound = (animal) => {
    console.log("animal en playsound: ", animal);
    console.log("animales registrados: ", animalesRegistrados);
    const animal1 = animalesRegistrados.find((a) => a._nombre == animal);
    console.log(animal1);

    (animal == 'Leon') ? animal1.Rugir() : null;
    (animal == 'Lobo') ? animal1.Aullar() : null;
    (animal == 'Oso') ? animal1.Grunir() : null;
    (animal == 'Serpiente') ? animal1.Sisear() : null;
    (animal == 'Aguila') ? animal1.Chillar() : null;
}

const mostrarAnimalesRegistrados = (animalesRegistrados) => {
    const container = document.getElementById('Animales');
    console.log("animales en mostrarAnimales: ", animalesRegistrados);
    let postHTML = '';

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

    container.innerHTML = postHTML;
};

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

document.getElementById('animal').addEventListener('change', async () => {
    const selectedAnimal = document.getElementById('animal').value;
    const animalElegido = (await animalesDataPromise).find(animal => animal.name === selectedAnimal);

    if (animalElegido) {
        document.getElementById('preview').style.backgroundImage = `url(assets/imgs/${animalElegido.imagen})`;
    } else {
        console.log('Animal no reconocido');
    }
});

document.getElementById("btnRegistrar").addEventListener("click", async () => {
    const animalesRegistrados = await formAnimals();
    if (animalesRegistrados) {
        mostrarAnimalesRegistrados(animalesRegistrados);
    }
});