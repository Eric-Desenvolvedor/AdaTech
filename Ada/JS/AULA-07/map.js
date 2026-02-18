// Map -> ele cria um novo array do mesmo tamanho que o original, mas com outros elementos que serão defenidos através de um retorno

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numero = numeros.map((valor) => {
  return valor * 2;
});
console.log(numero);

console.clear();

const carrinho = [
  { produto: "Caneta", preco: 7.99, quantidade: 3 },
  { produto: "Impressora", preco: 649.5, quantidade: 1 },
  { produto: "Caderno", preco: 27.1, quantidade: 4 },
];

const valorTotal = carrinho.map((itemDoCarrinho) => {
  return {
    ...itemDoCarrinho,
    total: itemDoCarrinho.preco * itemDoCarrinho.quantidade,
  };
});

console.log(valorTotal);

//desestruturação/spred(operator) -> ...
//exemplo:

// const pessoa = {
//     nome: 'Luiz',
//     sobrenome: 'Otávio',
//     idade: 30,
// }

// const novaPessoa = {
//     ...pessoa,
//     peso: 70,
// }
// console.log(novaPessoa);
