//reduce 

const numeros = [1, 2, 3, 4, 5];

const numeroSomado = numeros.reduce((acumulador, elemento) => acumulador + elemento, 0);

console.log(numeroSomado);

const numeroPar = numeros.reduce((acumulador, elemento) => {
    if (elemento % 2 === 0) {
        return acumulador + elemento;
    }else {
        return acumulador;
    }
}, 0);

console.log(numeroPar);

console.clear();

const carrinho = [
  { produto: "Caneta", preco: 7.99, quantidade: 3},
  { produto: "Impressora", preco: 649.5, quantidade: 1},
  { produto: "Caderno", preco: 27.1, quantidade: 4},
];

const totalCarrinho = carrinho.reduce((acumulador, elemento) => {
    return acumulador + (elemento.preco * elemento.quantidade);
}, 0);

console.log(totalCarrinho);
