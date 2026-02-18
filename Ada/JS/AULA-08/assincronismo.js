const fs = require("fs");

//callback

// fs.readFile("../AdaEstudoReact/Ada/JS/AULA-08/conteudo.txt", (erro, conteudo) => {
//   if (erro) {
//     console.log("Erro ao ler o arquivo: ", erro);
//   } else {
//     console.log(String(conteudo));
//   }
// });

// setTimeout(() => {
//     console.log("Executando código assíncrono após 2 segundos...");
// }, 2000);

//Promises

function lerArquivo() {
  return new Promise((resolve, reject) => {
    fs.readFile(
      "../AdaEstudoReact/Ada/JS/AULA-08/conteudo.txt",
      (erro, conteudo) => {
        if (erro) {
          reject("Erro ao ler o arquivo: " + erro);
        } else {
          resolve(String(conteudo));
        }
      },
    );
  });
}

// // o then fala que se der certo faça tal coisa e o catch fala que se der errado faça tal coisa

// lerArquivo()
//   .then((retornoResolve) => {
//     console.log(retornoResolve);
//   })
//   .catch((erro) => {
//     console.log("Err0: " + erro);
//   })
//   .finally(() => {
//     console.log("Operação finalizada.");
//   });

// Async/Await

async function lerArquivoAsync() {
  console.log("Início do programa");
  
  try {
    const retorno = await lerArquivo();
    console.log(retorno);
    console.log("Fim do programa");
  } catch (erro) {
    console.log("Erro: " + erro);
  }
}

lerArquivoAsync();
