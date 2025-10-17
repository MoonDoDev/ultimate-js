// Definición del Juego
function JuegoCartas(nombre, puntosVida, tipo, ataques, debilidades)
{
    this.nombre = nombre;
    this.puntosVida = puntosVida;
    this.tipo = tipo;
    this.ataques = ataques;
    this.energia = 0;
    this.debilidades = debilidades;

    this.atacar = function (objetivo, indiceAtaque)
    {
        if (indiceAtaque >= this.ataques.length)
        {
            console.log(`${this.nombre} no posee ese ataque`);
            return;
        }

        let ataque = this.ataques[indiceAtaque];

        if (this.energia >= ataque.energiaNecesaria)
        {
            console.log(`${this.nombre} está atacando con ${ataque.nombre} causando ${ataque.puntos} de daño.`);
            objetivo.recibirAtaque(ataque.puntos);
            this.energia -= ataque.energiaNecesaria;
        }
        else
        {
            console.log(`${this.nombre} no tiene suficiente energía para atacar.`);
        }
    };

    this.recibirAtaque = function (puntosAtaque)
    {
        if (this.puntosVida <= 0)
        {
            console.log(`${this.nombre} ha sido derrotada, no tiene puntos de vida.`);
            return;
        }

        if (this.puntosVida < puntosAtaque)
        {
            console.log(`${this.nombre} no tiene suficiente puntos de vida, no se puede realizar el ataque.`);
            return;
        }

        this.puntosVida -= puntosAtaque;
        console.log(`${this.nombre} ha recibido ${puntosAtaque} de daño, y tiene ${this.puntosVida} puntos de vida restante.`);

        if (this.puntosVida <= 0)
        {
            console.log(`${this.nombre} ha sido derrotada.`);
        }
    };

    this.subirEnergia = function (energia)
    {
        this.energia += energia;
        console.log(`${this.nombre} ha ganado ${energia} de energía, y en total tienes ${this.energia}`);
    };
}

// Definición de las Cartas Jugadoras
const carta1 = new JuegoCartas(
    'Dragón de Fuego', 100, 'Fuego', [
    { nombre: 'Llamarada', puntos: 30, energiaNecesaria: 2 },
    { nombre: 'Golpe Ígneo', puntos: 50, energiaNecesaria: 3 }],
    ['Agua']);

const carta2 = new JuegoCartas('Serpiente Acuatica', 120, 'Agua', [
    { nombre: 'Tsunami', puntos: 40, energiaNecesaria: 2 }],
    ['Electrico']);

// Ahora a Jugar
carta1.subirEnergia(2);
carta1.atacar(carta2, 0);
carta2.subirEnergia(3);
carta2.atacar(carta1, 0);
carta1.atacar(carta2, 1);
carta1.subirEnergia(3);
carta1.atacar(carta2, 1);
carta1.subirEnergia(3);
carta1.atacar(carta2, 1);
carta1.subirEnergia(2);
carta1.atacar(carta2, 0);