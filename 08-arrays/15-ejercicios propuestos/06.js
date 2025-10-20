function crearEvento( nombre, duracion, boletosDisponibles ) {
	this.boletosDisponibles = boletosDisponibles;
	this.boletosRegistrados = [];

	this.mostrarInformacion = function () {
		console.log( `Boletos disponibles: ${this.boletosDisponibles.length}.` );
		console.log( `Boletos registrados: ${this.boletosRegistrados.length}.` );
	};

	this.registrarBoleto = function ( boleto ) {
		if ( this.boletosRegistrados.includes( boleto ) ) {
			console.log( `El boleto ${boleto}, ya se encuentra registrado.` );
			return;
		}

		if ( !this.boletosDisponibles.includes( boleto ) ) {
			console.log( `El boleto ${boleto} no es válido.` );
			return;
		}

		this.boletosRegistrados.push( boleto );
		this.boletosDisponibles = this.boletosDisponibles.filter( ( b ) => b !== boleto );
		console.log( `El boleto ${boleto} se ha registrado con éxito.` );
	};

	this.devolverBoleto = function ( boleto ) {
		if ( !this.boletosRegistrados.includes( boleto ) ) {
			console.log( `El boleto ${boleto} a devolver no es válido.` );
			return;
		}

		this.boletosDisponibles.push( boleto );
		this.boletosRegistrados = this.boletosRegistrados.filter( ( b ) => b !== boleto );
		console.log( `El boleto ${boleto} se ha devuelto con éxito.` );
	};
}

let evento = new crearEvento( 'Conciento de Paul McCartney', 3, [1, 2, 3, 4, 5] );

evento.mostrarInformacion();
evento.registrarBoleto( 2 );
evento.registrarBoleto( 3 );
evento.registrarBoleto( 2 );
evento.registrarBoleto( 6 );

evento.mostrarInformacion();
evento.devolverBoleto( 2 );

evento.mostrarInformacion();
evento.devolverBoleto( 6 );
