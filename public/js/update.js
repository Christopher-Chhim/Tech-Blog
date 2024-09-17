let updateForm = document.querySelector("#updateForm");

let updatePost = async (event) => {
event.preventDefault();
let title = document.getElementById('title').value;
let content = document.getElementById('content').value.trim();
let blogId = updateForm.getAttribute('data-blog-id');

if (content && title) {
    const response = await fetch("/api/posts", {
        method: 'PUT',
        body: JSON.stringify({ content, title, blogId }),
        headers: { 'Content-Type': 'application/json'},
    })
    if (response.ok){
        document.location.reload();
    } else {
      alert('Failed to load posts.');
    }
}

}

updateForm.addEventListener("submit", updatePost);