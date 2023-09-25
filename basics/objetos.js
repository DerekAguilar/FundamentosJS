// Objetos en JS
/* Objeto = {
        key: value,
        key: value
}
objeto.key
objeto['key']
*/

const subject={
        name:'Aplicaciones Web',
        quarter: 3,
        professor:'Francisco',
        'classroom':'Lab Redes I',
        'total hours':70,
        weekHours:5
}

console.log(subject);
console.log(subject.name);
console.log(subject.professor);
console.log(subject['classroom']);
console.log(subject['total hours']);

subject.professor='Francisco López';
subject.career='TIADSM';
console.log(subject);

const student={
        name:'Laura Alicia',
        age:21,
        grades:[10,10,8],
        city:'Apizaco'
}

const group={
        name:'4°B',
        students:[student,student,student],
        subjects:[subject,subject,subject]
}

console.log(group);
console.log(group.subjects[0].professor);
console.log(group.students[1].grades);
console.log(group.students[1].grades[0]);