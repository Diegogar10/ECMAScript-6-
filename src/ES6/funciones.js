// funcion antes
function newFunction(name,age,country){
    var name = name || 'Diego';
    var age = age || 28;
    var country = country || 'CO';
    console.log(name,age,country);
}

// funcion ahora con ES6
function newFunctionWith_ES6(name = 'Diego', age = 28, country = 'CO'){
    console.log(name, age, country);
}
        //llamar las funciones
newFunctionWith_ES6();
newFunctionWith_ES6('Felipe',20,'PE');

