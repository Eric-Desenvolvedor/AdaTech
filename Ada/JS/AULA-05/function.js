import prompt from "readline-sync";

function saudacao(nomeEstudante, curso) {
  // template string || string literals
  return `Olá, seja bem-vindo ${nomeEstudante}! Você está matriculado no curso de ${curso}.`;
}

const mensagemSaudacao = saudacao("Eric", "JavaScript");

console.log(mensagemSaudacao);

console.clear();

function somar(n1, n2) {
  return n1 + n2;
}

const resultado = somar(10, 20);

console.log(resultado);
console.log(resultado + 100);

console.clear();

//------------------------------------------------------------

const dobrarNumero = function (numero) {
  return numero * 2;
};

const resultadoDobro = dobrarNumero(5);
console.log(resultadoDobro);

//------------------------------------------------------------
// Arrow function

const subtrair = (n1, n2) => {
  return n1 - n2;
};

const multiplicar = (n1, n2) => n1 * n2;

const triploNumero = (numero) => numero * 3; //somente se houver um parâmetro, ai não precisa de parênteses

