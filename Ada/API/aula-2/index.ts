interface Person {
  nome: string;
  idade: number;
  profissao?: string;
  altura: number;
}

const pessoa: Person = {
  nome: "Eric",
  idade: 23,
  profissao: "Dev",
  altura: 1.68,
};

console.log(pessoa)

// criando tipagem com type

// type Person = {
//   nome: string;
//   idade: number;
//   profissao?: string;
//   altura: number;
// };

type Criterio = 'greater'|'lower'

function escolherNumero (numero1: number, numero2: number, criterio?: Criterio): number{
    switch(criterio){
        case 'greater':
            return numero1 > numero2 ? numero1 : numero2
        case 'lower':
            return numero1 < numero2 ? numero1 : numero2
        default:
            const numeroAleatorio = Math.random();

            if (numeroAleatorio >= 0.5) return numero1; 
            return numero2;
    }
}

const escolhido = escolherNumero(1, 20, "lower");

console.log(escolhido);