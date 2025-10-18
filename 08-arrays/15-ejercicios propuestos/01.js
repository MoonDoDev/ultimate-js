function calculeAverage( arrValues ) {
	const size = arrValues.length;
	if ( size === 0 ) return 0;

	return arrValues.reduce( ( total, value ) => total + value, 0 ) / size;
}

const values = [100, 200, 300, 400, 500];
console.log( 'El precio promedio es:', calculeAverage( values ) );
