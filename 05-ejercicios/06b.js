/**
 * Crear algoritmo que devuelva la cantidad de números positivos en un array
 */

let array = [2, 5, 7, 15, -5, -100, 55];

function cuantosPositivos(arr) {
    let positivos = 0;

    for (let num of arr) {
        positivos += (num >= 0) ? 1 : 0;
    }

    return positivos;
}

let positivos = cuantosPositivos(array);
console.log(positivos);
