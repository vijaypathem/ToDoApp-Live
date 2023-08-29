"use strict";

// text input of task
const task = document.querySelector(".inputText-area");
const showTask = document.querySelector(".task");
const todoList = document.querySelector(".todo-list");

// task add button
const submit = document.querySelector(".submit-button");

const addTask = function () {
  if (task.value) {
    const taskContainer = document.createElement("div");
    taskContainer.className = "taskContainer";

    const taskText = document.createElement("p");
    taskText.className = "task";
    taskText.textContent = task.value;
    taskContainer.appendChild(taskText);
    task.value = "";

    const taskDelete = document.createElement("button");
    taskDelete.className = "taskDelete";
    taskDelete.textContent = "Delete";
    taskContainer.appendChild(taskDelete);

    todoList.appendChild(taskContainer);

    taskDelete.addEventListener("click", function () {
      deleteTask(taskContainer);
    });
  }
};

const deleteTask = function (taskContainer) {
  todoList.removeChild(taskContainer);
};

submit.addEventListener("click", addTask);
task.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    addTask();
  }
});
