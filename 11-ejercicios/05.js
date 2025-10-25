/**
 * En este ejercicio debemos implementar la función "ordenar()", para que reciba un texto y una función.
 * La función "ordenar", debe separar el texto por letras (ignorando los espacios), y ordenarlas
 * ... alfabeticamente, para pasarlas como parámetro a la función que nos suminitren, en este caso es
 * ... una "console.log()". El resultado debería ser algo como: "adhlmnoou".
 * => Otra opción para implementarlo, sería eliminando el método "toLowerCase()", y hacer el llamado del
 * ... método "sort()" con la implementación ya conocida para ordenar e ignorar los espacios.
 */
function ordenar( texto, fn ) {
	let resultado = texto
		.toLowerCase()
		.split( '' )
		.filter( ( x ) => x !== ' ' )
		.sort()
		.join( '' );

	fn( resultado );
}

ordenar( 'Hola mundo', console.log );
