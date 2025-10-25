/**
 * En este ejercicio vamos a crear una función callback, a la cual le vamos a
 * ... pasar una función y unos parametros, para que ejecute dicha función con
 * ... estos parámetros. La función que le pasemos debe ejecutar un "console.log()"
 * ... mostrando los parametros recibidos.
 *
 * => El resultado mostrado en consola, debería ser más o menos así:
 * => (4) [1, 2, 3, 4] => Primera forma
 * => 1, 2, 3, 4 => Segunda forma
 */
function callback( fn, ...rest ) {
	fn( ...rest );
}

/**
 * Primera forma para llamar el Callback.
 * Creando una función
 */
function log( ...args ) {
	console.log( args );
}

callback( log, 1, 2, 3, 4 );

/**
 * Segunda forma para llamar el Callback.
 * A través de una "Arrow Function"
 */
callback(
	( ...args ) => {
		console.log( ...args );
	},
	1,
	2,
	3,
	4
);
