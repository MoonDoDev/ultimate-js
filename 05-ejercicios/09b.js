/**
 * Crear un algoritmo que devuelva un array de objetos en base a pares
 * NOTA: Se debe agregar la propiedad 'Id' a la colección
 */

let pares = [
    [1, { name: 'Nicolas' }],
    [2, { name: 'Felipe' }],
    [3, { name: 'Chanchito' }]
];

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

function toCollection(arr) {
    let result = [];

    for (let idx in arr) {
        let elemento = arr[idx];
        result[idx] = elemento[1];
        result[idx].id = elemento[0];
    }

    return result;
}

let resultado = toCollection(pares);
console.log(resultado);
