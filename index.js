const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 2183
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4123
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 1521
    }
]

 document.getElementById("post-name").textContent = posts[0].name
 document.getElementById("post-location").textContent = posts[0].location
 document.getElementById("post-avatar").src = posts[0].avatar
 document.getElementById("post-post").src = posts[0].post
 document.getElementById("post-likes").textContent = posts[0].likes + " likes"
 document.getElementById("post-username").textContent = posts[0].username
 document.getElementById("post-comment").textContent = posts[0].comment






