let usuarios = [
    { id: 1, name: "Chanchito" },
    { id: 2, name: "Feliz" }
];

// Este método (indexOf()) no funciona con datos tipo Objeto (Referencia)
// const resultado = usuarios.indexOf({ id: 1, name: "Chanchito" });

// Buscamos objetos/referencia en un array, y nos retorna el elemento/objeto completo
// Debemos pasarle al método find(), una function (aquí estamos usando arrow function ó 
// ... también llamada "Predicate", que significa "Función que retorna TRUE o FALSE")
const resultado1 = usuarios.find(usuario =>
    usuario.name === "Chanchito");

console.log(resultado1);

// Buscamos objetos/referencia en un array, y nos retorna el indice/posición del elemento en el array
const resultado2 = usuarios.findIndex(usuario =>
    usuario.name === "Feliz");

console.log(resultado2);