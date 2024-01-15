console.log('Hola Mundo desde arch externo');

console.log('---------------------------');

let num1 = 5;
num1 = num1 + 10;
console.log(num1);

console.log('---------------------------');

/* ejem de creo un obj, creo una funcion para camb una prop del objeto */
//creo objeto persona
let persona = {nombre: 'pepe', edad: 20};
console.log(persona);
//creo funcion para cambiar la edad
function cambiarEdad(objeto){
    objeto.edad = 30;
}
//llamo a la funcion y le paso el objeto
cambiarEdad(persona);
console.log(persona);

console.log('---------------------------');
