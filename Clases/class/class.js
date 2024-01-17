class Persona{
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
    //metodo
    nombreCompleto(){
        return this.nombre + ' ' + this.apellido;
    }
}

//creamos un objeto Persona
const persona1 = new Persona('Juan', 'Perez',);
console.log(persona1);