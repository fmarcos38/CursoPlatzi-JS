//creo un objeto con los tipos de suscripciones y sus precios
const tiposDeSuscripciones = {
    basica: 100,
    premium: 500,
    vip: 1000
};

//variable q guardará el tipo de suscripcion
let tipoDeSuscripcion = 'vip'; //se le pedirá al usuario que ingrese el tipo de suscripcion

//funcion que devuelve el precio de la suscripcion
function precioDeLaSuscripcion(tipoDeSuscripcion) {
    if(tiposDeSuscripciones[tipoDeSuscripcion]){
        console.log(tiposDeSuscripciones[tipoDeSuscripcion]);
    }else{
        console.log('Tipo de suscripcion invalido');
    }    
}
precioDeLaSuscripcion(tipoDeSuscripcion);

/*
    en ves de hacer un if para cada tipo de suscripcion, usamos un objeto
*/