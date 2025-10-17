/**
 * Crear un algoritmo que retorne un array de valores pares
 */

let array = [{
    id: 1,
    name: 'Nicolas'
}, {
    id: 2,
    name: 'Felipe'
}, {
    id: 3,
    name: 'Chanchito'
}];

let pares = [
    [1, { id: 1, name: 'Nicolas' }],
    [2, { id: 2, name: 'Felipe' }],
    [3, { id: 3, name: 'Chanchito' }]
];

function toPairs(arr) {
    let result = [];

    for (let idx in arr) {
        let elemento = arr[idx];
        result[idx] = [elemento.id, elemento];
    }

    return result;
}

let resultado = toPairs(array);
console.log(resultado);
