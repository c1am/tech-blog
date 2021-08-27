const deletePostHandler = async(event) => {
    event.preventDefault();

    console.log("delete post handler start");

    const id=window.location.toString().split('/').slice(-1)[0];

    if (id) {
        const response = await fetch (`/api/posts/${id}`, {
            method: 'DELETE'
        });

        if (response.ok) {
            document.location.replace('/dashboard');
            
            console.log("delete post handler end, redirected to dashboard")

        } else {
            alert(response.statusText);
        }
    }
};

document.querySelector('#deletePostBtn').addEventListener('click', deletePostHandler);