const usuarios = [
    { edad: 17, nombre: "Nico", plan: "premium" },
    { edad: 13, nombre: "Chanchito", plan: "premium" },
    { edad: 32, nombre: "Fernanda", plan: "free" },
    { edad: 25, nombre: "Felipe", plan: "gold" },
];

function cuantosSuscripcion(usrs) {
    return usrs.reduce((acc, el) => el.plan != "free" ? acc + 1 : acc, 0);
}

function cuantosMayores(usrs) {
    return usrs.reduce((acc, el) => el.edad > 17 ? acc + 1 : acc, 0);
}

console.log("Usuarios con suscripción de pago: ", cuantosSuscripcion(usuarios));
console.log("Usuarios mayores de edad: ", cuantosMayores(usuarios));
