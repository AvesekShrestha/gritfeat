const todos = [];

const todoContainer = document.getElementById("todo-list");
const todoInput = document.getElementById("todo-input");
const addButton = document.getElementById("add-todo");

const allTab = document.getElementById("all");
const activeTab = document.getElementById("active");
const completedTab = document.getElementById("completed");

addButton.addEventListener("click", () => addTodo());

[allTab, activeTab, completedTab].forEach(tab =>
    tab.addEventListener("change", () => renderTodos())
);

const addTodo = () => {
    const todoName = todoInput.value.trim();
    if (!todoName) return;

    const todo = {
        id: Date.now(),
        name: todoName,
        date: new Date().toLocaleString(),
        status: "active"
    };
    todos.push(todo);
    todoInput.value = "";
    renderTodos();
};

const renderTodos = () => {
    todoContainer.innerHTML = "";

    const currentFilter = allTab.checked
        ? "all"
        : activeTab.checked
            ? "active"
            : "completed";

    todos
        .filter(todo => currentFilter === "all" || todo.status === currentFilter)
        .forEach(todo => {
            const todoItem = createTodoItem(todo);
            todoContainer.appendChild(todoItem);
        });
};

const createTodoItem = (todo) => {
    const li = document.createElement("li");
    li.className =
        "flex justify-between p-6 rounded shadow-md items-center bg-white mb-4";

    li.innerHTML = `
    <div class="flex items-center gap-4 flex-grow">
      <input type="checkbox" class="scale-150" ${todo.status === "completed" ? "checked" : ""}>
      <span class="todo-name-wrapper">
        <label class="text-xl font-bold todo-name ${todo.status === "completed" ? "line-through text-gray-400" : ""}">
          ${todo.name}
        </label>
      </span>
    </div>
    <span class="text-sm text-gray-500 mr-4">${todo.date}</span>
    <div class="flex gap-2">
      <button class="edit-btn text-blue-600 hover:underline">Edit</button>
      <button class="delete-btn text-red-600 hover:underline">Delete</button>
    </div>
  `;

    const checkbox = li.querySelector("input[type='checkbox']");
    checkbox.addEventListener("change", () => {
        todo.status = checkbox.checked ? "completed" : "active";
        renderTodos();
    });

    const editBtn = li.querySelector(".edit-btn");
    const nameWrapper = li.querySelector(".todo-name-wrapper");

    editBtn.addEventListener("click", () => {

        const input = document.createElement("input");
        input.type = "text";
        input.value = todo.name;
        input.className = "border border-gray-300 px-2 py-1 rounded w-full";

        nameWrapper.innerHTML = "";
        nameWrapper.appendChild(input);

        editBtn.textContent = "Save";

        editBtn.onclick = () => {
            const newName = input.value.trim();
            if (newName) {
                todo.name = newName;
                renderTodos();
            }
        };
    });

    const deleteBtn = li.querySelector(".delete-btn");
    deleteBtn.addEventListener("click", () => {
        const index = todos.indexOf(todo);
        if (index !== -1) {
            todos.splice(index, 1);
            renderTodos();
        }
    });

    return li;
};
