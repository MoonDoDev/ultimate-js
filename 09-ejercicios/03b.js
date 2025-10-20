const usuarios = [
	{ edad: 17, nombre: 'Nico', plan: 'Premium' },
	{ edad: 13, nombre: 'Chanchito', plan: 'Free' },
	{ edad: 32, nombre: 'Fernanda', plan: 'Free' },
	{ edad: 25, nombre: 'Felipe', plan: 'Gold' },
];

function getPaidUsers( users ) {
	return users.filter( ( usr ) => usr.plan !== 'Free' );
}

const resultado = getPaidUsers( usuarios );
console.log( resultado );
