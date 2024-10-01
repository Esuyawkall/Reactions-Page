document.addEventListener('DOMContentLoaded',()=>{

    const icons = document.getElementsByClassName('material-icons');
    const array = Array.from(icons);
    const counter = document.getElementsByClassName('counter');
    const counters = Array.from(counter);
    const prof = document.getElementsByClassName('title');
    const icon1 = document.getElementsByClassName('profile-icon');
    const icon = Array.from(icon1);
    const profile = Array.from(prof);
    const popup = document.getElementById('popup');
    const close = document.getElementById('close');
    const image = document.getElementsByClassName('image');
    const images = Array.from(image);

    function getRandomColor() {
        const r = Math.floor(Math.random() * 256); 
        const g = Math.floor(Math.random() * 256); 
        const b = Math.floor(Math.random() * 256); 
        return `rgb(${r}, ${g}, ${b})`;}

profile.forEach((element) => {
    element.addEventListener('click',()=>{
        const x = element.textContent.trim().split(/\s+/).filter(word => word.length > 1)[0] || '';
        localStorage.setItem('newPostContent', x);
        window.location.href='profile.html';        
    });
})
    icon.forEach((element,index)=>{
        element.style.backgroundColor=getRandomColor();
        let iconLetter = String(profile[index].textContent);
        let iconLetterw = iconLetter.trim().charAt(0) || '';        
        element.textContent= iconLetterw;
        localStorage.setItem('newIcon',iconLetterw);
    })
    array.forEach((element,index) => {
        element.addEventListener('click',()=>{
            if(element.classList.contains('share-icon')){
                popup.style.display='flex'; 
    }
            counters[index].innerHTML++;
            element.classList.toggle('active')
            setTimeout(() => {
                element.classList.remove('active')
                        }, 400);
        });
    });
    images.forEach(element => {
        let randomNum = Math.floor(Math.random() * 1000);
        element.setAttribute('src',`https://picsum.photos/580/700?random=${randomNum}`);

    });
    close.addEventListener('click',()=>{
        popup.style.display = 'none'
    })
});