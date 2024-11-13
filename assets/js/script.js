const insertTask = document.getElementById("insertTask");
const btnInvio = document.getElementById("btnInvio");
const lista = document.getElementById("lista");
const frmToDoList = document.getElementById('toDoList');
const listaTasks = [];

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
    let listItem = document.createElement("li");
    listItem.innerText = listaTasks[i];
    listItem.addEventListener('click', function() {
        listItem.classList.toggle('completato')
    });
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

