
let miFuncion = function (a:number, b:number)
{
    return a + b;
};

let miFuncionF = (a:number, b:number) => a + b;

console.log(miFuncion(2, 3));
console.log(miFuncionF(3, 3));

let upper = function (nombre:string) {
    nombre = nombre.toUpperCase();
    return nombre;
};

let upperF = (nombre:string) => {
    nombre = nombre.toUpperCase();
    return nombre;
};

let hulk = {
    nombre: "Hulk",
    smash() {
        setTimeout(() => {
            console.log(this.nombre + ' smash!!');
        }, 1500);
    }
};

hulk.smash();