const usuarios = [
    { edad: 17, nombre: "Nico" },
    { edad: 13, nombre: "Chanchito" },
    { edad: 25, nombre: "Felipe" },
    { edad: 32, nombre: "Fernanda" },
];

// Para filtrar un array, debemos usar el método "filter()" pasándole una 
// ... "arrow function" que usaremos para indicar la condición.
const mayores = usuarios.filter(u => u.edad > 17);
console.log('Mayores de edad', mayores);

const menores = usuarios.filter(u => u.edad < 18);
console.log('Menores de edad', menores);
