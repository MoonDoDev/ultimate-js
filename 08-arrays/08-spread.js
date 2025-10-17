let arr1 = [1, 2];
let arr2 = [5, 6];

// Combinamos los dos arrays anteriores, agregando elementos adicionales
let arr3 = [0, ...arr1, 3, 4, ...arr2, 7, 8];

// Hacemos una copia del array anterior
let arr4 = [...arr3];

// Con la siguiente linea, comprobamos que son copias independientes (no es una copia de referencia)
arr3.pop();

console.log( arr3 );
console.log( arr4 );
