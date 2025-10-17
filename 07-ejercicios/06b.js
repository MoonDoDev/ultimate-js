let obj1 = { id: 1, name: 'Chanchito' };

function crearCopia(obj)
{
    let copia = {};
    let props = Object.keys(obj);

    for (let prop of props)
    {
        copia[prop] = obj[prop];
    }

    return copia;
}

let obj2 = crearCopia(obj1);
console.log({ obj1, obj2 });
