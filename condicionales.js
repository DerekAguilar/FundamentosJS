// Condicionales
// if (exp) {}
const age = 18;
if(age>=18) {
    console.log('Es mayor');
}
// if (exp) {} else {}
if(age>=18) {
    console.log('Es mayor');
} else {
    console.log('Es menor');
}
// if ternario (exp)? true: false;
(age >=18)? console.log('Es mayor'): console.log('Es menor');

// if (exp) {} else if (exp) else {}
const ppt=Math.random();
if(ppt <=0.3333333333){
    console.log('Cayó piedra');
} else if(ppt<=0.6666666666){
    console.log('Cayó Papel');
} else {
    console.log('Cayó Tijeras');
}
// switch / case
const day=Math.ceil(Math.random()*7);
switch(day){
    case 1:
        console.log('Es Domingo');
        break;
    case 2:
        console.log('Es Lunes');
        break;
    case 3:
        console.log('Es Martes');
        break;
    case 4:
        console.log('Es Miércoles');
        break;
    case 5:
        console.log('Es Jueves');
        break;
    case 6:
        console.log('Es Viernes');
        break;
    default:
        console.log('Es sábado');
}

// Truthy and Falsy
const numOfStudents = 10;
if(numOfStudents === 0){
    console.log('No hay alumnos');
} else {
    console.log(`Hay ${ numOfStudents } alumnos`);
}

if(numOfStudents){
    console.log(`Hay ${ numOfStudents } alumnos`);
} else {
    console.log('No hay alumnos');
}

const usuario = '';
const invitado = usuario || 'Desconocido';

const usuario2 = 'Derek';
const invitado2 = usuario2 || 'Desconocido';

console.log(invitado);
console.log(invitado2);