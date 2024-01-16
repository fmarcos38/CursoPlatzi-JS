//1.tipo entero y decimal
const entero = 10; console.log(typeof entero);
const decimal = 10.12; console.log(typeof decimal);

//2. notacion cientifica
const numCient = 2e3; console.log(numCient);

//3. Infinity y NaN
const inf = Infinity; console.log(inf);
const nan = NaN; console.log(nan);

//4. Boolean
//conversion explicita
const falso = 0;
const verdadero = 1; //o cualquier numero diferente de 0 positivo o negativo
console.log(Boolean(falso));
console.log(Boolean(verdadero));