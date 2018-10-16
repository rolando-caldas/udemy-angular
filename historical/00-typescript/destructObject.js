"use strict";
var avenger = {
    nombre: "Steve",
    clave: "Capitan America",
    poder: "Fuerza"
};
// :alias es el nombre a usar en la let, no es el tipado de typescript.
var nombre = avenger.nombre, clave = avenger.clave, alias = avenger.poder;
console.log(nombre, clave, alias);
var avengers = ["Thor", "Steve", "Tony"];
var thor = avengers[0], capi = avengers[1], ironMan = avengers[2];
console.log(thor, capi, ironMan);
