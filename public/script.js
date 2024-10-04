document.addEventListener('DOMContentLoaded', function() {
    const iconsBar = document.querySelector('.icons');
    const post = document.querySelector('.col-span-3')
    const array = document.querySelectorAll('.icon');
    const icons = Array.from(array);

    post.addEventListener('mouseover',()=>{
        iconsBar.classList.add('active');
    });
    post.addEventListener('mouseout',()=>{
        iconsBar.classList.remove('active');
    })
    // icons.forEach(element => {
    //     element.addEventListener('click',()=>{
    //         element.setAttribute('fill','red');
    //         element.classList.add('liked');
    //     })
    // });
});
