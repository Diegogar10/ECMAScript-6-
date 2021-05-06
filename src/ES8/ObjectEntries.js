// object entries, consultar clave y valor de una matrix de objetos

const data = {
    frontend : 'Diego',
    backend: 'Isabel',
    desing: 'Fernando',
}

//transformamos en una matriz de clave valor
const entrie = Object.entries(data);
console.log(entrie);
console.log(entrie.length);