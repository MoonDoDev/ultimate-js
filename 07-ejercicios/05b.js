let objeto = {
    id: 1,
    name: false,
    login: function () { },
    logout: function () { }
}

const propiedad = 'name';

function tienePropiedad(obj, propiedad)
{
    let props = Object.keys(obj);

    for (let prop of props)
    {
        if (prop == propiedad)
            return true;
    }

    return false;
}

console.log(tienePropiedad(objeto, propiedad));