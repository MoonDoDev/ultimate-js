/**
 * Crear un array de longitud N, y que sus elementos sean números de 1 hasta N.  
 */

let longitud = 7;

function crearArray(n)
{
    if (n <= 0)
    {
        return [];
    }

    let array = [];

    for (let idx = 0; idx < n; idx++)
    {
        array[idx] = idx + 1;
    }

    return array;
}

let resultado = crearArray(longitud);
console.log(resultado);
