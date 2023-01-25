const postList = document.querySelector('.posts');

export const setupPosts = (data) => {
    if(data.length) {
        let html = ''
        console.log('loop posts')
        data.forEach(doc => {
            const post = doc.data()
            console.log(post)

            const li = `
                <li class="list-group-item list-group-item-action">
                    <h5>${post.title}</h5>
                    <p>${post.content}</p>
                </li>
            `
            html += li
        })

        postList.innerHTML = html
    }
    else {
        postList.innerHTML = '<h1>No posts found, login to see posts<h1>'  
    }
}