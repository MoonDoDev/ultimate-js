const usuarios = [
	{ edad: 17, nombre: 'Nico', plan: 'Premium' },
	{ edad: 13, nombre: 'Chanchito', plan: 'Free' },
	{ edad: 32, nombre: 'Fernanda', plan: 'Free' },
	{ edad: 25, nombre: 'Felipe', plan: 'Gold' },
];

function groupBy( users, prop ) {
	return users.reduce( ( acc, el ) => {
		let llave = el[prop];

		acc[llave] = acc[llave] ? acc[llave] : [];
		acc[llave].push( el );

		return acc;
	}, {} );
}

const resultado = groupBy( usuarios, 'plan' );
console.log( { resultado } );
