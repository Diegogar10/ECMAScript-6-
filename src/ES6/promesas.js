//Declaracion de una promesa con arrow function
//donde la promesa necesita un resolve y un reject

const helloPromise = () => {
    return new Promise((resolve, reject)=>{
        if(true) resolve ('Hey!');
        else reject('Upss!');
    });
}

//llamado a  la promesa

helloPromise()
    .then(response=>console.log(response))
    .then(()=>console.log('Hola'))
    .catch(error=>console.log(error));