function displayBlogData(posts,thumbnailUrl){
    const postContainer = document.getElementById('post-container');
    for (const post of posts) {
        const div = document.createElement('div');
        const {title, body} =post;
        div.innerHTML =`
        <div class="card shadow border p-5 m-3 text-center hover:bg-purple-800 h-full">
            <h2 class="text-green-500 text-3xl">${title}</h2>
            <p class=" text-orange-600 my-4">${body}</p>
            <button class="px-5 py-2 bg-gray-500 text-white">Details</button>
        </div>
        `
        postContainer.appendChild(div);
    }
}
function displayCommentData(comments){
    const postContainer = document.getElementById('post-container');
    for (const comment of comments) {
        const div = document.createElement('div');
        const {name,email,body} = comment;
        div.innerHTML =`
        <div class="card shadow border p-5 m-3 text-center hover:bg-purple-800 h-full">
            <h2 class="text-green-500 text-3xl">${name}</h2>
            <h2 class="text-gray-500 text-3xl">${email}</h2>
            <p class=" text-orange-600 my-4">${body}</p>
            <button class="px-5 py-2 bg-gray-500 text-white">Details</button>
        </div>
        `
        postContainer.appendChild(div);
    }
}

function displayImageData(images){
    const postContainer = document.getElementById('post-container');
    for (const image of images) {
        const div = document.createElement('div');
        const {title,thumbnailUrl} =image;
        div.innerHTML =`
        <div class="card shadow border p-5 m-3 text-center hover:bg-purple-800">
            <h2 class="text-green-500 text-3xl">${title}</h2>
            <img src =${thumbnailUrl} />
            <button class="px-5 py-2 bg-gray-500 text-white">Details</button>
        </div>
        `
        postContainer.appendChild(div);
    }
    
}
