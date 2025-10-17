// Esta sería la primera forma, no siendo esta la más recomendable
// let = [1, 2];
// arr = [];

// Aunque un array es un objeto, al hacer lo siguiente, el valor de "arr2" se seguiría preservando
// let arr = [1, 2];
// let arr2 = arr;
// arr = [];
// console.log(arr2, arr);

// Esta segunda forma es simplemente asignando el valor 0 a la propiedad "length" del array
let arr = [1, 2];
arr.length = 0;
console.log( arr );

// La tercera manera de vaciar un array, sería haciendo un "splice" desde la posición 0, hasta la longitud máxima del array "length"
// let arr = [1, 2];
// arr.splice(0, arr.length);
// console.log(arr);

// La cuarta manera, y la menos recomendada por su costo en tiempo, sería con un while, recorriendo sus elementos y haciendo un "pop"
// let arr = [1, 2];
// while (arr.length > 0) {
//     arr.pop();
// }
