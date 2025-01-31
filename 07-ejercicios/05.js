let objeto = {
    id: 1,
    name: false,
    login: function(){},
    logout: function(){},
};

let propiedades = "names";

function tieneProp(obj, propiedad){
    let props = Object.keys(obj);

    for(let prop of props){
        if(propiedad === prop){
            return true;
        };
    };

    return false;
};

console.log(tieneProp(objeto, propiedades));