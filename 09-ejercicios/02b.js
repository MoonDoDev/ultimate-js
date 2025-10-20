const miArray = ['Hola', 12, 'Mundo', {}, { id: 15 }, ['lala']];

function dividePorTipo( arr ) {
	let numeros = [];
	let strings = [];
	let objectos = [];

	for ( let i = 0; i < arr.length; i++ ) {
		if ( typeof arr[i] === 'number' ) numeros.push( arr[i] );
		else if ( typeof arr[i] === 'string' ) strings.push( arr[i] );
		else objectos.push( arr[i] );
	}

	return [{ numeros: numeros }, { strings: strings }, { objetos: objectos }];
}

const nuevoArray = dividePorTipo( miArray );
console.log( nuevoArray );
