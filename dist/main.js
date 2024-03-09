"use strict";

var _Leon = _interopRequireDefault(require("./Leon.js"));
var _Aguila = _interopRequireDefault(require("./Aguila.js"));
var _Lobo = _interopRequireDefault(require("./Lobo.js"));
var _Oso = _interopRequireDefault(require("./Oso.js"));
var _Serpiente = _interopRequireDefault(require("./Serpiente.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
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
          return _context.abrupt("return", data);
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
var formAnimals = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    var data, name, edad, comentarios, animales, animalElegido, animalesRegistrados, leon, lobo, oso, serpiente, aguila;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return animalesDataPromise;
          case 3:
            data = _context2.sent;
            name = document.getElementById('animal').value;
            edad = document.getElementById('edad').value;
            comentarios = document.getElementById('comentarios').value;
            if (!(!data || !data.animales)) {
              _context2.next = 10;
              break;
            }
            console.error('Los datos o la propiedad "animales" no están definidos.');
            return _context2.abrupt("return");
          case 10:
            animales = data.animales;
            animalElegido = animales.find(function (animal) {
              return animal.name === name;
            });
            if (animalElegido) {
              _context2.next = 15;
              break;
            }
            console.log('Animal no reconocido');
            return _context2.abrupt("return");
          case 15:
            animalesRegistrados = [];
            _context2.t0 = name;
            _context2.next = _context2.t0 === 'Leon' ? 19 : _context2.t0 === 'Lobo' ? 25 : _context2.t0 === 'Oso' ? 31 : _context2.t0 === 'Serpiente' ? 37 : _context2.t0 === 'Aguila' ? 43 : 49;
            break;
          case 19:
            leon = new _Leon["default"](name, edad, animalElegido.imagen, comentarios, animalElegido.sonido);
            modal(leon);
            document.getElementById('preview').style.backgroundImage = "url(assets/imgs/".concat(animalElegido.imagen, ")");
            animalesRegistrados.push(leon);
            console.log(leon);
            return _context2.abrupt("break", 51);
          case 25:
            lobo = new _Lobo["default"](name, edad, animalElegido.imagen, comentarios, animalElegido.sonido);
            modal(lobo);
            document.getElementById('preview').style.backgroundImage = "url(assets/imgs/".concat(animalElegido.imagen, ")");
            animalesRegistrados.push(lobo);
            console.log(lobo);
            return _context2.abrupt("break", 51);
          case 31:
            oso = new _Oso["default"](name, edad, animalElegido.imagen, comentarios, animalElegido.sonido);
            modal(oso);
            document.getElementById('preview').style.backgroundImage = "url(assets/imgs/".concat(animalElegido.imagen, ")");
            animalesRegistrados.push(oso);
            console.log(oso);
            return _context2.abrupt("break", 51);
          case 37:
            serpiente = new _Serpiente["default"](name, edad, animalElegido.imagen, comentarios, animalElegido.sonido);
            modal(serpiente);
            document.getElementById('preview').style.backgroundImage = "url(assets/imgs/".concat(animalElegido.imagen, ")");
            animalesRegistrados.push(serpiente);
            console.log(serpiente);
            return _context2.abrupt("break", 51);
          case 43:
            aguila = new _Aguila["default"](name, edad, animalElegido.imagen, comentarios, animalElegido.sonido);
            modal(aguila);
            document.getElementById('preview').style.backgroundImage = "url(assets/imgs/".concat(animalElegido.imagen, ")");
            animalesRegistrados.push(aguilla);
            console.log(aguila);
            return _context2.abrupt("break", 51);
          case 49:
            console.log('Animal no reconocido');
            return _context2.abrupt("break", 51);
          case 51:
            return _context2.abrupt("return", animalesRegistrados);
          case 54:
            _context2.prev = 54;
            _context2.t1 = _context2["catch"](0);
            console.error('Error al obtener los datos de los animales:', _context2.t1);
          case 57:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 54]]);
  }));
  return function formAnimals() {
    return _ref2.apply(this, arguments);
  };
}();
var mostrarAnimalesRegistrados = function mostrarAnimalesRegistrados(animalesRegistrados) {
  var container = document.getElementById('Animales');
  var postHTML = '';
  animalesRegistrados.forEach(function (animal) {
    postHTML += '<div class="card" style="width: 19rem;">' + "<img src=\"assets/imgs/".concat(animal.img, "\" class=\"card-img-top\" id=\"cardTabla\">\n             <audio controls><source src=\"assets/sounds/").concat(animal.sonido, "\"></audio>") + '</div>';
  });
  container.innerHTML = postHTML;
};
var modal = function modal(animal) {
  var modalContent = "\n            <div class=\"modal-dialog modal-dialog-centered w-50 text-light\" role=\"document\">\n                <div class=\"modal-content bg-dark\" style=\"width: 350px\">\n                    <div class=\"modal-header\">\n                        <h5 class=\"modal-title\">".concat(animal.nombre, "</h5>\n                        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                            <span aria-hidden=\"true\">&times;</span>\n                        </button>\n                    </div>\n                    <div class=\"modal-body\">\n                        <img src=\"assets/imgs/").concat(animal.img, "\" class=\"img-fluid\" alt=\"").concat(animal.nombre, "\" style=\"width: 340px\" />\n                        <p>Edad: ").concat(animal.edad, "</p>\n                        <p>Comentarios: ").concat(animal.comentarios, "</p>\n                        <audio controls style=\"width: 300px\"><source src=\"assets/sounds/").concat(animal.sonido, "\"></audio>\n                    </div>\n                </div>\n            </div>\n        ");
  document.getElementById('exampleModal').innerHTML = modalContent;
  $('#exampleModal').modal('show');
};
document.getElementById("btnRegistrar").addEventListener("click", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
  var animalesRegistrados;
  return regeneratorRuntime.wrap(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return formAnimals();
        case 2:
          animalesRegistrados = _context3.sent;
          // Espera a que formAnimals() termine y obtén el resultado
          if (animalesRegistrados) {
            mostrarAnimalesRegistrados(animalesRegistrados);
          }
        case 4:
        case "end":
          return _context3.stop();
      }
    }
  }, _callee3);
})));