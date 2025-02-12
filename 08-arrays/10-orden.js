// let numeros = [3, 20, 100, 5];

// numeros.sort();
// numeros.reverse();
// console.log(numeros);

// let letras = ["z", "a", "d"];

// letras.sort();
// console.log(letras);

// let conMayusculas = ["Z", "a", "d"];

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

let usuarios = [
    { edad: 15, nombre: "Felipe" },
    { edad: 25, nombre: "Nicolas" },
    { edad: 13, nombre: "Poli" },
];

usuarios.sort((a, b) => {
    if (a.edad < b.edad) return -1;

    if (a.edad > b.edad) return 1;

    return 0;
});

console.log(usuarios);