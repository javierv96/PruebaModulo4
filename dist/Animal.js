"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
//Clase padre que representa un Animal.
var Animal = /*#__PURE__*/function () {
  // Crea una instancia de Animal.
  function Animal(nombre, edad, img, comentarios, sonido) {
    _classCallCheck(this, Animal);
    this._nombre = nombre;
    this._edad = edad;
    this._img = img;
    this._comentarios = comentarios;
    this._sonido = sonido;
  }

  // Obtiene el nombre del animal.
  _createClass(Animal, [{
    key: "nombre",
    get: function get() {
      return this._nombre;
    }

    // Obtiene la edad del animal.
  }, {
    key: "edad",
    get: function get() {
      return this._edad;
    }

    // Obtiene la ruta de la imagen del animal.
  }, {
    key: "img",
    get: function get() {
      return this._img;
    }

    // Obtiene los comentarios sobre el animal.
  }, {
    key: "comentarios",
    get: function get() {
      return this._comentarios;
    }

    // Establece los comentarios sobre el animal.
    ,
    set: function set(comentarios) {
      this._comentarios = comentarios;
    }

    // Obtiene el sonido del animal.
  }, {
    key: "sonido",
    get: function get() {
      return this._sonido;
    }
  }]);
  return Animal;
}(); // Exporta la clase Animal para que esté disponible para su uso en otros archivos.
var _default = Animal;
exports["default"] = _default;