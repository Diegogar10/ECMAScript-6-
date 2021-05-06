//concatenacion antes
let hello = "Hello";
let world = "world!";
let epicPhrase = hello + ' ' +world;
console.log(epicPhrase);

//concatenacion a parir de EM6
let epicPhrase2 = `${hello} ${world}, Aquí saludando Diego.`;
console.log(epicPhrase2);

//Multilinea antes
let lorem = "lorem impsu que yo puedo semara con \n"+
            "otra frase epica que necesitamos";

//Multilenea despues ES6
let lorem2=`
otra frase epica que necesitamos de ejemplo
para mostrar como escribimos multilinea.`;


console.log(lorem);
console.log(lorem2);

//contruccionde objetos
let name2 = 'Diego';
let age2 = 28;
        //antes de ES6
obj = {name2:name2 , age2:age2};
        //despues de ES6
obj2 = {name2,age2};
console.log(obj2);
