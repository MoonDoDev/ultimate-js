function Usuario(name)
{
    return { id: Math.random(), name: name };
}

const user1 = Usuario('Felipe');
const user2 = Usuario('Chanchito');

console.log(user1);
console.log(user2);

