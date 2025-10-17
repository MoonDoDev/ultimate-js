let arr1 = [1, 2, { name: "Chanchito" }];
let arr2 = [3, 4];

// Concatena/Combina los dos arrays, pero no modifica ninguno de los 
// ... dos, por lo que nos retorna un tercer array con el resultado.
let combinados = arr1.concat(arr2);
// console.log(combinados, arr1, arr2)

// Retorna un array desde el indice inicial, hasta el indice final indicados.  
// let divididos = combinados.slice(1, 3);

// Retorna un array desde el indice inicial indicado, hasta el final del array
// let divididos = combinados.slice(1);

// Retorna una copia del array
let divididos = combinados.slice();

console.log(combinados, divididos);

// Con la siguiente modificación nos daremos cuenta que la copia que se hace es por 
// ... referencia, es decir, qu esi se modifica "combinados", se modifica tambien "divididos"
combinados[2].name = "Feliz";

console.log(combinados, divididos);
console.log(arr1, arr2);
