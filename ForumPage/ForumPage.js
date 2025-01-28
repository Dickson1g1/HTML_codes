document.getElementById('forumPostForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const topic = document.getElementById('topic').value;
    const message = document.getElementById('message').value;

    const postContainer = document.createElement('div');
    postContainer.classList.add('post');

    postContainer.innerHTML = `
        <h3>${topic}</h3>
        <p><strong>Posted by:</strong> ${username}</p>
        <p>${message}</p>
    `;

    document.querySelector('.forum-posts').appendChild(postContainer);

    // Clear the form
    document.getElementById('forumPostForm').reset();
});