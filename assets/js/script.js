const insertTask = document.getElementById("insertTask");
const btnInvio = document.getElementById("btnInvio");
const lista = document.getElementById("lista");
const listaTasks = [];

btnInvio.addEventListener("click", function (e) {
  e.preventDefault();
  if (!inputCheck()) return;
  addTasksArray();
  visualTasks();
});

function inputCheck() {
  if (insertTask.value === "") {
    alert("campo non compilato");
    return false;
  } else {
    return true;
  }
}

function addTasksArray() {
  listaTasks.push(insertTask.value);
}

function visualTasks() {
  lista.innerHTML = "";
  for (let i = 0; i < listaTasks.length; i++) {
    let listItem = document.createElement("li");
    listItem.innerText = listaTasks[i];
    lista.appendChild(listItem);
  }
}
