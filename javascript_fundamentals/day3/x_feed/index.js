const contentContainer = document.getElementById("content-container");
const commentModal = document.getElementById("comment-modal");
const modalComments = document.getElementById("modal-comments");
const closeModal = document.getElementById("close-modal");

closeModal.addEventListener("click", () => {
    commentModal.classList.add("hidden");
    modalComments.innerHTML = "";
});

const getUsername = async (userId) => {
    try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
        const user = await res.json();
        return user.username;
    } catch (error) {
        console.log(error);
        return "Unknown";
    }
};

const fetchSingleComment = async (postId) => {
    try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
        const comments = await res.json();
        return comments.length > 0 ? comments[0] : null;
    } catch (error) {
        console.log(error);
        return null;
    }
};

const fetchAllComments = async (postId) => {
    try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
        const comments = await res.json();
        return comments;
    } catch (error) {
        console.log(error);
        return [];
    }
};

const fetchPosts = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const posts = await response.json();

        for (const post of posts) {
            const username = await getUsername(post.userId);
            const comment = await fetchSingleComment(post.id);

            const postDiv = document.createElement("div");
            postDiv.className = "p-4 bg-gray-100 rounded-xl shadow";

            postDiv.innerHTML = `
                <div class="flex flex-row gap-4 items-center mb-2 cursor-pointer user-link" data-user-id="${post.userId}">
                    <span class="h-[50px] w-[50px] bg-gray-300 rounded-full flex items-center justify-center">👤</span>
                    <span class="font-bold">${username}</span>
                </div>
                <h2 class="font-semibold mb-2">${post.title}</h2>
                <p class="mb-3">${post.body}</p>
                ${comment ? `<div class="pl-4 border-l-4 border-emerald-400 mb-2">
                    <p class="text-sm italic text-gray-600">💬 "${comment.body.split(0, 200) + "..."}"</p>
                </div>` : ''}
                <button data-post-id="${post.id}" class="view-comments bg-emerald-500 text-white px-3 py-1 rounded-full hover:bg-emerald-600 transition-all">View all comments</button>
            `;

            contentContainer.appendChild(postDiv);

            const userLink = postDiv.querySelector(".user-link");
            userLink.addEventListener("click", () => {
                const userId = userLink.getAttribute("data-user-id");
                window.location.href = `/profile.html?userId=${userId}`;
            });

            const commentBtn = postDiv.querySelector(".view-comments");
            commentBtn.addEventListener("click", async () => {
                const postId = post.id
                const allComments = await fetchAllComments(postId);

                modalComments.innerHTML = allComments.map(c =>
                    `<div class="p-3 border-b border-gray-200">
                    <div class="flex flex-row gap-5 items-center">
                    <span class="h-[30px] w-[30px] bg-gray-300 rounded-full flex items-center justify-center">👤</span>
                    <div class="flex flex-col">
                    <p class="font-semibold">${c.name}</p>
                    <span class="text-sm text-gray-500">(${c.email})</span>
                    
                    </div>

                        </div>
                        <p>${c.body}</p>
                    </div>`).join("")


                commentModal.classList.remove("hidden");
            });
        }
    } catch (error) {
        console.error("Error fetching posts:", error);
    }
};

fetchPosts();