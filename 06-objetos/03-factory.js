function crearUsuario(name, email){
    return {
        email : email,
        name : name,
        active: true,
        recuperarClave: function (){
            console.log('Recuperando clave...')
        }
    };
};

let user1 = crearUsuario("Nicolas", "nico@holamundo.io");
let user2 = crearUsuario("Felipe", "felipe@holamundo.io");

console.log(user1, user2);