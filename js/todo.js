const todoForm = document.getElementById("todo-form");
const todoInput = todoForm.querySelector("#todo-form input");
const todoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let todos = [];

function saveTodos(event) {
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}

function deleteTodo(event) {
    //event.preventDefault();
    const li = event.target.parentElement;
    li.remove();
    todos = todos.filter(todo => {
        return todo.id !== parseInt(li.id);
    });
    console.log(todos);
    saveTodos();
    console.log(todos);
}

function paintTood(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.textContent = newTodo.text;
    const button = document.createElement("button");
    button.textContent = "✖︎";
    button.addEventListener("click", deleteTodo);
    li.appendChild(span);
    li.appendChild(button);
    todoList.appendChild(li);
}

function handleTodoSubmit(event) {
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = "";
    const newTodoObj = {
        id: Date.now(),
        text: newTodo
    };
    todos.push(newTodoObj);
    paintTood(newTodoObj);
    saveTodos();
}

todoForm.addEventListener("submit", handleTodoSubmit);

const savedTodo = localStorage.getItem(TODOS_KEY);

if(savedTodo !== null) {
    const parsedTodo = JSON.parse(savedTodo);
    todos = parsedTodo;
    parsedTodo.forEach(el => {
        paintTood(el);
    });
}