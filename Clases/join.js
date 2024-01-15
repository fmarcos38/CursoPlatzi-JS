//metodo join une los elementos de un array en un string
//se le puede pasar un separador
//si no se le pasa nada, por defecto es una coma
//devuelve un string

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'];
console.log(meses.join());

//para solo string
const parte1 = 'Hola';
const parte2 = 'Mundo';
const oracion = [parte1, parte2];
console.log(oracion.join(' '));

