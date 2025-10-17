// const numeros = [1, 2, 3, 4];

// Sumamos cada uno de los elementos del array, sumando el valor en la variable "acc" y el valor de "el".
// En la primera iteración la variable "acc" vale 0, porque así se lo estamos indicando con el último
// ... parámetro de la función y el valor de "el" arrancaría con 1, el cual es el primer valor de nuestro
// ... array. Al final de las iteraciones, el método nos retorna la suma de cada uno de sus elementos.
// const suma = numeros.reduce((acc, el) => {
//     return acc + el;
// }, 0);

// console.log(suma);

// Para cuando nos encontremos con un array con arrays aninados, y necesitemos
// ... todos los elementos individuales, lo hacemos de la siguiente manera:
// const anidado = [[1, 2], 3, [4, 5]]; // Este array debería quedar así: [1, 2, 3, 4, 5]

// const plano = anidado
//     .reduce((acc, el) => acc.concat(el), []);

// console.log(plano);

// El siguiente proceso sirve para cuando tenemos que buscar elementos en un array 
// ... muy grande (con 5000, 10000, 100000, ... elementos).
const usuarios = [
    { edad: 17, nombre: "Nico" },
    { edad: 13, nombre: "Chanchito" },
    { edad: 25, nombre: "Felipe" },
    { edad: 32, nombre: "Fernanda" },
];

// Creamos un nuevo array, partiendo de los datos del array original, y agregando una propiedad para 
// ... facilitar las búsquedas, que para este caso, estaríamos utilizando el "nombre" del elemento como 
// ... propiedad, y como valor de dicha propiedad, el objeto/elemento completo, es decir "el".
const indexados = usuarios.reduce((acc, el) => ({
    // Con "...acc" estamos acumulando en cada una de las iteraciones, arrando con el objeto literal
    // ... "{}"" que definimos como segundo parámetro de la función "reduce()"
    ...acc,
    [el.nombre]: el,
}), {});

console.log(indexados);

// Ya con el array modificado, podemos realizar búsquedas basadas en el nombre
console.log(indexados["Felipe"]);