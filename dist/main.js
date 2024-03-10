"use strict";

var _Leon = _interopRequireDefault(require("./Leon.js"));
var _Aguila = _interopRequireDefault(require("./Aguila.js"));
var _Lobo = _interopRequireDefault(require("./Lobo.js"));
var _Oso = _interopRequireDefault(require("./Oso.js"));
var _Serpiente = _interopRequireDefault(require("./Serpiente.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; } // Importación de las clases de diferentes animales
// Array para almacenar los animales registrados
var animalesRegistrados = [];

// Promesa para obtener los datos de los animales desde un archivo JSON
var animalesDataPromise = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
  var url, respuesta, data;
  return regeneratorRuntime.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          url = 'assets/js/animales.json';
          _context.next = 4;
          return fetch(url);
        case 4:
          respuesta = _context.sent;
          if (respuesta.ok) {
            _context.next = 7;
            break;
          }
          throw new Error('No se pudo obtener los animales');
        case 7:
          _context.next = 9;
          return respuesta.json();
        case 9:
          data = _context.sent;
          return _context.abrupt("return", data.animales);
        case 13:
          _context.prev = 13;
          _context.t0 = _context["catch"](0);
          console.error('Error al obtener animales:', _context.t0);
          return _context.abrupt("return", null);
        case 17:
        case "end":
          return _context.stop();
      }
    }
  }, _callee, null, [[0, 13]]);
}))();

// Función para registrar un animal
var formAnimals = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    var data, name, edad, comentarios, animalElegido, leon, lobo, oso, serpiente, aguila;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return animalesDataPromise;
          case 3:
            data = _context2.sent;
            // Obtener los valores del formulario
            name = document.getElementById('animal').value;
            edad = document.getElementById('edad').value;
            comentarios = document.getElementById('comentarios').value; // Verificar si los datos de los animales están disponibles
            if (data) {
              _context2.next = 10;
              break;
            }
            console.error('Los datos de los animales no están definidos.');
            return _context2.abrupt("return");
          case 10:
            // Buscar el animal seleccionado en los datos
            animalElegido = data.find(function (animal) {
              return animal.name === name;
            }); // Verificar si el animal seleccionado está en los datos
            if (animalElegido) {
              _context2.next = 14;
              break;
            }
            console.log('Animal no reconocido');
            return _context2.abrupt("return");
          case 14:
            _context2.t0 = name;
            _context2.next = _context2.t0 === 'Leon' ? 17 : _context2.t0 === 'Lobo' ? 20 : _context2.t0 === 'Oso' ? 23 : _context2.t0 === 'Serpiente' ? 26 : _context2.t0 === 'Aguila' ? 29 : 32;
            break;
          case 17:
            leon = new _Leon["default"](name, edad, animalElegido.imagen, comentarios, animalElegido.sonido);
            animalesRegistrados.push(leon);
            return _context2.abrupt("break", 34);
          case 20:
            lobo = new _Lobo["default"](name, edad, animalElegido.imagen, comentarios, animalElegido.sonido);
            animalesRegistrados.push(lobo);
            return _context2.abrupt("break", 34);
          case 23:
            oso = new _Oso["default"](name, edad, animalElegido.imagen, comentarios, animalElegido.sonido);
            animalesRegistrados.push(oso);
            return _context2.abrupt("break", 34);
          case 26:
            serpiente = new _Serpiente["default"](name, edad, animalElegido.imagen, comentarios, animalElegido.sonido);
            animalesRegistrados.push(serpiente);
            return _context2.abrupt("break", 34);
          case 29:
            aguila = new _Aguila["default"](name, edad, animalElegido.imagen, comentarios, animalElegido.sonido);
            animalesRegistrados.push(aguila);
            return _context2.abrupt("break", 34);
          case 32:
            console.log('Animal no reconocido');
            return _context2.abrupt("break", 34);
          case 34:
            return _context2.abrupt("return", animalesRegistrados);
          case 37:
            _context2.prev = 37;
            _context2.t1 = _context2["catch"](0);
            console.error('Error al obtener los datos de los animales:', _context2.t1);
          case 40:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 37]]);
  }));
  return function formAnimals() {
    return _ref2.apply(this, arguments);
  };
}();

