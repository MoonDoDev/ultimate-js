const letras = ['a', 'b'];

// Agregar al final del array
letras.push( 'c', 'd' );

// Agregar al inicio del array
letras.unshift( 'y', 'z' );

// Agregar después del 4to indice el número 1, y el 2 al array
letras.splice( 3, 0, 1, 2 );

console.log( letras );
