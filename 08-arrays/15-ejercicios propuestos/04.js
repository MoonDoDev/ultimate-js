const datosRepetidos = [1, 2, 2, 3, 4, 4, 5, 6, 6];

console.log( 'El arreglo a procesar es:', datosRepetidos );

function eliminarRepetidos( arr ) {
	let resultado = [];
	if ( arr.length === 0 ) return resultado;

	for ( let num of arr ) {
		if ( !resultado.includes( num ) ) resultado.push( num );
	}

	return resultado;
}

console.log( 'Después de eliminar repetidos queda así:', eliminarRepetidos( datosRepetidos ) );
