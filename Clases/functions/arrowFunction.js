//funcion tradicional
const greeting = function(name) {
    return `Hello ${name}`;
}

//arrow function
const greeting2 = (name) => {
    return `Hello ${name}`;
}

//arrow en una sola linea
const greeting3 = (name) => `Hello ${name}`; //si solo tiene un parametro, no hace falta ponerlo entre parentesis


//----------ejemplo de arrow function dentro de un objeto ( no se puede usar THIS )
const obj = {
    name: 'pepe',
    saludar: function() {
        console.log('hola mi nombre es: ' + this.name);
    },
    despedida: () => {
        console.log('adios', this.name); //this.name es undefined
    }
}
obj.saludar();
obj.despedida();