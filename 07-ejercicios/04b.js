let objeto = {
    id: 1,
    name: 'Chanchito',
    login: function () { },
    logout: function () { }
}

function cualesSonMetodos(obj)
{
    for (let prop in obj)
    {
        if ((typeof obj[prop]) === 'function')
            console.log(prop);
    }
}

cualesSonMetodos(objeto);