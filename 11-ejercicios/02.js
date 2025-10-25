/**
 * Debemos extender el objeto que se reciba como parámetro en la función "my_extender()", de
 * ... manera que se le adicionen dos métodos "login()" y "logout()", y después de extendido
 * ... el objeto, lo debemos retornar para poderlo mostrar en la consola posteriormente, y
 * ... adicionalmente ejecutar también el método "login()" adicionado al objeto.
 *
 * => El resultado de la ejecución en la consola debería verse algo como:
 * => {nombre: 'MoonDoDev', login: f, logout: f}
 * => Iniciando sesión MoonDoDev
 *
 * Esta sería la primera opción para resolver el ejercicio
 */
const my_obj = { nombre: 'MoonDoDev' };

function my_extender( usuario ) {
	usuario.login = () => {
		console.log( `Iniciando sesión ${usuario.nombre}` );
	};

	usuario.logout = () => {
		console.log( `Cerrando sesión ${usuario.nombre}` );
	};

	return usuario;
}

const my_usuario = my_extender( my_obj );

console.log( my_usuario );
my_usuario.login();

/**
 * Esta sería la segunda opción que plantea Nicolas Schurmann
 */
const hm_obj = { nombre: 'Hola Mundo' };

function hm_extender( usuario ) {
	const metodos = {
		login() {
			console.log( 'Iniciando sesión', usuario.nombre );
		},
		logout() {
			console.log( 'Cerrando sesión', usuario.nombre );
		},
	};

	return Object.assign( usuario, metodos );
}

const hm_usuario = my_extender( hm_obj );

console.log( hm_usuario );
hm_usuario.login();
