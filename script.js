const todos = [];

function addTodo() {
  const textbox = document.getElementById('todo-title');
  const title = textbox.value;
  const datePicker = document.getElementById('date-picker');
  const dueDate = datePicker.value;

  if (title.trim() !== "") {
    todos.push({ title, dueDate });
    render();
    textbox.value = "";
    datePicker.value = "";
  } else {
    alert("Por favor, escribe una tarea.");
  }
}

function render() {
  const todoList = document.getElementById('todo-list');
  todoList.innerHTML = '';
  
  todos.forEach((todo, index) => {
    const element = document.createElement('div');
    element.classList.add('todo-item');
    element.innerHTML = `${todo.title} - ${todo.dueDate} <button onclick="deleteTodo(${index})">Eliminar</button>`;
    todoList.appendChild(element);
  });
}

function deleteTodo(index) {
  todos.splice(index, 1);
  render();
}
