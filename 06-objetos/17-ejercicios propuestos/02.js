function Usuario(nombre, apellido, fechaNacimiento, direccion, edad, paisNacimiento, subscripcionActiva)
{
    this.Nombre = nombre;
    this.Apellido = apellido;
    this.FechaNacimiento = fechaNacimiento;
    this.Direccion = direccion;
    this.Edad = edad;
    this.PaisNacimiento = paisNacimiento;
    this.SubscripcionActiva = subscripcionActiva;
}

let usuario = new Usuario("Chanchito", "Feliz", new Date(1992, 3, 10), "Av. Siempre Viva 742", 31, "México", false);

if ('SubscripcionActive' in usuario)
{
    usuario.SubscripcionActiva = !usuario.SubscripcionActiva;
}

if ('Direccion' in usuario)
{
    delete usuario.Direccion;
}

if ('Altura' in usuario)
{
    delete usuario.Altura;
}

console.log(usuario);
