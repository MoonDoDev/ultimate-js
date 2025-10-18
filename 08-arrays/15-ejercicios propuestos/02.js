function reverseArray( arrValues ) {
	const size = arrValues.length;
	let result = [];

	if ( size === 0 ) return result;

	for ( let i = size; i > 0; i-- ) {
		result.push( arrValues[i - 1] );
	}

	return result;
}

const values = [1, 2, 3, 4, 5];
console.log( 'Los datos del arreglo que vamos a invertir son:', values );
console.log( 'Los datos invertidos del arreglo son:', reverseArray( values ) );
