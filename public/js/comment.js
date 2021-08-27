  
async function commentFormHandler(event) {
    event.preventDefault();
  
    const comment = document.querySelector('#createComment').value.trim();
  
    const postId = window.location.toString().split('/').slice(-1)[0];
  
    if (comment && postId) {
      const response = await fetch('/api/comments', {
        method: 'POST',
        body: JSON.stringify({postId, comment}),
        headers: {'Content-Type': 'application/json'}
      });
      
      if (response.ok) {
        document.location.reload();
      } else {
        alert(response.statusText);
      }
    }
  };
  
  document.querySelector('.commentForm').addEventListener('submit', commentFormHandler);