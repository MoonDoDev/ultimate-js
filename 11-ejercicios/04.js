/**
 * Para este ejercicio vamos a crear una función "suma()" que nos reciba como parámetro una
 * ... función y una serie de números, los debemos sumar y retornar como resultado de la
 * ... función. La función o arrow function, deberá imprimir dicho resultado.
 *
 * => El resultado en consola deberá ser mas o menos esto:
 * => 10
 */
function suma( fn, ...rest ) {
	const resultado = rest.reduce( ( acc, el ) => acc + el );
	fn( resultado );
}

suma(
	( resultado ) => {
		console.log( resultado );
	},
	1,
	2,
	3,
	4
);
