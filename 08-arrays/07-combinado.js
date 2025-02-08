let arr1 = [1, 2, { name: "Chanchito" }];
let arr2 = [3, 4];

let combinados = arr1.concat(arr2);
// console.log(combinados, arr1, arr2)

// let divididos = combinados.slice(1, 3);
// let divididos = combinados.slice(1);
let divididos = combinados.slice();

console.log(combinados, divididos);

combinados[2].name = "Feliz";
console.log(combinados, divididos);
console.log(arr1);
