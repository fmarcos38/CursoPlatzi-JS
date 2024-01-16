// Ejercicio: ¿Qué hace JavaScript?
const stringValue = '10'
const numberValue = 10
const booleanValue = true

// Combinaciones con stringValue
console.log(stringValue + stringValue); // CONCATENAR
console.log(stringValue + numberValue); // CONCATENAR
console.log(stringValue + booleanValue); // CONCATENAR

// Combinaciones con numberValue
console.log(numberValue + stringValue); // CONCATENAR
console.log(numberValue + numberValue); // SUMAR
console.log(numberValue + booleanValue); // SUMAR

// Combinaciones con booleanValue
console.log(booleanValue + stringValue); // CONCATENAR
console.log(booleanValue + numberValue); // SUMAR
console.log(booleanValue + booleanValue); // SUMAR

//conclusion
/* 
    si hay string en la operacion, todo se convierte en string
    si hay boolean en la operacion, todo se convierte en numero
    si hay numero en la operacion, todo se convierte en numero
*/