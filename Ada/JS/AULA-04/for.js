import prompt from "readline-sync";

// for (let i =0; i < 10; i++) {
//     console.log(i);
// }

// console.clear();

// let maiorNumero = 0;
// let numeroInformado;

// for (let i = 0; i < 5; i++) {
//     numeroInformado = prompt.questionInt("Informe um número positivo: ");

//     if (numeroInformado > maiorNumero) {
//         maiorNumero = numeroInformado;
//     }

//     console.log("Maior número: " + maiorNumero);
// }

// const nome = "Walisson";

// console.log(nome.length);

// for (let i = 0; i < nome.length; i++) {
//     console.log(nome[i]);
// }

const numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

console.log(numeros.slice(2, 5));

console.clear();

numeros.push(110);
console.log(numeros);

console.clear();

numeros.unshift(5);
console.log(numeros);

console.clear();

numeros.pop();
console.log(numeros);

console.clear();

numeros.shift();
console.log(numeros);

console.clear();

console.log(numeros.includes(30));

console.clear();

const indice3 = numeros.indexOf(50);
console.log(indice3);

console.clear();

//se você selecionar uma valiável e apertar o F2 você pode renomear a variável em todo o código de uma vez.

const ultimo = numeros.lastIndexOf(100);
console.log(ultimo);

console.clear();

const arr = [13, 27, 35, 48, 45];

for (let i = 0; i < arr.length; i++) {
    console.log(i, arr[i]);
}
//for-of - percorre os elementos do array

for (const elemento of arr) {
    console.log(elemento);
}

// for-in - percorre os índices do array

for (const indice in arr) {
    console.log(indice);
}