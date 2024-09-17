document.addEventListener('DOMContentLoaded',()=>{

    const icons = document.getElementsByClassName('material-icons');
    const array = Array.from(icons);
    const counter = document.getElementsByClassName('counter');
    const counters = Array.from(counter);
    const cont = document.getElementsByClassName('icon-container');
    const container = Array.from(cont);

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