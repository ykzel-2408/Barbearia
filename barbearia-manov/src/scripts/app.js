// src/scripts/app.js

document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const postForm = document.getElementById('post-form');
    const feed = document.getElementById('feed');

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const username = loginForm.username.value;
        // Simulate user authentication
        alert(`Welcome, ${username}!`);
        loginForm.reset();
    });

    postForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const postContent = postForm.content.value;
        const fileInput = postForm.file.files[0];

        const post = document.createElement('div');
        post.classList.add('post');

        const content = document.createElement('p');
        content.textContent = postContent;
        post.appendChild(content);

        if (fileInput) {
            const reader = new FileReader();
            reader.onload = function(e) {
                const media = document.createElement('img');
                media.src = e.target.result;
                media.classList.add('post-media');
                post.appendChild(media);
            };
            reader.readAsDataURL(fileInput);
        }

        feed.appendChild(post);
        postForm.reset();
    });
});