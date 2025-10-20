const usuarios = [
	{ edad: 17, nombre: 'Nico', plan: 'Premium' },
	{ edad: 13, nombre: 'Chanchito', plan: 'Premium' },
	{ edad: 32, nombre: 'Fernanda', plan: 'Free' },
	{ edad: 25, nombre: 'Felipe', plan: 'Gold' },
];

function cuantosPremium( users ) {
	return users.filter( ( usr ) => usr.plan !== 'Free' ).length;
}

function cuantosMayores( users ) {
	return users.filter( ( usr ) => usr.edad > 17 ).length;
}

console.log( cuantosPremium( usuarios ) );
console.log( cuantosMayores( usuarios ) );
