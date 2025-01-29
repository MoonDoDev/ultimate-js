const nombre = 'Nicolas';
const apellido = 'Schurmann';
const nombreCompleto = nombre + apellido;
function plantilla(nombre){ 
    return `Hola ${nombre}!

Bienvenidos a "ultimate javascript" :)

Cariños Nico.
`;
};

console.log(plantilla('Chanchito feliz'));