"use strict";
const pessoa = {
    nome: "Eric",
    idade: 23,
    profissao: "Dev",
    altura: 1.68,
};
console.log(pessoa);
function escolherNumero(numero1, numero2, criterio) {
    switch (criterio) {
        case 'greater':
            return numero1 > numero2 ? numero1 : numero2;
        case 'lower':
            return numero1 < numero2 ? numero1 : numero2;
        default:
            const numeroAleatorio = Math.random();
            if (numeroAleatorio >= 0.5)
                return numero1;
            return numero2;
    }
}
const escolhido = escolherNumero(1, 20, "lower");
console.log(escolhido);
//# sourceMappingURL=index.js.map