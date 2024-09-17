const commentForm = document.querySelector('#add-comment');

const createComment = async (event) => {
event.preventDefault();
let content = document.getElementById('content').value;
let postId = commentForm.getAttribute("data-post-id");

if (content) {
    const response = await fetch("/api/comments", {
        method: 'POST',
        body: JSON.stringify({ content, postId }),
        headers: { 'Content-Type': 'application/json'},
    })
    if (response.ok){
        document.location.reload();
    } else {
      alert('Failed to post comment.');
    }
}
}


commentForm.addEventListener("submit", createComment);