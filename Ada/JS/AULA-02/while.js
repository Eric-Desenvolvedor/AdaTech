const prompt = require("readline-sync");

// // let saldo = Number(prompt.question("Qual o seu saldo? "));

// // while (saldo < 0){
// //     saldo = Number(prompt.question("Saldo Inválido! Informe um valor válido: "));
// // }

// // console.log(saldo);

// let notaAluno = Number(prompt.question("Informe a nota do aluno: "));
// let somaNotas = 0;
// let quantNotasValidas = 0;

// while (notaAluno >= 0 && notaAluno <= 10){
//     somaNotas += notaAluno;
//     quantNotasValidas++;
//     notaAluno = Number(prompt.question("Indorme a próxima nota: "));
// }

// console.log(somaNotas);
// console.log(quantNotasValidas);

// console.log("A média das notas é: ", somaNotas/quantNotasValidas);

// let qntTentativas = 0;
// const numeroAleatorio = parseInt(Math.random() * 10);

// let numeroUsuario = Number(prompt.question("Adivinhe o número que estou pensando (entre 0 e 10): "));

// while (numeroUsuario !== numeroAleatorio){
//     console.log("Número incorreto! Tente novamente.");
//     numeroUsuario = Number(prompt.question("Adivinhe o número que estou pensando (entre 0 e 10): "));
//     qntTentativas += 1;
// }

// console.log("Parabéns! Você adivinhou o número correto:", numeroAleatorio);
// console.log("Número de tentativas:", qntTentativas);

// let contador = 0;

// while (contador < 5){
//     console.log("Contador é igual a: ", contador);
//     contador ++;

//     //if (contador === 2){
//        // break;
//     //}

//     if (contador === 2){
//         continue;
//     }

//     console.log("depois do if:...");
// }



// Do-while - iniciar pelo menos uma vez aquele bloco de código

let saldo;

do {
    saldo = Number(prompt.question("Qual o seu saldo? "));
} while (saldo < 0);

console.log(saldo);
