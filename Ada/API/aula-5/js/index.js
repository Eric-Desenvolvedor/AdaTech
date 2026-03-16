const btnDiminuir = document.querySelector("section #diminuirBTN");
const btnAumentar = document.querySelector("section #aumentarBTN");
const btnZerar = document.querySelector("section #zerarBTN");
const contador = document.querySelector("#contador");

const input = document.querySelector("section #input");

btnAumentar.addEventListener("click", (event) => {
  const valorAtual = Number(contador.textContent);

  contador.textContent = valorAtual + 1;
});

btnDiminuir.addEventListener("click", (event) => {
  const valorAtual = Number(contador.textContent);

  Number(contador.textContent) === 0
    ? (contador.textContent = 0)
    : (contador.textContent = valorAtual - 1);
});

btnZerar.addEventListener("click", (event) => {
  contador.textContent = 0;
});

input.addEventListener("input", () => {
  console.log(input.value);
});
