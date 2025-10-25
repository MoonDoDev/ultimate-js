/**
 * Debemos hacer el llamado a una función constructora, y allí extender con "call"
 * ... el objeto que se reciba como parámetro, de manera que se le adicionen 2 métodos:
 * ... login() y logout(), y que éstos métodos hagan el llamado a "consolo.log()"
 * ... imprimiendo la propiedad "nombre" el objeto recibido.
 *
 * => El resultado en la consola debería ser algo como:
 * => {nombre: 'Nicolas', login: f, logout: f}
 * => Iniciando sesión Nicolas
 * => Cerrando sesión Nicolas
 */
const obj = { nombre: 'Nicolas' };

function Extender() {
	this.login = () => {
		console.log( `Iniciando sesión ${this.nombre}` );
	};

	this.logout = () => {
		console.log( `Cerrando sesión ${this.nombre}` );
	};
}

Extender.call( obj );

console.log( obj );
obj.login();
obj.logout();
