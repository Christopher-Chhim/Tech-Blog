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

const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id-delete')) {
      const id = event.target.getAttribute('data-id-delete');
  
      const response = await fetch(`/api/posts/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to delete post');
      }
    }
  };
  
  document
    .querySelectorAll('.delete-btn').forEach(button => {
    button.addEventListener('click', delButtonHandler);
    });
    
postForm.addEventListener("submit", createPost);