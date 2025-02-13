const usuarios = [
    { edad: 17, nombre: "Nico" },
    { edad: 13, nombre: "Chanchito" },
    { edad: 25, nombre: "Felipe" },
    { edad: 32, nombre: "Fernanda" },
];

const lista = usuarios
    .filter(u => u.edad > 17)
    .map(u => `<li>${u.nombre}</li>`);

const html = `<ol>${lista.join(" ")}</ol>`;

console.log(html);

// const mapped = usuarios.map(u => ({
//     ...u,
//     mayor: u.edad > 17,
// }));

// console.log(mapped);