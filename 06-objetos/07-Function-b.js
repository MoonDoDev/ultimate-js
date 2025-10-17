function Punto(x, y)
{
    this.x = x;
    this.y = y;
    this.dibujar = function ()
    {
        console.log('Dibujando...');
    }
}

// Esta es la manera de extender objetos, ya sea llamando a .call() o .apply()
// En este caso el objeto 'punto' se le estará adicionando al objecto 'Punto'
let punto = { z: 7 };
// Punto.call(punto, 1, 2);
Punto.apply(punto, [1, 2]);
console.log(punto);

// El siguiente código no debería implementarse así, ya es estilo
// legado, pero es solo por información que se cita aquí
/*
const Point = new Function('x', 'y', `
    this.x = x;
    this.y = y;
    this.dibujar = function ()
    {
        console.log('Dibujando...');
    }
`);

const p = new Point(1, 2);
console.log(p);
*/