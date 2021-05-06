const helloWorld = () =>{
    return new Promise((resolve,reject)=>{
        (true)
            ? setTimeout(()=>resolve('Hello World'),3000)
            : reject(new Error('Test Error'))
    })
};


// notacion de async antes de la funcion asi es la forma de identifica
const helloAsync = async () =>{
    const hello = await helloWorld();
    //const hello = await ... otra funcion...
    console.log(hello);
}

helloAsync();

//otra forma de capturar un error dentro de nuestro Async

const anotherFunction = async () =>{
    try{
        const hello= await helloWorld();
        console.log(hello);
    }catch(error){
        console.log(error);
    }
}

anotherFunction();