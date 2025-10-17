let usuarios = [
	{ id: 1, activo: true },
	{ id: 2, activo: false },
	{ id: 3, activo: true },
];

// Podemos usar el método "every()", pasándole un "predicate"
// ... para determinar si todos en el array cumplen la condición.
let todosActivos = usuarios.every( ( u ) => {
	console.log( 'todos activos', u.id );
	return u.activo;
} );

console.log( 'todos activos:', todosActivos );

// También podemos usar el método "some()" pasándole un "predicate"
// ... para determinar si alguno del array cumple la condición.
let algunoActivo = usuarios.some( ( u ) => {
	console.log( u.id );
	return u.activo;
} );

console.log( 'alguno activo:', algunoActivo );
