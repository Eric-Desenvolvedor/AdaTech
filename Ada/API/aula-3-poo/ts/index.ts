interface IPessoa {
  nome: string;
  idade: number;
  altura: number;
  cpf: string;

  dormir: () => void;
}

class Pessoa implements IPessoa {
  //atributos
  nome: string;
  idade: number;
  altura: number;
  private _cpf: string;

  //metodo construtor
  constructor(nome: string, idade: number, altura: number, cpf: string) {
    this.nome = nome;
    this.idade = idade;
    this.altura = altura;
    this._cpf = cpf;
  }

  //metodos
  dormir() {
    console.log("Dormindo");
  }

  // metodo get - poder pegar o valor do atributo

  get cpf(): string {
    return this._cpf;
  }

  // metodo set - para poder alterar
  set cpf(newCpf: string) {
    if (newCpf.length !== 14) {
      //assim lança um erro
      throw new Error("CPF INVÁLIDO!");
    }
    this._cpf = newCpf;
  }
}

class Professor extends Pessoa {
  codigo: string;

  constructor(
    nome: string,
    idade: number,
    altura: number,
    cpf: string,
    codigo: string,
  ) {
    super(nome, idade, altura, cpf);
    this.codigo = codigo;
  }

  ensinar() {
    console.log("Ensinando");
  }
}

const pessoa1 = new Pessoa("eric", 23, 1.47, "123.456.789-00");
const pessoa2 = new Pessoa("rubens", 21, 1.67, "123.456.789-10");
console.log(pessoa1.cpf);
console.log(pessoa2.nome);
pessoa1.cpf = "123.456.789-14";
console.log(pessoa1.cpf);
pessoa2.dormir();

const professor = new Professor(
  "eric",
  29,
  1.55,
  "123.456.789-20",
  "1234567890",
);

console.log(professor);
professor.dormir();
professor.cpf = "123.456.789-23";
console.log(professor.cpf);

