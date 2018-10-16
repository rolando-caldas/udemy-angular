"use strict";
var miFuncion = function (a, b) {
    return a + b;
};
var miFuncionF = function (a, b) { return a + b; };
console.log(miFuncion(2, 3));
console.log(miFuncionF(3, 3));
var upper = function (nombre) {
    nombre = nombre.toUpperCase();
    return nombre;
};
var upperF = function (nombre) {
    nombre = nombre.toUpperCase();
    return nombre;
};
var hulk = {
    nombre: "Hulk",
    smash: function () {
        var _this = this;
        setTimeout(function () {
            console.log(_this.nombre + ' smash!!');
        }, 1500);
    }
};
hulk.smash();
