const params = new URLSearchParams(window.location.search);
const userId = params.get("userId");

const userInfo = document.getElementById("user-info");
const albumsContainer = document.getElementById("albums");
const todosContainer = document.getElementById("todos");

let albumsExpanded = false;
let allAlbums = [];

let currentTodoFilter = "pending";

const fetchUser = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
  const user = await res.json();

  userInfo.innerHTML = `
        <div>
            <p><span class="font-semibold">👨 Name:</span> ${user.name}</p>
            <p><span class="font-semibold">🧑 Username:</span> ${user.username}</p>
            <p><span class="font-semibold">📧 Email:</span> <a href="mailto:${user.email}" class="text-blue-600 underline">${user.email}</a></p>
            <p><span class="font-semibold">📞 Phone:</span> ${user.phone}</p>
            <p><span class="font-semibold">🌐 Website:</span> <a href="http://${user.website}" target="_blank" class="text-blue-600 underline">${user.website}</a></p>
            <p><span class="font-semibold">🏢 Company:</span> ${user.company.name}</p>
            <p><span class="font-semibold">📍 Address:</span> ${user.address.street}, ${user.address.city}</p>
        </div>
    `;
};

const renderAlbums = () => {
  albumsContainer.innerHTML = "";

  const albumsToShow = albumsExpanded ? allAlbums : allAlbums.slice(0, 3);
  albumsToShow.forEach(album => {
    const albumCard = document.createElement("div");
    albumCard.className = "bg-white p-4 rounded-lg shadow cursor-pointer hover:scale-[1.02] transition-transform";

    albumCard.innerHTML = `
            <h3 class="text-lg font-semibold mb-2">${album.title}</h3>
            <p class="text-sm text-gray-500">Album ID: ${album.id}</p>
        `;

    albumsContainer.appendChild(albumCard);
  });

  const toggleBtn = document.createElement("button");
  toggleBtn.className = "col-span-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition";
  toggleBtn.textContent = albumsExpanded ? "See Less" : "See More";
  toggleBtn.onclick = () => {
    albumsExpanded = !albumsExpanded;
    renderAlbums();
  };

  albumsContainer.appendChild(toggleBtn);
};

const fetchAlbums = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`);
  allAlbums = await res.json();
  renderAlbums();
};

let todosData = [];

const renderTodos = () => {
  todosContainer.innerHTML = "";

  const filterBtns = `
        <div class="flex gap-4 mb-4">
            <button onclick="setTodoFilter('pending')" class="px-4 py-2 rounded ${currentTodoFilter === 'pending' ? 'bg-blue-600 text-white' : 'bg-gray-200'}">Pending</button>
            <button onclick="setTodoFilter('completed')" class="px-4 py-2 rounded ${currentTodoFilter === 'completed' ? 'bg-blue-600 text-white' : 'bg-gray-200'}">Completed</button>
        </div>
    `;

  todosContainer.innerHTML += filterBtns;

  const filteredTodos = todosData.filter(todo =>
    currentTodoFilter === "completed" ? todo.completed : !todo.completed
  );

  filteredTodos.forEach(todo => {
    const todoItem = document.createElement("div");
    todoItem.className = `px-6 py-3 rounded-md flex justify-between items-center ${todo.completed ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`;

    todoItem.innerHTML = `
            <span class="text-md">${todo.title}</span>
            <span class="text-sm font-medium">${todo.completed ? "✅ Completed" : "❌ Pending"}</span>
        `;

    todosContainer.appendChild(todoItem);
  });
};

const setTodoFilter = (filter) => {
  currentTodoFilter = filter;
  renderTodos();
};

const fetchTodos = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos?userId=${userId}`);
  todosData = await res.json();
  renderTodos();
};

if (userId) {
  fetchUser();
  fetchAlbums();
  fetchTodos();
} else {
  userInfo.innerText = "No user ID provided.";
}

