function Evento(nombre, duracion, boletosDisponibles)
{
    let _boletosDisponibles = boletosDisponibles;

    this.MostrarInformacion = function ()
    {
        console.log(`Evento: ${nombre}`);
        console.log(`Duración: ${duracion} horas`);
        console.log(`Boletas disponibles: ${_boletosDisponibles}`);
    }

    this.ComprarBoletos = function (cantidad)
    {
        if (cantidad > 5)
        {
            console.log('Solo se permite 5 boletas por compra');
            return;
        }

        if (cantidad <= _boletosDisponibles)
        {
            _boletosDisponibles -= cantidad;
            console.log(`Has comprado ${cantidad} boleto(s)`);
        }
        else
        {
            console.log('Lo sentimos, ya no hay boletos disponibles.');
        }
    }

    this.CancelarBoletos = function (cantidad)
    {
        if (cantidad > 0)
        {
            _boletosDisponibles += cantidad;
        }
    }
}

// Creamos el evento
let evento = new Evento('Concierto Joe Satriani', 2, 50);

// Mostramos la información del evento
evento.MostrarInformacion();

// Compramos 3 boletos
evento.ComprarBoletos(3);

// Mostramos nuevamente la información actualizada
evento.MostrarInformacion();

// Intentamos modificar la propiedad privada
evento._boletosDisponibles = 100;

// Cancelamos 1 boleto
evento.CancelarBoletos(1);

// Mostramos finalmente la información actualizada del evento
evento.MostrarInformacion();