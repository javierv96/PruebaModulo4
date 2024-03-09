import Leon from "./Leon.js";
import Aguila from "./Aguila.js";
import Lobo from "./Lobo.js";
import Oso from "./Oso.js";
import Serpiente from "./Serpiente.js";

const animalesDataPromise = (async () => {
    try {
        const url = 'assets/js/animales.json';
        const respuesta = await fetch(url);

        if (!respuesta.ok) {
            throw new Error('No se pudo obtener los animales');
        }

        const data = await respuesta.json();
        return data;

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

        if (!data || !data.animales) {
            console.error('Los datos o la propiedad "animales" no están definidos.');
            return;
        }

        const animales = data.animales; 

        const animalElegido = animales.find(animal => animal.name === name);

        if (!animalElegido) {
            console.log('Animal no reconocido');
            return;
        }

        let animalesRegistrados = [];

        switch (name) {
            case 'Leon':
                const leon = new Leon(name, edad, animalElegido.imagen, comentarios, animalElegido.sonido);
                modal(leon);
                document.getElementById('preview').style.backgroundImage = `url(assets/imgs/${animalElegido.imagen})`;
                animalesRegistrados.push(leon);
                console.log(leon);
                break;

            case 'Lobo':
                const lobo = new Lobo(name, edad, animalElegido.imagen, comentarios, animalElegido.sonido);
                modal(lobo);
                document.getElementById('preview').style.backgroundImage = `url(assets/imgs/${animalElegido.imagen})`;
                animalesRegistrados.push(lobo);
                console.log(lobo);
                break;

            case 'Oso':
                const oso = new Oso(name, edad, animalElegido.imagen, comentarios, animalElegido.sonido);
                modal(oso);
                document.getElementById('preview').style.backgroundImage = `url(assets/imgs/${animalElegido.imagen})`;
                animalesRegistrados.push(oso);
                console.log(oso);
                break;

            case 'Serpiente':
                const serpiente = new Serpiente(name, edad, animalElegido.imagen, comentarios, animalElegido.sonido);
                modal(serpiente);
                document.getElementById('preview').style.backgroundImage = `url(assets/imgs/${animalElegido.imagen})`;
                animalesRegistrados.push(serpiente);
                console.log(serpiente);
                break;

            case 'Aguila':
                const aguila = new Aguila(name, edad, animalElegido.imagen, comentarios, animalElegido.sonido);
                modal(aguila);
                document.getElementById('preview').style.backgroundImage = `url(assets/imgs/${animalElegido.imagen})`;
                animalesRegistrados.push(aguilla);
                console.log(aguila);
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

const mostrarAnimalesRegistrados = (animalesRegistrados) => {
    const container = document.getElementById('Animales');
    let postHTML = '';

    animalesRegistrados.forEach(animal => {
        postHTML +=
            '<div class="card" style="width: 19rem;">' +
            `<img src="assets/imgs/${animal.img}" class="card-img-top" id="cardTabla">
             <audio controls><source src="assets/sounds/${animal.sonido}"></audio>` +
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
                        <audio controls style="width: 300px"><source src="assets/sounds/${animal.sonido}"></audio>
                    </div>
                </div>
            </div>
        `;
    document.getElementById('exampleModal').innerHTML = modalContent;
    $('#exampleModal').modal('show');
}

document.getElementById("btnRegistrar").addEventListener("click", async () => {
    const animalesRegistrados = await formAnimals(); // Espera a que formAnimals() termine y obtén el resultado
    if (animalesRegistrados) {
        mostrarAnimalesRegistrados(animalesRegistrados);
    }
});