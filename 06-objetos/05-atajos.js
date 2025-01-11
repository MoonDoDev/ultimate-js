/**
 * new Array(); []
 * new String(); "" '' ``
 * new Number(); 12
 * new Boolean(); true false
 */

function Usuario(){
    this.name = "Chanchito feliz";
};

let usuario = new Usuario();
console.log(usuario.constructor);

const s1 = "1 + 1";
const s2 = new String("1 + 1");

console.log(s2.valueOf());