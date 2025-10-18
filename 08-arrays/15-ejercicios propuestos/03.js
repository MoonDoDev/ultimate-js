const arr1 = [10, 5, 8];
const arr2 = [2, 7, 3];

function sortArray( arr ) {
	return arr.sort( ( a, b ) => a - b );
}

const arregloUnificado = [...arr1, ...arr2];
console.log( 'El arreglo ha ordenar es el siguiente', arregloUnificado );
console.log( 'El arreglo ordenado es el siguiente: ', sortArray( arregloUnificado ) );
