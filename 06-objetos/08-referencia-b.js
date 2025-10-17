// Los valores primitivos se copian
function suma_primitivo(n)
{
    n++;
}

let a = 1;
// Aunque pasamos el valor de 'a' al parametro 'n' son dos variables diferentes (porque el valor de 'a' se copia a 'n')
suma_primitivo(a);
console.log(a);

// Los objetos se referencian (arrays, objetos, funciones)
function suma_objeto(n)
{
    n.prop++;
}

let obj = { prop: 1 };
// El valor del parametro 'n' toma la referencia (dirección en memoria) de 'obj'
suma_objeto(obj);
console.log(obj);