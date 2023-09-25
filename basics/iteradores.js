const fruits=['apple','orange','melon','watermelon'];

console.log('-----for-----');
// Recorrido con for
for(let i=0;i<fruits.length;i++){
    console.log(fruits[i]);
}

console.log('-----for of-----')
// Recorrido con for of
for(const fruit of fruits){
    console.log(fruit);
}

// Iteradores de Arrays
// forEach()
console.log('-----forEach-----');
fruits.forEach(
    function (fruit){
        console.log(fruit);
    }
);

console.log('-----forEach con arrow function-----');
fruits.forEach(fruit=>console.log(fruit));

// map
// itera un array y genera uno nuevo a partir del original

const numbers=[1,2,3,4,5,6,7];

const squares=numbers.map(num=>num**2);
/* ^ Lo mismo que:
(num)=>{
    return num**2;
}
*/

console.log(numbers);
console.log(squares);

// filter
// Itera un array y regresa uno nuevo con valores que cumplan
// condición

const mayores=numbers.filter(num=>num>4);
/*
(num)=>{
    if(num>4){
        return num;
    }
}
*/
console.log(numbers);
console.log(mayores);

// reduce
// regresa un único valor a partir de los valores de un array

const sumatoria=numbers.reduce((a,b)=>a+b);
const fact=numbers.reduce((a,b)=>a*b);

console.log(numbers);
console.log(sumatoria);
console.log(fact);

const lowercase='abcdefghi'.split('');

uppercase=lowercase.map(letter=>letter.toUpperCase());

console.log(lowercase);
console.log(uppercase);

// some
// Regresa true si al menos uno de los elementos cumple la condición

const equalTo5=numbers.some(num=>num===15);
console.log(equalTo5);