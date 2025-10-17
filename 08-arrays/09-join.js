// Tomamos un "string[]" y lo concatenamos con "join()", indicándole un separador, para finalmente formar un "string"
let arr1 = ['Nicolas', 'Chanchito', 'Felipe'];
let mensaje = arr1.join( ', ' );
console.log( mensaje );

// Tomamos un literal de "string" y lo dividimos con "split()", partiendo de su separador para formar un "string[]"
let saludo = 'Hola mundo! desde NZ';
let dividido = saludo.split( ' ' );
console.log( dividido.join( '_' ) );
