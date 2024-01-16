//metodo join une los elementos de un array en un string
//se le puede pasar un separador
//si no se le pasa nada, por defecto es una coma
//devuelve un string
console.log("---------------------------");
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'];
console.log(meses.join(' - '));


//para solo string
console.log("---------------------------");
const parte1 = 'Hola';
const parte2 = 'Mundo';
const oracion = [parte1, parte2];
console.log(oracion.join(' '));

//formr de concatenar con CONCAT
console.log("---------------------------");
const palabra1 = 'pepe';
const palabra2 = 'lopez';
const palabra3 = 'crack';
const result = palabra1.concat(' ', palabra2, ' ', palabra3, '!!');
console.log(result);