// Función para reproducir el sonido del animal seleccionado
window.playSound = function (animal) {
  var animalRegistrado = animalesRegistrados.find(function (a) {
    return a._nombre == animal;
  });

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
var mostrarAnimalesRegistrados = function mostrarAnimalesRegistrados(animalesRegistrados) {
  var container = document.getElementById('Animales');
  var postHTML = '';

  // Generar HTML para cada animal registrado
  animalesRegistrados.forEach(function (animal) {
    postHTML += '<div class="card m-3" style="width: 19rem;">' + "<img src=\"assets/imgs/".concat(animal.img, "\" class=\"card-img-top\" data-animal=\"").concat(animal.nombre, "\" data-toggle=\"modal\" data-target=\"#exampleModal\">\n            <div>\n            <button onclick=\"playSound('").concat(animal.nombre, "')\" class=\"btn btn-secondary w-100\"> <img height=\"30\" src=\"assets/imgs/audio.svg\" /> </button>\n            </div>\n            ") + '</div>';
  });

  // Mostrar las tarjetas en el contenedor
  container.innerHTML = postHTML;

  // Agregar evento de clic a cada imagen
  var images = document.querySelectorAll('#Animales img.card-img-top');
  images.forEach(function (img) {
    img.addEventListener('click', function (event) {
      var animal = event.target.dataset.animal;
      modal(animal);
    });
  });
};

// Función para mostrar un modal con la información del animal registrado
// -----------------------------------------------------------------------
// estoy conciente de que esta funcion no tiene el comportamiento correspondiente, ya que cuando se registra un segundo animal del mismo tipo que el primero,
// y consultar este segundo haciendo click en la imagen, este muestra los datos del primer animal registrado de su tipo, en un caso real donde existe una base de datos
// el animal registrado contaria con un id unico, por lo que al consultarl esta funcion se podria llamar a los datos correspondientes del id unico asignado al animal registrado.
// puede que exista otra forma en la cual no se necesita un id unico asignado, pero escapa de mi conocimiento. tal vez recorriendo el arreglo de animales registrados pero no veo como eso podria funcionar si la funcion solo se guia por un clic.
var modal = function modal(animal) {
  var animalSeleccionado = animalesRegistrados.find(function (a) {
    return a._nombre == animal;
  });
  var modalContent = "\n             <div class=\"modal-dialog modal-dialog-centered w-50 text-light\" role=\"document\">\n                <div class=\"modal-content bg-dark\" style=\"width: 350px\">\n                     <div class=\"modal-header\">\n                         <h5 class=\"modal-title\">".concat(animalSeleccionado.nombre, "</h5>\n                         <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                             <span aria-hidden=\"true\">&times;</span>\n                         </button>\n                     </div>\n                     <div class=\"modal-body\">\n                         <img src=\"assets/imgs/").concat(animalSeleccionado.img, "\" class=\"img-fluid\" alt=\"").concat(animalSeleccionado.nombre, "\" style=\"width: 340px\" />\n                        <p>Edad: ").concat(animalSeleccionado.edad, "</p>\n                         <p>Comentarios: ").concat(animalSeleccionado.comentarios, "</p>\n                     </div>\n                 </div>\n             </div>\n         ");
  document.getElementById('exampleModal').innerHTML = modalContent;
  $('#exampleModal').modal('show');
};

// Event listener para detectar cambios en la selección de animales en el formulario
document.getElementById('animal').addEventListener('change', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
  var selectedAnimal, animalElegido;
  return regeneratorRuntime.wrap(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          selectedAnimal = document.getElementById('animal').value;
          _context3.next = 3;
          return animalesDataPromise;
        case 3:
          animalElegido = _context3.sent.find(function (animal) {
            return animal.name === selectedAnimal;
          });
          // Mostrar la imagen previa del animal seleccionado
          if (animalElegido) {
            document.getElementById('preview').style.backgroundImage = "url(assets/imgs/".concat(animalElegido.imagen, ")");
          } else {
            console.log('Animal no reconocido');
          }
        case 5:
        case "end":
          return _context3.stop();
      }
    }
  }, _callee3);
})));

// Event listener para registrar nuevos animales cuando se hace clic en el botón "Registrar"
document.getElementById("btnRegistrar").addEventListener("click", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
  var nombreAnimal, edadAnimal, comentariosAnimal, _animalesRegistrados;
  return regeneratorRuntime.wrap(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          nombreAnimal = document.getElementById('animal').value;
          edadAnimal = document.getElementById('edad').value;
          comentariosAnimal = document.getElementById('comentarios').value; // Condiciona que todos los campos sean seleccionados/completados
          if (!(nombreAnimal == 'Seleccione un animal' || edadAnimal == 'Seleccione un rango de años' || comentariosAnimal == '')) {
            _context4.next = 7;
            break;
          }
          alert("debe completar todos los campos para registrar un animal");
          _context4.next = 11;
          break;
        case 7:
          _context4.next = 9;
          return formAnimals();
        case 9:
          _animalesRegistrados = _context4.sent;
          if (_animalesRegistrados) {
            mostrarAnimalesRegistrados(_animalesRegistrados);
          }
        case 11:
        case "end":
          return _context4.stop();
      }
    }
  }, _callee4);
})));