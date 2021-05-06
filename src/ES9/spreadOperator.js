const obj = {
    name:'Diego',
    age:28, 
    country:'CO'
}

let {name, ...all} = obj;
console.log(name,all);