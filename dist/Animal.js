"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
var Animal = /*#__PURE__*/function () {
  function Animal(nombre, edad, img, comentarios, sonido) {
    _classCallCheck(this, Animal);
    this._nombre = nombre;
    this._edad = edad;
    this._img = img;
    this._comentarios = comentarios;
    this._sonido = sonido;
  }
  _createClass(Animal, [{
    key: "nombre",
    get: function get() {
      return this._nombre;
    }
  }, {
    key: "edad",
    get: function get() {
      return this._edad;
    }
  }, {
    key: "img",
    get: function get() {
      return this._img;
    }
  }, {
    key: "comentarios",
    get: function get() {
      return this._comentarios;
    },
    set: function set(comentarios) {
      this._comentarios = comentarios;
    }
  }, {
    key: "sonido",
    get: function get() {
      return this._sonido;
    }
  }]);
  return Animal;
}();
var _default = Animal;
exports["default"] = _default;