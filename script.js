document.addEventListener('DOMContentLoaded',()=>{

    const icons = document.getElementsByClassName('material-icons');
    const array = Array.from(icons);
    const counter = document.getElementsByClassName('counter');
    const counters = Array.from(counter);
    const prof = document.getElementsByClassName('profile-icon');
    const profile = Array.from(prof);


    function getRandomColor() {
        const r = Math.floor(Math.random() * 256); // Red value between 0 and 255
        const g = Math.floor(Math.random() * 256); // Green value between 0 and 255
        const b = Math.floor(Math.random() * 256); // Blue value between 0 and 255
        return `rgb(${r}, ${g}, ${b})`;}
    
profile.forEach((element) => {
    element.style.backgroundColor=getRandomColor();
})

    array.forEach((element,index) => {
        element.addEventListener('click',()=>{
            counters[index].innerHTML++;
            element.classList.toggle('active')
            setTimeout(() => {
                element.classList.remove('active')
                        }, 400);
                
        });
        
    });
});