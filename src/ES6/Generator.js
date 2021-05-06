//funcion especial que devuelve una serie de valores

function* helloWorld(nombre){
    
    if(true) yield `Hola, `;
    if(true) yield `${nombre}`;
    if(true) yield `Bienvenido!`;
};

const generatorHola= helloWorld('Diego');

console.log(generatorHola.next().value);
console.log(generatorHola.next().value);
console.log(generatorHola.next().value);