let saludo = "Hola Mundo!";
let despedida = new String("Chao Mundo :(");

console.log(typeof saludo);
console.log(typeof despedida);

console.log(saludo.length);
console.log(saludo.indexOf("aoeu"));
console.log(saludo.indexOf("Mu"));
console.log(saludo.includes(" Mundo"));
let nuevoSaludo = saludo.replace("Mundo", "Nicolas");
console.log(nuevoSaludo, saludo);
console.log(saludo.toLowerCase());
console.log(saludo.toUpperCase());

console.log(saludo.substring(0, 4));
console.log(saludo.substr(2, 4));

const espacios = "   Hola   Mundo!  ";
console.log(espacios.trim());
console.log(espacios.trimStart());
console.log(espacios.trimEnd());