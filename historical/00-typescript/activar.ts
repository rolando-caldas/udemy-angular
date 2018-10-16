
function activar( quien:string, objeto:string = "vacio", momento?:string ) {

    let mensaje:string;

    if (momento) {
        mensaje = `${ quien } texto ${ objeto } en ${momento}`;
    } else {
        mensaje = `${ quien } texto ${ objeto }`;
    }

    console.log(mensaje);
}

activar("Gordon");