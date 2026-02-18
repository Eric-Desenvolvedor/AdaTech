//every -. verifica se a condição do array é verdadeira ou falsa, levando em consideração todos os elementos do array.

const numeros = [1, 2, 3, 4, 5];

const todosPositivos = numeros.every((elemento) => elemento > 0);

console.log(todosPositivos);

console.clear();

//some - verifica se a condição do array é verdadeira ou falsa, levando em consideração pelo menos um elemento do array.

const numeros2 = numeros.some((elemento) => elemento > 2 && elemento < 5);

console.log(numeros2);

console.clear();