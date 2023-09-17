//Dato boleano
var bandera = false;
console.log(typeof bandera)

//Dato funcion
function miFuncion(){}
console.log(typeof miFuncion);

//Dato Symbol
var simbolo = Symbol("mi simbolo");
console.log(typeof simbolo);

//Dato cale es una funcion
class persona{
    constructor(nombre,apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
}
console.log(typeof persona);

//Tipo indefinido
var x;
console.log(typeof x);

x = undefined;
console.log(typeof x);

//null = ausencia de valor
var y = null
Console.log(typeof y)