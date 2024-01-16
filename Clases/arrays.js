const arr = [1, 2, 3, 4, 5];

//compruebo si es un array
console.log(Array.isArray(arr)); //true

//sumo los elemntos del array
let suma = 0;
arr.forEach((item) => {
    suma += item;
});
console.log(suma); //15

//sumo los elemntos del array con reduce
const suma2 = arr.reduce((acc, item) => acc + item, 0); //0 es el valor inicial de acc

//push y pop
//push agrega un elemento al final del array
arr.push(6);
//pop elimina el ultimo elemento del array
arr.pop();

//shift y unshift
//shift elimina el primer elemento del array
arr.shift();
//unshift agrega un elemento al principio del array
arr.unshift(1);

//map
//map crea un nuevo array con los resultados de la funcion aplicada a cada elemento del array
console.log("------------MAP---------------")
const arrMap = arr.map((item) => item * 2);
console.log(arrMap); //[2, 4, 6, 8, 10]

//filter
//filter crea un nuevo array con los elementos que cumplan la condicion
console.log("------------FILTER---------------")
const arrFilter = arr.filter((item) => item > 3);
console.log(arrFilter); //[4, 5]

//find
//find devuelve el primer elemento que cumpla la condicion
console.log("------------FIND---------------")
const arrFind = arr.find((item) => item > 3);
console.log(arrFind); //4

//findIndex
//findIndex devuelve el indice del primer elemento que cumpla la condicion
console.log("------------FINDINDEX---------------")
const arrFindIndex = arr.findIndex((item) => item > 3);
console.log(arrFindIndex); //3

//includes
//includes devuelve true si el elemento esta en el array
console.log("------------INCLUDES---------------")
const arrIncludes = arr.includes(3);
console.log(arrIncludes); //true

//indexOf
//indexOf devuelve el indice del elemento en el array
console.log("------------INDEXOF---------------")
const arrIndexOf = arr.indexOf(3);
console.log(arrIndexOf); //2


//splice
//splice elimina elementos del array y los reemplaza por otros
//splice(posicion, cantidad de elementos a eliminar, elementos a agregar)
console.log("------------SPLICE---------------")
arr.splice(2, 2, 10); //elimina el 3er y 4to elemento y agrega el 10 en su lugar (lo mismo para strings)
console.log(arr); //[1, 2, 10, 5, 6]

//slice
//slice copia un array
console.log("------------SLICE---------------")
const arr2 = arr.slice();
console.log("arr2: ",arr2); //[1, 2, 10, 5, 6]

//sort
//sort ordena un array
console.log("------------SORT---------------")
const unsortedNumbers = [1, 3, 2, 5, 4];
const palabrasDesordenadas = ['z', 'a', 'c', 'b'];
console.log("desordenado:",unsortedNumbers);
console.log("desordenado:",palabrasDesordenadas); 
const sortNumbers = unsortedNumbers.sort();
const sortPalabras = palabrasDesordenadas.sort();
console.log("ordenados:",sortNumbers); 
console.log("ordenados:",sortPalabras); 

//fill
//fill rellena un array con un valor
console.log("------------FILL---------------")
const arr3 = [1, 2, 3, 4, 5];
arr3.fill(0, 2, 4); //rellena con 0 desde la posicion 2 hasta la 4
console.log(arr3); //[1, 2, 0, 0, 5]


//VER metodos para arrays en: https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array