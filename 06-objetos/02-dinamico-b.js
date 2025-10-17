// Cuando creamos un objeto como 'const', esto significa que no puedes reasignar el objecto 'user' 
// propiamente, pero si puedes modificar el objecto que contiene, adicionándole o eliminándole 
// propiedades, de la siguientye manera:
const user = { id: 1 };

user.name = 'Nicolas';
user.guardar = function ()
{
    console.log('Guardando', user.name);
}

user.guardar();

delete user.name;
delete user.guardar;

console.log('Objecto const', user);

// Cuando creamos un objeto con 'Object.freeze()', no podemos reasignar el objecto 'user1', 
// ni adicionar o eliminar propiedades.
const user1 = Object.freeze({ id: 1 });
user1.name = 'Nico';
user1.id = 2;

delete user1.id;

console.log('Objecto freeze', user1);

// Cuando creamos un objecto con 'Object.seal()', no podemos reasignar el objecto 'user2', 
// no podemos adicionar ni eliminar propiedades, pero si le podemos modificar las existentes.
const user2 = Object.seal({ id: 1 });
user2.name = 'Nico';
user2.id = 3;

console.log('Objecto seal', user2);
