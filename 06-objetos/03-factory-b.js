
function crearUsuario(name, email)
{
    return {
        email,
        name,
        active: true,
        restorePassword: function ()
        {
            console.log('Restoring password ...');
        },
    };
}

let user1 = crearUsuario('Nicolas', 'nico@holamundo.io');
let user2 = crearUsuario('Chanchito', 'chanchito@holamundo.io');

console.log(user1, user2);

