function Evento(nombre, duracion, boletosDisponibles)
{
    this.Nombre = nombre;
    this.Duracion = duracion;
    this.BoletosDisponibles = boletosDisponibles;

    this.MostrarInformacion = function ()
    {
        console.log(`Evento: ${this.Nombre}`);
        console.log(`Duración: ${this.Duracion}`);
        console.log(`Boletas disponibles: ${this.BoletosDisponibles}`);
    }

    this.ComprarBoletos = function (numeroBoletos)
    {
        if (this.BoletosDisponibles === 0)
        {
            console.log('Ya no hay boletos disponibles');
        }
        else if (numeroBoletos > this.BoletosDisponibles)
        {
            console.log('No hay suficiente cantidad de boletas disponibles');
        }
        else if (numeroBoletos > 5)
        {
            console.log('Solo se permite 5 boletas por compra');
        }
        else
        {
            this.BoletosDisponibles -= numeroBoletos;
        }
    }

    this.CancelarBoletos = function (numeroBoletos)
    {
        if (numeroBoletos > 0)
        {
            this.BoletosDisponibles += numeroBoletos;
        }
    }
}

let evento = new Evento('Concierto Joe Satriani', '2 días', 50);
evento.MostrarInformacion();
evento.ComprarBoletos(3);
evento.MostrarInformacion();
evento.ComprarBoletos(6);
evento.CancelarBoletos(2);
evento.MostrarInformacion();