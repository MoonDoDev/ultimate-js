// Las funciones en JavaScript también son Objetos (de primera clase), y como tal, pueden 
// ser asignadas o pasadas como parámetros a métodos, tambien tienen propiedades.
function Usuario(nombre)
{
    this.nombre = nombre;
}

console.log("Nombre de la función:", Usuario.name);
console.log("Cantidad de parámetros de la función:", Usuario.length);

const Usr = Usuario;
let user = new Usr('Nicolas');

console.log(user);

// Usamosla función como parámetro de otra función
function of(Fn, arg)
{
    return new Fn(arg);
}

let user1 = of(Usuario, 'Chanchito');
console.log(user1);

// Tambien podemos retornar una función
function Returned()
{
    return function ()
    {
        console.log('Hola mundo');
    }
}

let saludo = Returned();
saludo();