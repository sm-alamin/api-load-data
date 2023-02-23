function loadBlogData(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data =>displayBlogData(data))
}
function loadCommentData(){
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(data =>displayCommentData(data))
}
function loadImageData(){
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then(res => res.json())
    .then(data =>displayImageData(data))
}

