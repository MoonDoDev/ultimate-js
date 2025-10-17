// Lo recomendable es que siempre que sea posible se creen los objectos 
// primitivos con el literal, es decir: [], "", '', 14, true, false.
let obj = {};
let obj2 = new Object();

/**
 * new Array(); => []
 * new String(); "" ''
 * new Number(); 14
 * new Boolean(); true false
 */

function Usuario()
{
    this.name = 'Chanchito feliz';
}

let user = new Usuario();
console.log(user.constructor);

const s1 = "1 + 1";
const s2 = new String("1 + 1");

console.log(s1);
console.log(s2);
console.log(s2.valueOf());
