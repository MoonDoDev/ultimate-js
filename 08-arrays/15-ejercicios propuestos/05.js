const datos = [0, 1, 0, 3, 12, 0, 5];

console.log( 'El arreglo con los datos a procesar es:', datos );

function pasarCerosAlFinalBasica( arr ) {
	let numeros = [];
	const size = arr.length;

	if ( size === 0 ) return numeros;

	let ceros = [];
	for ( let i = 0; i < size; i++ ) {
		const num = arr[i];

		if ( num === 0 ) {
			ceros.push( num );
		} else {
			numeros.push( num );
		}
	}

	return [...numeros, ...ceros];
}

function pasarCerosAlFinalEficiente( arr ) {
	return arr.sort( ( a, b ) => ( a === 0 ? 1 : b === 0 ? -1 : 0 ) );
}

console.log( 'Arreglo organizado (forma básica):', pasarCerosAlFinalBasica( datos ) );
console.log( 'Arreglo organizado (eficientemente):', pasarCerosAlFinalEficiente( datos ) );
