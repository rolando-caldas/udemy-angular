
let prom1 = new Promise(function(resolve, reject) {

    setTimeout( () => {
       console.log("Promesa terminada");

       // éxito
       resolve();

       // fracaso
       // reject();
    }, 1500);
});

console.log("Paso 1");

prom1.then( function () {
    console.log("Ejecutarme cuando la promesa termine en éxito");
}, function () {
    console.error("Ejecutar si algo sale mal");
});

console.log("paso 2");