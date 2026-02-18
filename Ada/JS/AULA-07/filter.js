const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const numerosPares = numeros.filter((numero) => {
  return numero % 2 === 0;
});

console.log(numerosPares);

console.clear();

const alunos = [
    { nome: "Luiz", media: 75 },
    { nome: "Maria", media: 90 },
    { nome: "João", media: 50 },
    { nome: "Ana", media: 80 },
    { nome: "Pedro", media: 65 },
];

const mediaMaiorQue60 = alunos.filter((aluno) => {
    return aluno.media > 60;
});

console.log(mediaMaiorQue60);