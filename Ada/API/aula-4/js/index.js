//selecionar itens do html pelo document

//pelo nome da tag
const ps = document.getElementsByTagName("p");
console.log(ps);

//pelo nome da class
const pps = document.getElementsByClassName("paragrafo");
console.log(pps);

//pelo nome
const email = document.getElementsByName("email");
console.log(email);

//pelo ID
const jslogo = document.getElementById("jslogo");
console.log(jslogo);

//pelo query selector --melhor-- só seleciona 1
const query = document.querySelector("body > img");
console.log(query);

//pelo query selector all
const all = document.querySelectorAll("p");
console.log(all);

console.clear();

const primary = document.querySelector("p.paragrafo");
console.log(primary);

//pegar o conteúdo do p
console.log("Conteúdo: ", primary.textContent);

//pegar o conteúdo pelo innerHtml e textcontent (não adiciona tag html, ele coloca como se fosse texto)
console.log("Conteúdo completo com tag: ", primary.innerHTML);
primary.textContent = "<strong>tudo bem</strong>";
primary.innerHTML = "<strong>tudo bem</strong>";
console.log("Conteúdo completo com tag: ", primary.innerHTML);
console.clear();

//pegar o valor usando value ("input")
email[0].value = "eric.com";

//Criando elementos na página
const newTagLi = document.createElement("li");
const lista = document.querySelector("ul#lista");
const LiLista = document.querySelectorAll("ul > li");

newTagLi.innerHTML = "Segundo item";
// lista.appendChild(newTagLi);

lista.insertBefore(newTagLi, LiLista[1]);

//remover
lista.removeChild(newTagLi);
