//funcion externa q llamaré desde dentro del objeto
function saludoPersonalizado (name){
    console.log('hola');
} 
//funcion externa q llamaré desde dentro del objeto PERO con arrow function
const saludoPersonalizado2 = (name) => console.log('hola');

//funcion constructora de objeto
function Persona(name, age, saludar2 = saludoPersonalizado, saludar3 = saludoPersonalizado2) {
    this.name = name;
    this.age = age;
    //meetodo
    this.saludar = function() {
        console.log('👋 mi nombre es: ' + this.name);
    }
    //meetodo con arrow function
    this.desdpedida = () => console.log('adios', this.name);
    //meetodo con funcion externa como parametro
    this.saludar2 = saludar2;
    this.saludar3 = saludar3;
    
}
const p1 = new Persona('pepe', 20);
console.log(p1.name); 
p1.saludar(); 
p1.desdpedida();
p1.saludar2();
p1.saludar3();

/*------------------------------------------------------------------------------*/
//funcion constructora de objeto PERO con arrow function
const obj1 = (name, age) => ({
    name: name,
    age: age,
    saludar: function() {
        console.log('👋 mi nombre es: ' + this.name);
    },
    desdpedida: () => console.log('adios', this.name)
});

console.log(obj1('pepe', 20).name); //pepe