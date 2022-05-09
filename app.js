let tasks = [];

let taskTitleInput = document.getElementById("task-title-input");
let taskDeadlineInput = document.getElementById("task-deadline-input");
let tasksList = document.getElementById("tasks-list");
let rangeDifficulty = document.getElementById("range-difficulty");

const addTask = () => {
  // HW 1. Clear the inputs after saving the task - V
  // HW 2. using if + condition don`t let empty tasks be added  -V
  if (
    document.querySelector("#task-title-input, #task-deadline-input").value
      .length == 0
  ) {
    alert("Please enter a Task");
    removeEventListener();
  }

  let title = taskTitleInput.value;
  let deadline = taskDeadlineInput.value;
  let difficulty = rangeDifficulty.value;

  let task = {
    title: title,
    deadline: deadline,
    difficulty: difficulty,
  };
  tasks.push(task);
  renderTasks();
};
// function renderTasks(#range-difficulty) {
//   if (i == 3) {
//     document.write ("star")
//   }
function renderTasks() {
  // HW 3. display the deadline inside a tag
  tasksList.innerHTML = "";
  for (let i = 0; i < tasks.length; i++) {
    tasksList.innerHTML += `<li>${tasks[i].title} - until _ ${tasks[i].deadline} _Difficulty ${tasks[i].difficulty}</li>`;
  }

  const inputs = document.querySelectorAll(
    "#task-title-input, #task-deadline-input, #range-difficulty"
  );
  inputs.forEach((input) => {
    input.value = "";
  });
}
