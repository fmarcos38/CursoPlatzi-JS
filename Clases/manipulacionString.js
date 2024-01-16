const stringPrimitivo = 'Hola Mundo'; //si lo deseo cambiar, se crear una nueva variable(por valor)
const stringObjeto = new String('Hola Mundo'); //si lo deseo cambiar, se modifica el mismo objeto(por referencia)

console.log(typeof stringPrimitivo);
console.log(typeof stringObjeto);

//ver METODOS de string
const str = "pepe crack";

console.log(str.length);
console.log(str.includes('pepe'));
console.log(str.startsWith('pepe'));
console.log(str.endsWith('pepe'));
console.log(str.indexOf('r'));
console.log(str.lastIndexOf('r'));
console.log(str.replace('pepe', 'pepito'));
console.log(str.slice(0, 4));
console.log(str.split(' '));
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.trim());
console.log(str.charAt(0));
console.log(str.charCodeAt(0));
