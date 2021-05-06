//Declaracion de Objetos

let person = {
    'name':'Diego',
    'age':28, 
    'country':'CO'
}

//Accediendo antes de ES6

console.log(person.name,person.age);

//Accediendo despues de ES6

let {name, age , country}=person;
console.log(name,age,country);

//elemento de propagacion, unir elementos
let team1 = ['Fabian','Josuelo','Marina'];
let team2 = ['Diego','Sandy','Pablo'];

let education = ['Albeiro',...team1,...team2];
console.log(education);