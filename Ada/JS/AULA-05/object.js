//Object literal

const array = ["Walisson", 1, 1.77, true];

const pessoa = {
  nome: "Walisson",
  idade: 27,
  altura: 1.77,
  ehProgramador: true,
  funcao: (saudacao = () => "Olá, eu sou uma função dentro de um objeto!"),
  hobies: ["Programar", "Jogar", "Ler"],
};

console.log(pessoa);

console.log(pessoa.nome);
console.log(pessoa.idade);
console.log(pessoa.altura);
console.log(pessoa["ehProgramador"]); // esse é um outro jeito de acessar o valor de um objeto

pessoa.profissao = "Programador"; // Adicionando uma nova propriedade ao objeto

pessoa.nome = "Eric"; // Alterando o valor da propriedade nome

delete pessoa.altura; // Deletando a propriedade altura do objeto

console.log(pessoa);

console.clear();

console.log(pessoa.funcao());

const idade = 27;

const objeto = {
  idade, // ele já entende que o nome da propriedade é o mesmo do nome da variável, então não precisa repetir
};

console.log(objeto);

const { nome } = pessoa; // Destructuring assignment -> ele pega o valor de nome do objeto e colaca-o dentro de uma variavel chamada nome

console.log(nome);
