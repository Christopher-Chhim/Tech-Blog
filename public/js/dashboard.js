let postForm = document.querySelector("#postForm");

let createPost = async (event) => {
event.preventDefault();
let title = document.getElementById('title').value;
let content = document.getElementById('content').value.trim();

if (content && title) {
    const response = await fetch("/api/posts", {
        method: 'POST',
        body: JSON.stringify({ content, title }),
        headers: { 'Content-Type': 'application/json'},
    })
    if (response.ok){
        document.location.reload();
    } else {
      alert('Failed to load posts.');
    }
}

}

postForm.addEventListener("submit", createPost);