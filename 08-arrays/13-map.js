const usuarios = [
    { edad: 17, nombre: "Nico" },
    { edad: 13, nombre: "Chanchito" },
    { edad: 25, nombre: "Felipe" },
    { edad: 32, nombre: "Fernanda" },
];

// Tomamos un array, lo filtramos y creamos otro array con el método "map()" 
// ... con sus elementos en un formato específico y personalizado.
const lista = usuarios
    .filter(u => u.edad > 17)
    .map(u => `<li>${u.nombre}</li>`);

console.log('Array con los mayores de edad en formato html (List Item):', lista);

// Con el array anteriormente creado en el formato deseado, 
// ... podríamos crear un "string" en formato "html".
const html = `<ol>${lista.join(" ")}</ol>`;
console.log('Lista ordenada html con los mayores de edad:', html);

// A continuación con el mismo método "map()", vamos a crear un array de objetos, 
// ... partiendo del objeto "usuarios" y adicionándole otra propiedad, que se
// ... llamará "mayor", en donde indicaremos si el usuario es mayor de edad o no.
const mapped = usuarios.map(u => ({
    ...u,
    mayor: u.edad > 17,
}));

console.log(mapped);