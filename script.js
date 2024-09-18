document.addEventListener('DOMContentLoaded',()=>{

    const icons = document.getElementsByClassName('material-icons');
    const array = Array.from(icons);
    const counter = document.getElementsByClassName('counter');
    const counters = Array.from(counter);
    const prof = document.getElementsByClassName('profile-icon');
    const profile = Array.from(prof);
    const popup = document.getElementById('popup');
    const close = document.getElementById('close');



    function getRandomColor() {
        const r = Math.floor(Math.random() * 256); 
        const g = Math.floor(Math.random() * 256); 
        const b = Math.floor(Math.random() * 256); 
        return `rgb(${r}, ${g}, ${b})`;}
    
profile.forEach((element) => {
    element.style.backgroundColor=getRandomColor();
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
    close.addEventListener('click',()=>{
        popup.style.display = 'none'
    })
});