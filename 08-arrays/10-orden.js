// let numeros = [3, 20, 100, 5];

// Para ordenar nuestro array, utilizamos "sort()"
// numeros.sort();

// Pero si queremos invertir el rodenamiento, podemos utilizar "reverse()"
// numeros.reverse();
// console.log(numeros);

// Podemos hacer lo mismo con "strings"
// let letras = ["z", "a", "d"];

// letras.sort();
// console.log(letras);

// Pero que pasaría si entre los "strings" tenemos caracteres en mayúsculas?
// => No quedaría bien ordenado porque en la tabla ASCII las mayúsculas tiene
// ... menor valor que las minúsculas, por lo tanto quedarían al inicio del array
// let conMayusculas = ["Z", "a", "d"];

// Para evitar el inconveniente anterior o para simplemente crear nuestra regla
// ... personalizada de ordenamiento, pordemos usar una "arrow function" que
// ... retorne (-1, 1, o 0), de la siguiente manera:
// conMayusculas.sort((a, b) => {
//     /**
//      * a antes b => -1
//      * b antes a => 1
//      * si son iguales 0
//      */

//     let alower = a.toLowerCase();
//     let blower = b.toLowerCase();

//     if (alower < blower) {
//         return -1;
//     }

//     if (alower > blower) {
//         return 1;
//     }

//     return 0;
// });

// console.log(conMayusculas);

// Podemos hacer lo mismo con objetos para ordenarlos (usando una "arrow function")
let usuarios = [
	{ edad: 15, nombre: 'Felipe' },
	{ edad: 25, nombre: 'Nicolas' },
	{ edad: 13, nombre: 'Poli' },
];

usuarios.sort( ( a, b ) => {
	if ( a.edad < b.edad ) return -1;
	if ( a.edad > b.edad ) return 1;
	return 0;
} );

console.log( usuarios );
