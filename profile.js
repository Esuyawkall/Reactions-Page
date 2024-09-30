document.addEventListener('DOMContentLoaded', () => {
    const newPostContent = localStorage.getItem('newPostContent');
    const image = document.getElementsByClassName('photo');
    const images = Array.from(image);
    const username = document.getElementById('Username');
    const profile = document.getElementById('profile-pic');
    const newIcon =  newPostContent[0];

   images.forEach(element => {
        let randomNum = Math.floor(Math.random() * 1000);
        element.setAttribute('src',`https://picsum.photos/300/300?random=${randomNum}`);

    });

        profile.innerHTML= newIcon;
        const newPost = document.createElement('div');
        newPost.innerHTML = newPostContent;
        username.appendChild(newPost);
        
        localStorage.removeItem('newPostContent');
    
});