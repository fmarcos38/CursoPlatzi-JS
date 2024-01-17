//clase constructora PADRE
class Animal {
    constructor(nombre, tipo) {
        this.nombre = nombre;
        this.tipo = tipo;
    }
    emitirSonido() {
        console.log('sonido de animal');
    }
}

//clase constructora HIJA --> hereda de Animal
class Perro extends Animal {
    constructor(nombre, tipo, raza) {
        super(nombre, tipo); //llamamos al constructor de la clase padre con super y le pasamos los parametros
        this.raza = raza;
    }

    //reescribimos el metodo emitirSonido
    emitirSonido() {
        console.log('guau guau');
    }

    nombrePerro(){
        console.log(this.nombre);
    }
}

const perro1 = new Perro('firulais', 'perro', 'labrador');
console.log(perro1);
perro1.emitirSonido();
perro1.nombrePerro();

//para ver el prototype de la clase Animal o Perro
console.log(Animal.prototype);

//agrego un metodo al prototype de la clase Animal
Animal.prototype.saludar = function(){
    console.log('hola');
}

//agrego un metodo al prototype de la clase Perro
Perro.prototype.saludar = function(){
    console.log('hola perro');
}

