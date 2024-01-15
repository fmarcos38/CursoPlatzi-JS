let frutas = ['manzana'];
frutas.push('pera');
console.log(frutas);

let panificados = ['🥐', '🥖'];
console.log(panificados);
let copiaPanificados = panificados; // copiaPanificados es una referencia a panificados
console.log(copiaPanificados);
panificados.push('🥯');
console.log(panificados, copiaPanificados);