// Funciones en Javascript

// Sin parámetro ni retorno
function saluda(){
    console.log("Hola!");
}
saluda();
// Con parámetro sin retorno
function addOne(num){
    console.log(`${ num } + 1 = ${ num + 1 }`);
}
addOne(15);

// Con parámetros y retorno
function suma(num1,num2){
    return num1+num2;
}
const result=suma(12,34);
console.log(result);

// Funciones como constantes
// Funciones anónimas
const resta = function (num1, num2) {
    return num1-num2;
}
const resultado=resta(12,2);
console.log(resultado);

// Funciones de Flecha Arrow Functions
(param1,param2) => {
    // Código
    // Return (opcional)
}

const duplica = (num) => {
    return num*2;
}

const multiplica = (num1,num2) => {
    console.log('Multiplica números');
    return num1*num2;
}

const doble = duplica(16);
console.log(doble);

const resultM = multiplica(13,26);
console.log(resultM);

// Simplificar Arrow Functions
let cambiaMinusculas = (word) => {
    return word.toLowerCase();
}
// Si solo es un único parámetro se pueden omitir los paréntesis (se necesitan para cuando no tiene parámetros)
// Si la única línea es el return se pueden omitir las llaves
cambiaMinusculas=word=> word.toLowerCase();
