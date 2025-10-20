const usuarios = [
	{ edad: 17, nombre: 'Nico', plan: 'Premium' },
	{ edad: 13, nombre: 'Chanchito', plan: 'Premium' },
	{ edad: 32, nombre: 'Fernanda', plan: 'Free' },
	{ edad: 25, nombre: 'Felipe', plan: 'Gold' },
];

function obtenerMayor( users ) {
	const ordenado = users.sort( ( a, b ) => ( a.edad > b.edad ? -1 : b.edad > a.edad ? 1 : 0 ) );
	return ordenado[0];
}

console.log( obtenerMayor( usuarios ) );
