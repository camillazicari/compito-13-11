const insertTask = document.getElementById("insertTask");
const btnInvio = document.getElementById("btnInvio");
const lista = document.getElementById("lista");
const frmToDoList = document.getElementById('toDoList');
const listaTasks = [];
let listItem;

btnInvio.addEventListener("click", function (e) {
  e.preventDefault();
  if (!inputCheck()) return;
  addTasksArray();
  visualTasks();
  frmToDoList.reset();
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
    listItem = document.createElement("li");
    listItem.innerText = listaTasks[i];
    let btnDelete = document.createElement('button');
    btnDelete.setAttribute('type', 'button');
    btnDelete.setAttribute('onclick', 'deleteTask()');
    btnDelete.innerText = '🚮';
    listItem.appendChild(btnDelete);
    lista.appendChild(listItem);

  }
}

function deleteTask(task) {
    listaTasks.splice(task, 1);
    visualTasks();
}

/*listItem.addEventListener('click', function {
    let sbarrato = document.createElement('class');
    sbarrato.setAttribute('name', 'sbarrato');
    insertTask.appendChild(sbarrato);
})*/
