const editPostHandler = async (event) => {
    event.preventDefault();
  
    const id = window.location.toString().split('/').slice(-1)[0];
    const content = document.querySelector('#editPostContent').value.trim();
    const title = document.querySelector('#editPostTitle').value.trim();
    
    if (title && content && id) {
      const response = await fetch(`/api/posts/${id}`, {
        method: 'PUT',
        body: JSON.stringify({ title, content }),
        headers: { 'Content-Type': 'application/json' }
      });
  
      if (response.ok) {
        document.location.replace(`/dashboard`);
      } else {
        alert(response.statusText);
      }
    }
  };
  
  document.querySelector('#updatePostBtn').addEventListener('click', editPostHandler);