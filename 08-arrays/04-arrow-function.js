// function hola() {
//     return 'Hola Mundo';
// }

const hola = mensaje => `Hola ${mensaje}`;

const hola2 = (mensaje) => {
    return `Hola ${mensaje}`;
}

const resultado1 = hola("Chanchito Feliz");
console.log(resultado1);

const resultado2 = hola2("Nicolas");
console.log(resultado2);