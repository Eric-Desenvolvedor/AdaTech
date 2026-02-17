function welcome(courseName){
    return (studentName) => {
        console.log(`Bem vindo(a) ${studentName} ao curso de ${courseName}!`);
    }
}

const welcomeStudent = welcome('JavaScript');
welcomeStudent('Eric');

console.clear();

const somar = (n1, n2) => n1 + n2;
const subtrair = (n1, n2) => n1 - n2;
const multiplicar = (n1, n2) => n1 * n2;
const dividir = (n1, n2) => n1 / n2;

const calcular = (n1, n2, operacao) => operacao(n1, n2);

console.log(calcular(10, 5, somar));
console.log(calcular(10, 5, subtrair));
console.log(calcular(10, 5, multiplicar));
console.log(calcular(10, 5, dividir));