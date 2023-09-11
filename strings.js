// Strings
const firstName='Francisco';
const lastName="López";
const fullName=firstName+" "+lastName;

console.log("I'm "+firstName);
console.log('I\'m '+firstName); // Permitir el apostrofo en el string sin romper el código

console.log(fullName);

// Strings Multi línea
const menu=`
elige:
1 - Opción 1
2 - Opción 2
3 - Opción 3
`;

console.log(menu);

// Strings Templates
// Uso de placeholders ${ }

const city='Huamantla';
const phone='2471070644';
const rol='Profesor';

const introduction=`
Hola
Soy ${ fullName }, ${ rol } en la UTT
Vivo en ${ city }
Te puedes comunicar conmigo al número ${ phone }
`;

console.log(introduction);