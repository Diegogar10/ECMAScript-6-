//arrow Function o funciones de flecha 

const names = [
    {name:'Diego', age:28},
    {name:'Isabel', age:27}
];

//llamar lo elementos antes de ES6

    let listOfNames = names.map(function(item){
    console.log(item.name);
});

//llamar lo elementos despues de ES6

let listOfNames2 = names.map(item => console.log(item.name));

        //en vez de pasar una funcion anonima se pasa el elemento que necesitamos

//otras sintasis que tmb vamos a encontrarde arrow funtions

const listOfNames3 = (name,age,country)=>{
    //...codigo con los parametros que queremos utilizar
}
const listOfNames4 = name =>{
    //...codigo con el parametro unico que pasamos
}

// las arrow function pueden retornar un valor automaticamente
const square = num => num * num ;
