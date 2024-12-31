let user = {
    id: 1,
    name: "Chanchito feliz",
    age: 25,
};

for(prop in user){
    console.log(prop, user[prop]);
}

let animales = ["Chanchito", "Dragón", "Perrito"];

for(let indice in animales){
    console.log(indice, animales[indice]);
}
