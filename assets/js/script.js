const insertTask = document.getElementById("insertTask");
const btnInvio = document.getElementById("btnInvio");
const lista = document.getElementById("lista");
const listaElements = [];

btnInvio.addEventListener("click", function (e) {
  e.preventDefault();
  if (!inputCheck()) return;
  addTasks();
});

function inputCheck() {
  if (insertTask.value === "") {
    alert("campo non compilato");
    return false;
  } else {
    return true;
  }
}

function addTasks() {
  listaElements.push(insertTask.value);
}
