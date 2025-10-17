function Usuario(nombre, apellido, fechaNacimiento, direccion, edad, paisNacimiento, subscripcionActiva)
{
    this.Nombre = nombre;
    this.Apellido = apellido;
    this.FechaNacimiento = fechaNacimiento;
    this.Direccion = direccion;
    this.Edad = edad;
    this.PaisNacimiento = paisNacimiento;
    this.SubscripcionActive = subscripcionActiva;
}

let usuario1 = new Usuario("Chanchito", "Feliz", new Date(1992, 3, 10), "Av. Siempre Viva 742", 31, "México", true);
let usuario2 = new Usuario("Chanchito", "Triste", new Date(1985, 5, 25), "Calle Luna 123", 38, "España", false);
let usuario3 = new Usuario("Felipe", "Schurmann", new Date(2000, 8, 3), "Boulevard del Sol 456", 23, "Argentina", true);

console.log(usuario1, usuario2, usuario3);
