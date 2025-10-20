const miArray = ['Hola', 12, 'Mundo', {}, { id: 15 }, ['lala']];

function dividePorTipo( arr ) {
	return {
		numeros: arr.filter( ( n ) => typeof n === 'number' ),
		strings: arr.filter( ( n ) => typeof n === 'string' ),
		objetos: arr.filter( ( n ) => typeof n === 'object' ),
	};
}

const nuevoArray = dividePorTipo( miArray );
console.log( nuevoArray );
