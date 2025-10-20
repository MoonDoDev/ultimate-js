const usuarios = [
	{ edad: 17, nombre: 'Nico', plan: 'Premium' },
	{ edad: 13, nombre: 'Chanchito', plan: 'Free' },
	{ edad: 32, nombre: 'Fernanda', plan: 'Free' },
];

const users = [
	{ age: 22, name: 'Michael', membership: 'Premium' },
	{ age: 29, name: 'Kevin', membership: 'Free' },
	{ age: 29, name: 'Happy pig', membership: 'Free' },
];

// Unificar las estructuras de usuarios y user
// Fusionar los arrays
// Ordenarlos por edad
// Crear una plantilla HTML
// <li>Nombre: name, Edad: age</li>
// Imprimirla en consola

const unificados = [
	...usuarios,
	...users.map( ( u ) => ( { edad: u.age, nombre: u.name, plan: u.membership } ) ),
];

const lista = unificados
	.sort( ( a, b ) => ( a.edad > b.edad ? -1 : b.edad < a.edad ? 1 : 0 ) )
	.map( ( u ) => `<li>Nombre: ${u.nombre}, Edad: ${u.edad}</li>` );

console.log( `
<ul>
    ${lista.join( `
    ` )}
</ul>` );
