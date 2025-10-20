const usuarios = [
	{ edad: 17, nombre: 'Nico', plan: 'Premium' },
	{ edad: 13, nombre: 'Chanchito', plan: 'Free' },
	{ edad: 32, nombre: 'Fernanda', plan: 'Free' },
	{ edad: 25, nombre: 'Felipe', plan: 'Gold' },
];

// Obtener los usuarios pago
// Ordenar de mayor a menor
// Devolver el nombre del usuario
// Crear una plantilla HTML
// Imprimirla en consola

function obtenerDatos( arr ) {
	const usuariosPago = arr
		.filter( ( u ) => u.plan !== 'Free' )
		.sort( ( a, b ) => ( a.edad > b.edad ? -1 : b.edad > a.edad ? 1 : 0 ) )
		.map( ( u ) => `<li>${u.nombre}</li>` );

	return usuariosPago;
}

const resultado = obtenerDatos( usuarios );
console.log( `<ul>${resultado}</ul>` );
