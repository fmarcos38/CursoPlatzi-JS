let a = 1;
let b = 'pepe';

function cambiarValor(a, b){
    a = 2;  
    b = 'juan';
    console.log('a dentro de la función: ', a);
    console.log('b dentro de la función: ', b);
}

cambiarValor(a, b);

console.log('------------------------');
console.log('a fuera de la función: ', a);
console.log('b fuera de la función: ', b);