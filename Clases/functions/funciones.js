//puedo PASAR funciones como ARGUMENTO
//esto se llama CALLBACK
function a() {}
function b(a) {} //a es un callback

//puedo RETORNAR funciones
function c() {
    return function d() {};
}

//puedo ASIGNAR funciones a una VARIABLE
var e = function () {}; //funcion anonima

//las funciones pueden tener PROPIEDADES y METODOS
function d () {}
const objeto = {};
d.call(objeto); //llama a la funcion d con el objeto como contexto

//anidar funciones
function a() {
    function b() {
        function c() {
            //codigo
        }
    }
}

//funciones en objetos
const obj = {
    name: 'pepe',
    saludar: function() {
        console.log('hola');
    }
}
obj.saludar();

//funciones puras
//una funcion es pura si: 
//1. no modifica el estado de la aplicacion
//2. no tiene efectos secundarios (ejem: modif variables, modif parametros, solicitudes http, imprimir por pantalla)
//3. no depende de nada fuera de la funcion
//4. siempre retorna el mismo valor para los mismos argumentos

//ejem de funcion pura
function suma(a, b) {
    return a + b;
}

//ejem de funcion impura
function suma(a, b) {
    console.log(a + b);
}


//identificador THIS
//creo un obj con una funcion y atributos
const obj2 = {
    name: 'pepe',
    saludar: function() {
        console.log('hola mi nombre es: ' + this.name);
    }
}
obj2.saludar(); //hola mi nombre es pepe

/*-------------------forma de generar un contexto-----------------*/
/*
    apply() es una función en JavaScript que se utiliza para llamar a otra función con un valor específico 
    para this y un array (o un objeto similar a un array) de argumentos.
*/
console.log("------------------apply()------------------");
//creo variables para pasar como parametros
const owner = 'John';
const address = '123 Main Street';
//creo array de parametros necesarios para la funcion
const params = [owner, address];
//creo funcion saludo perro
function dogGreeting(owner, address) {
    console.log(`Hola, my name is ${this.name} and I live with ${owner} on ${address}`);
}
//creo el objeto perro
const dog = {
    name: 'Spot'
}
//llamo a la funcion saludo perro con el objeto perro y los parametros
dogGreeting.apply(dog, params);
/*
    call() es un método que se utiliza para invocar (llamar) a otra función con un valor específico para this 
    (el contexto de ejecución) y con argumentos proporcionados de forma individual.
*/
console.log("------------------call()------------------");
dogGreeting.call(dog, owner, address);
/*
    bind() crea una nueva función que, cuando es llamada, asigna a su operador this el valor entregado, 
    con una secuencia determinada de argumentos precediendo a cualquiera entregados cuando la función es llamada.
*/
console.log("------------------bind()------------------");
const dogGreeting2 = dogGreeting.bind(dog, owner, address);
console.log(dogGreeting2);
dogGreeting2();