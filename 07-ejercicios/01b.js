function Usuario(nombre)
{
    this.id = Math.random();
    this.nombre = nombre;
}

const user1 = new Usuario('Felipe');
const user2 = new Usuario('Chanchito');

console.log(user1);
console.log(user2);