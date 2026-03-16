const btnDiminuir = document.querySelector("section #diminuirBTN");
const btnAumentar = document.querySelector("section #aumentarBTN");
const btnZerar = document.querySelector("section #zerarBTN");
const contador = document.querySelector("#contador");

const input = document.querySelector("section #input");

btnAumentar.addEventListener("click", (event) => {
  const valorAtual = Number(contador.textContent);

  contador.textContent = valorAtual + 1;

  btnAumentar.classList.add("btn");
  btnDiminuir.classList.remove("btn");
  btnZerar.classList.remove("btnZerar");
});

btnDiminuir.addEventListener("click", (event) => {
  const valorAtual = Number(contador.textContent);

  Number(contador.textContent) === 0
    ? (contador.textContent = 0)
    : (contador.textContent = valorAtual - 1);

  btnDiminuir.classList.add("btn");
  btnAumentar.classList.remove("btn");
  btnZerar.classList.remove("btnZerar");
});

btnZerar.addEventListener("click", (event) => {
  contador.textContent = 0;

  btnAumentar.classList.remove("btn");
  btnDiminuir.classList.remove("btn");
  btnZerar.classList.add("btnZerar");
});

input.addEventListener("input", () => {
  console.log(input.value);
});

// adicionando estilos inline em um elemento

contador.style.color = "red";
contador.style.padding = "0 2rem";
contador.style.backgroundColor = "whitesmoke";
contador.style.border = "1px solid #AAA";
contador.style.width = "25px";

//manipular classes

// btnAumentar.classList.add("btn");
// btnDiminuir.classList.remove("btn");

const btnTheme = document.querySelector("#theme");
let darkTheme;

//definindo uma função que será carregada ao executar o conteúdo da página
window.onload = () => {
  const DarkThemeLocalStorage = localStorage.getItem("Localtheme");

  darkTheme = DarkThemeLocalStorage === "true";

  darkThemeFunction();
};

btnTheme.addEventListener("click", (event) => {
  darkTheme = !darkTheme;

  localStorage.setItem("Localtheme", darkTheme);

  darkThemeFunction();
});

function darkThemeFunction() {
  const body = document.querySelector("body");

  if (darkTheme) {
    body.classList.add("themeDark");
    btnTheme.classList.add("themeBtnDark");
    btnTheme.classList.remove("themeBTN");
  } else {
    body.classList.remove("themeDark");
    btnTheme.classList.remove("themeBtnDark");
    btnTheme.classList.add("themeBTN");
  }
}
