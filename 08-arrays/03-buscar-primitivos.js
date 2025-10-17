const letras = ['a', 'b', 1, 'c', 'd', 1];

// Buscamos en el array de izquierda a derecha la posición de la letra 'c' (si no se encuentra nos retorna -1)
console.log(letras.indexOf("c"));

// Buscamos en el array de izquierda a derecha la posición del número 1, a partir de la 3ra posición del array (inclusive) 
console.log(letras.indexOf(1, 2));

// Buscamos en el array de derecha a izquierda la posición del número 1
// console.log(letras.lastIndexOf(1));

// Manera antigua de simplemente averiguar si un elemento se encontraba en el array (no se requiere su posición)
// console.log(letras.indexOf(1) !== -1);

// Manera actual/moderna de averiguar si un elemento se encuentra en el array
// console.log(letras.includes("c"));