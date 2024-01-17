//funcion constructora
function Persona(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
    //metodo
    this.nombreCompleto = function () {
        return this.nombre + ' ' + this.apellido;
    }
}

//creo un metodo para todos los objetos de tipo Persona (en teoría lo mismo para propiedades)
Persona.prototype.saludar = function () {
    return `Hola ${this.nombre} ${this.apellido}`;
}

//creamos un objeto Persona
const persona1 = new Persona('Juan', 'Perez',);
//si quiero agregar una propiedad al objeto (solo a este)
persona1.tel = '123456789';
console.log(persona1);
console.log(persona1.saludar());


//creamos un segundo objeto Persona
const persona2 = new Persona('Carlos', 'Lara', '321654');
console.log(persona2);
console.log(persona2.nombreCompleto());

