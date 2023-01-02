"use strict";
const addTaskBtn = document.querySelector(".add-btn");
const taskInput = document.querySelector("#task-add-input");
const tasksContainer = document.querySelector(".tasks-container");
const itemsLeft = document.getElementById("items-left");
const removeIcon = document.querySelector(".cross-icon");
const task = document.querySelectorAll("li");
const taskUl = document.querySelector("#task-container");
const check = document.getElementById("submit");
const circles = document.querySelectorAll(".circle");
const clearBtn = document.getElementById("clear-completed-btn");

//thats a counter variable for items left in the list
let items = 0;

// that listens to enter key press and ads new task
document.addEventListener("keypress", addNewTask);
// that listens to click on the cross icon and removes specific task
taskUl.addEventListener("click", removeTask);
// that listens to checkbox and checks or unchecks task
taskUl.addEventListener("click", checkCircle);
// it listens clear completed btn and clears completed tasks from list
clearBtn.addEventListener("click", clearCompleted);

// Function which creates new HTML element and displays it when enter key is  clicked
function addNewTask(event) {
  if (taskInput.value != "" && event.key == "Enter") {
    let html = `<li class="task" id="task-${items}">
    <div class="circle" id="circle${items}" value="${items}"></div>
    <p class="task-text" id="p-${items}" value="${items}">${taskInput.value}</p>
          <button>
            <img
              class="cross-icon"
              id="remove-icon"
              src="images/icon-cross.svg"
              alt=""
            />
          </button>
        </li>`;
    tasksContainer.insertAdjacentHTML("afterbegin", html);
    updateItemsPlus();
    taskInput.value = "";
  }
}

// that function updates how many items left
function updateItemsPlus() {
  items++;
  itemsLeft.innerHTML = `${items} items left`;
}
function updateItemsMinus() {
  items--;
  itemsLeft.innerHTML = `${items} items left`;
}

// that function removes task (was trying to make it for 3 days)
function removeTask(e) {
  if (e.target.matches(".cross-icon")) {
    e.target.parentNode.parentNode.remove();
    updateItemsMinus();
  }
}

// that function checkes checkbox or removes checking
function checkCircle(e) {
  if (e.target.matches(".circle")) {
    if (e.target.classList.contains("checked-circle")) {
      e.target.classList.remove("checked-circle");
      overlineText();
    } else {
      e.target.classList.add("checked-circle");
      overlineText();
    }
  }
}

// that function overlines task text when it's checked
function overlineText() {
  let taskText = document.querySelectorAll(".task-text");
  for (let p of taskText) {
    if (
      p.previousSibling.previousSibling.classList.contains("checked-circle")
    ) {
      p.classList.add("checked-text");
    } else {
      p.classList.remove("checked-text");
    }
  }
}

// that function clears completed tasks
function clearCompleted() {
  let tasks = document.querySelectorAll(".circle");
  for (let x of tasks) {
    if (x.classList.contains("checked-circle")) {
      x.parentNode.remove();
      updateItemsMinus();
    }
  }
}
