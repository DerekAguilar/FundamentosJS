// Tipos en Javascript
// number, string, boolean, object, undefined
// typeof nos dice el tipo de dato
console.log(12);
console.log(typeof(12));

console.log('cadena'); // Puede ser tanto comillas simples como dobles, Java real sí distingue para caracteres y strings, respectivamente
console.log(typeof('cadena'));

console.log(true);
console.log(typeof(true));

let variable;
console.log(typeof(variable));

console.log([1,2,3])
console.log(typeof([1,2,3]));

// Variables en Javascript
// En versiones anteriores a ES6 (Enmascript 6) se usaba var
var firstName = 'Tony Stark';

// const y let para ES6 en adelante
// Constantes const (variables de solo lectura)
// Siempre debe inicializarse
// No permite reasignación

const PI=3.14;
// PI=3.1415962; <- Dejar esto provocará un error al no poder editar un valor constante

// Variables con let
// Declarar
let lastName; // En este momento está como undefined
lastName = 'Pérez';
lastName = true;
lastName = 25; // let permite cambiar el tipo de valor y de dato