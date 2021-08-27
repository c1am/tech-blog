const createNewPostHandler = async(event) => {
    console.log("submit");
    event.preventDefault();

    const title = document.querySelector('#createPostTitle').value;
    const content = document.querySelector('#createPostContent').value;

    if (title && content) {
    const response = await fetch(`/api/posts`, {
      method: 'POST',
      body: JSON.stringify({
        title,
        content
      }),

      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (response.ok) {
      console.log("successful post");
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
};

document.querySelector('.postForm').addEventListener('submit', createNewPostHandler);