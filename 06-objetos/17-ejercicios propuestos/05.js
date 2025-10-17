let libros = [
    { titulo: 'Libro A', autor: 'Autor A', categoria: 'Ficción' },
    { titulo: 'Libro B', autor: 'Autor B', publicacion: 2021, paginas: 300 },
    { titulo: 'Libro C', categoria: 'Historia', paginas: 150 },
];

function EstandarizarPropiedades(libro)
{
    const propiedades = ['titulo', 'autor', 'publicacion', 'categoria', 'paginas'];

    for (let i = 0; i < propiedades.length; i++)
    {
        const prop = propiedades[i];
        if (!(prop in libro))
            libro[prop] = null;
    }
}

for (let libro of libros)
{
    EstandarizarPropiedades(libro);
    console.log(libro);
}