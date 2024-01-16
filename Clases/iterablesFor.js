const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//recorro el array con un for
arr.forEach((item) => {
    console.log(item);
})


//creo tablas de multiplicar
console.log("/*-----------------------------------------*/\n");

let cont = 1;
for(let i = 1; i <= 10; i++) {
    for(let j=1; j <= 10; j++) {
        console.log(i + ' x ' + j + ' = ' + i*j);
    }
    console.log("/*-----------------------------------------*/\n");
}


//for of (es para iterar sobre array o string)
console.log("/*-----------------------------------------*/\n");
for(item of arr) {
    console.log(item);
}

//for in (es para iterar sobre objetos osea sobre las propiedades del obj)
console.log("/*-----------------------------------------*/\n");
const obj = {
    name: 'pepe',
    age: 18,
}
//solo muestra las propiedades del objeto
for(item in obj) {
    console.log(item);
}
//muestro las propiedades y los valores del objeto
for(item in obj) {
    console.log(item + ': ' + obj[item]);
}

let edad = prompt('Ingrese su edad: ');

if(edad >= 40) {
    console.log('viejo choto');
}else{
    console.log('joven');
}

