let ahora = new Date();
// console.log(ahora);
const fecha = new Date("December 11 1986 14:45 GMT-0300");
console.log(fecha);

const fecha2 = new Date(1986, 11, 25, 14, 15);
const fecha3 = new Date(1986, 11, 25, 14-3, 15);
console.log(fecha3);

console.log("dateString", fecha3.toDateString());
console.log("ISOString", fecha3.toISOString());
console.log("timeString", fecha3.toTimeString());

console.log(fecha3.getFullYear());
fecha3.setFullYear(1978);
console.log(fecha3);