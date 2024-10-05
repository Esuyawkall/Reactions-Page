document.addEventListener('DOMContentLoaded', function() {
    const iconsBar = document.querySelector('.icons');
    const post = document.querySelector('.col-span-3')
    const array = document.querySelectorAll('.icon');
    const icons = Array.from(array);
    const container = document.querySelector('main');
    const grid2 = document.getElementById('grid2');
    const w50 = document.getElementById('w50');

    post.addEventListener('mouseover',()=>{
        iconsBar.classList.add('active');
    });
    post.addEventListener('mouseout',()=>{
        iconsBar.classList.remove('active');
    })
    icons.forEach(element => {
        element.addEventListener('click',()=>{
            if(element.getAttribute('fill')==='red'){
                element.setAttribute('fill','')
            }
            else{
                if(element.id==='heart'){
                element.setAttribute('fill','red')}
                else if(element.id===('comment')){
                    if(grid2.classList.contains('hidden')){
                    grid2.classList.replace('hidden','flex');
                    grid2.classList.add('col-span-2');
                    container.classList.replace('grid-cols-3','grid-cols-5');                    
                    w50.classList.replace('w-[30vw]','w-[50vw]');}
                    else{
                        grid2.classList.replace('flex','hidden');
                    grid2.classList.remove('col-span-2');
                    container.classList.replace('grid-cols-5','grid-cols-3');                    
                    w50.classList.replace('w-[50vw]','w-[30vw]');
                    }
                    
                };
            element.classList.add('animate-like');
            setTimeout(() => {
                element.classList.remove('animate-like');}, 600);
            }
        })
    });
});
// const toggleBtn = document.getElementById('toggleBtn');
//         const container = document.getElementById('container');
//         const content = document.getElementById('content');

//         toggleBtn.addEventListener('click', () => {
//             // Toggle the layout class
//             content.classList.toggle('grid-cols-1');
//             content.classList.toggle('grid-cols-5');

//             // Change the width of the container
//             if (content.classList.contains('grid-cols-1')) {
//                 container.classList.remove('md:w-[50vw]');
//                 container.classList.add('w-full');
//             } else {
//                 container.classList.remove('w-full');
//                 container.classList.add('md:w-[50vw]');
//             }
//         });