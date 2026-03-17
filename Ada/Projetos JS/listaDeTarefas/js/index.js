const form = document.querySelector("#todo-form");
const taskInput = document.querySelector("#inputTask");
const todoListUl = document.querySelector("#taskList");

let task = [];

function rederizartarefas(tasktitle, done = false) {
  //adicionando a nova tarefa no HTML com checkbox, span e btn
  const li = document.createElement("li");

  const input = document.createElement("input");
  input.setAttribute("type", "checkbox");
  input.addEventListener("change", (event) => {
    const liToggle = event.target.parentElement;
    const done = event.target.checked;
    const spanToggle = liToggle.querySelector("span");

    if (done) {
      spanToggle.style.textDecoration = "line-through";
    } else {
      spanToggle.style.textDecoration = "none";
    }

    task = task.map((tarefa) => {
      if (tarefa.title === spanToggle.textContent) {
        return {
          title: tarefa.title,
          done: !tarefa.done,
        };
      }

      return tarefa;
    });
    localStorage.setItem("tasks", JSON.stringify(task));
  });
  input.checked = done;

  const span = document.createElement("span");
  const btnRemove = document.createElement("button");
  span.textContent = tasktitle;
  if (done) {
    span.style.textDecoration = "line-through";
  }

  btnRemove.textContent = "Remover";
  btnRemove.addEventListener("click", (event) => {
    const liRemove = event.target.parentElement;
    const titleLiRemove = liRemove.querySelector("span").textContent;

    todoListUl.removeChild(liRemove);
    task = task.filter((tarefa) => tarefa.title !== titleLiRemove);

    localStorage.setItem("tasks", JSON.stringify(task));
  });

  li.appendChild(input);
  li.appendChild(span);
  li.appendChild(btnRemove);

  todoListUl.appendChild(li);

  //limpando o input de adicionar tarefa
  taskInput.value = "";
}

window.onload = () => {
  const tasksLocalStorage = localStorage.getItem('tasks')

  if(!tasksLocalStorage) return

  task = JSON.parse(tasksLocalStorage)

  task.forEach(tarefa => {
    rederizartarefas(tarefa.title, tarefa.done)    
  });
};

form.addEventListener("submit", (event) => {
  event.preventDefault(); //evita que ao submeter o formulário a página recarregue

  const tasktitle = taskInput.value;

  if (tasktitle.length < 1) {
    alert("Sua tarefa precisa de pelo menos 1 caractere.");
    return; //faz com que saia da function
  }

  //adicionando a tarefa ao array de tarefas(task)
  task.push({
    title: tasktitle,
    done: false,
  });

  localStorage.setItem("tasks", JSON.stringify(task));

  rederizartarefas(tasktitle);
});
