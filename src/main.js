const addTodoButton = document.querySelector(".clickToAdd");
const addTodoInput = document.querySelector(".addTodo");
const setTodo = document.querySelector(".newTodo");
let todos = [];
function showTodo() {
  let content = "";
  todos.map((item, index) => {
    content += `<div class="todoLisyBody">
    <h3 class="flex-1">${item}</h3>
    <div class="flex-1 btn"><button onclick="changeStatus(event)" >Pending</button></div>
    <div onclick="dltTodo('${item}')" class="flex-1 dltBtn"><i class="fa-regular fa-trash-xmark"></i></div>
</div>`;
  });
  setTodo.innerHTML = content;
}

addTodoButton.onclick = () => {
  const getValue = addTodoInput.value;
  if (getValue) {
    todos.push(getValue);
    showTodo();
    addTodoInput.value = "";
  } else {
    alert("please insert value");
  }
};
// Delete todo
function dltTodo(item) {
  const updateTodo = todos.filter((data) => data != item);
  todos = updateTodo;
  showTodo();
}
// complete task

// function changeStatus() {
//   this.style.backgroundColor = "green";
// }
function changeStatus(event) {
    const button = event.target;
    button.style.backgroundColor = "green";
    button.innerHTML = "completed";
  }