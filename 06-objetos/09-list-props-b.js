const punto =
{
    x: 10,
    y: 15,
    dibujar: function () // Esta función tambien la puedes declarar asi: dibujar()
    {
        console.log('Dibujando...');
    }
}

// delete punto.dibujar;

if ('dibujar' in punto)
{
    punto.dibujar();
}

// Las dos siguientes formas son maneras de consultar las propiedades de manera legada
for (let key of Object.keys(punto))
{
    console.log(key, punto[key]);
}

for (let entry of Object.entries(punto))
{
    console.log(entry);
}

// Esta sería la manera de hacerlo en la actualidad
for (let llave in punto)
{
    console.log(llave, punto[llave]);
}

