
let avenger = {
    nombre: "Steve",
    clave: "Capitan America",
    poder: "Fuerza"
};

// :alias es el nombre a usar en la let, no es el tipado de typescript.
let { nombre, clave, poder:alias } = avenger;

console.log (nombre, clave, alias);

let avengers:string[] = [ "Thor", "Steve", "Tony"];

let [ thor, capi, ironMan ] = avengers;

console.log(thor, capi, ironMan);