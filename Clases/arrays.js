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
//slice copia un array SINO se le pasa parametros, si se le pasa parametros devuelve un subarray
console.log("------------SLICE---------------")
const arr2 = arr.slice();
console.log("arr2: ",arr2); //[1, 2, 10, 5, 6]
//slice(posicion inicial, posicion final)
const arrSlice = arr.slice(1, 3); //copia desde la posicion 1 hasta la 3
console.log(arrSlice); //[2, 10]
//slice(posicion inicial, posicion final negativa)
const arrSlice2 = arr.slice(1, -1); //copia desde la posicion 1 hasta la ultima
console.log(arrSlice2); //[2, 10, 5]
//slice(posicion inicial negativa, posicion final)
const arrSlice3 = arr.slice(-3, 4); //copia desde la posicion 2 hasta la 4
console.log(arrSlice3); //[10, 5]

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

//concat
//concat concatena arrays
console.log("-----------------CONCAT---------------------")
const arr4 = [1, 2, 3, 4, 5];
const arr5 = [6, 7, 8, 9, 10];
const arr6 = arr4.concat(arr5);
console.log(arr6); //[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//concat para mas de 2 arrays
const arr9 = [11,12];
const arr10 = [13,14];
const arr11 = [15,16];
const arr12 = [17,18];
const concatenados = [].concat(arr9,arr10,arr11,arr12); //concatena todos los arrays
console.log(concatenados); //[11, 12, 13, 14, 15, 16, 17, 18]

//concat con sprit operator
const arr13 = [19,20];
const arr14 = [21,22];
const arr15 = [23,24];
const concatenados2 = [...arr13,...arr14,...arr15]; //concatena todos los arrays

//join
//join convierte un array a string
console.log("------------JOIN---------------")
const arr7 = [1, 2, 3, 4, 5];
const arrString = ["hola", "mundo"];
const arr8 = arr7.join();
const arrString2 = arrString.join(' '); //separador entre elementos
console.log(arr8); //1,2,3,4,5
console.log(arrString2); //hola mundo

//reverse
//reverse invierte el orden de los elementos del array
console.log("------------REVERSE---------------")
const arr16 = [1, 2, 3, 4, 5];
const arr17 = arr16.reverse();
console.log(arr17); //[5, 4, 3, 2, 1]

//toString
//toString convierte un array a string
console.log("------------TOSTRING---------------")
const arr18 = [1, 2, 3, 4, 5];
const arr19 = arr18.toString();
console.log(arr19); //1,2,3,4,5

//every
//every devuelve true si todos los elementos del array cumplen la condicion
console.log("------------EVERY---------------")
const arr20 = [1, 2, 3, 4, 5];
const arr21 = arr20.every((item) => item > 0);
console.log(arr21); //true

//some
//some devuelve true si algun elemento del array cumple la condicion
console.log("------------SOME---------------")
const arr22 = [1, 2, 3, 4, 5];
const arr23 = arr22.some((item) => item > 4);
console.log(arr23); //true


//VER metodos para arrays en: https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array

/*--------------------------------------*/
/*--------------------------------------*/
//array bidiemensional
const arrBi = [[1,2],[3,4],[5,6]];
console.log(arrBi[0][0]); //1
console.log(arrBi[0][1]); //2
console.log(arrBi[1][0]); //3

//otra forma de crear un array bidimensional
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(matrix[0][0]); //1
console.log(matrix[0][1]); //2
console.log(matrix[1][0]); //4

//operaciones con arrays bidimensionales
console.log("------------OPERACIONES CON ARRAYS BIDIMENSIONALES---------------")
//recorrer un array bidimensional
for (let i = 0; i < arrBi.length; i++) {
    for (let j = 0; j < arrBi[i].length; j++) {
        console.log(arrBi[i][j]);
    }
}
//recorrer un array bidimensional con forEach
arrBi.forEach((item) => {
    item.forEach((item2) => {
        console.log(item2);
    });
});
//recorrer un array bidimensional con map
arrBi.map((item) => {
    item.map((item2) => {
        console.log(item2);
    });
});
//encontrar un elemento en un array bidimensional con for MEDIANTE una funcion
console.log("------------ENCONTRAR ELEMENTO EN ARRAY BIDIMENSIONAL---------------")
function encontrarElemento(arrBi, elemento) {
    for (let i = 0; i < arrBi.length; i++) {
        for (let j = 0; j < arrBi[i].length; j++) {
            if (arrBi[i][j] === elemento) {
                return true;
            }
        }
    }
    return false;
}
console.log(encontrarElemento(arrBi, 3)); //true


/*-----------------------------------------------------------------------------------------*/
console.log("------------funcion q reicbe un objto e imprime sus valores---------------")
const obj = {
    a: 1,
    b: 2,
    c: 3
};
function imprimirObjeto(obj) {
    for (const key in obj) {
        console.log(obj[key]);
    }
}
imprimirObjeto(obj);