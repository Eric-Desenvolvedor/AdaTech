const prompt = require("readline-sync");

const idade = prompt.question("Qual sua idade? ");

const idadeNumber = Number(idade) //converte a idade de string para número

//para converter para outros tipos basta usar (coerção Explícita):
//String(); Number(); Boolean()

console.log(idade, typeof idade);

console.log(1 + "1")

console.log(15 * "5") // se for qualquer opeção com exeção da soma, ele faz a operação

