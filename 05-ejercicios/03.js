function getbyIdx(arr, idx){
    if (idx < 0 || arr.length <= idx){
        return "Elemento no existe";
    }

    return arr[idx];
}

let resultado = getbyIdx([1,2], 1);
console.log(resultado);

let resultado2 = getbyIdx([1,2], 2);
console.log(resultado2);

let resultado3 = getbyIdx([1,2], -1);
console.log(resultado3);

let resultado4 = getbyIdx([1,2], 0);
console.log(resultado4);
