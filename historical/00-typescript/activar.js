"use strict";
function activar(quien, objeto, momento) {
    if (objeto === void 0) { objeto = "vacio"; }
    var mensaje;
    if (momento) {
        mensaje = quien + " texto " + objeto + " en " + momento;
    }
    else {
        mensaje = quien + " texto " + objeto;
    }
    console.log(mensaje);
}
activar("Gordon");
