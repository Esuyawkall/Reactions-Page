
document.addEventListener('DOMContentLoaded', function() {
    const posts = document.querySelectorAll('.col-span-3');
    const iconsBars = document.querySelectorAll('.icons');
    const grid1 = document.getElementById('grid1');
    const grid2 = document.getElementById('grid2');
    const w50 = document.querySelector('#w50');
    const w51 = document.querySelector('#w51');
    const container = document.getElementsByClassName('container');

    const postComment = document.getElementById('post');
    const comment = document.getElementById('comment');
    const comments = document.getElementById('comments');
    const comment1 = document.getElementById('comment1');
    
    const popup = document.querySelector('#sharePopup');
    const closePopup = document.querySelector('#closePopup');

    const titleContainer = document.querySelectorAll('.titleContainer')

    posts.forEach((post, index) => {
        const iconsBar = iconsBars[index];
        const icons = Array.from(iconsBar.querySelectorAll('.icon'));
        post.addEventListener('mouseover', () => {
            iconsBar.classList.add('active');
        });

        post.addEventListener('mouseout', () => {
            iconsBar.classList.remove('active');
        });

        icons.forEach(element => {
            element.addEventListener('click', () => {

                const counter = element.nextElementSibling; 
                    let currentCount = parseInt(counter.textContent, 10);                
                    const parentDiv = element.closest('#w50') || element.closest('#w51');

                    if (element.classList.contains('heart')) {
                        if (element.getAttribute('fill') === 'red') {
                            element.setAttribute('fill', '');
                            counter.textContent = currentCount - 1;}
                        else{
                        element.setAttribute('fill', 'red');
                        counter.textContent = currentCount + 1;}
                        }
                    else if (element.classList.contains('comment')) {
                        const gridToShow = parentDiv.id === 'w50' ? grid1 : grid2; 
                        const wDivToAdjust = parentDiv.id === 'w50' ? w50 : w51;

                        const childDiv = element.closest('.container');
                        const contToAdjust = childDiv.id === 'container1' ? container[0] : container[1];

                        const close =  wDivToAdjust.querySelector('.close');
                        
                            gridToShow.classList.replace('hidden', 'flex');
                            gridToShow.classList.add('col-span-2');
                            wDivToAdjust.classList.replace('w-[30vw]', 'w-[50vw]');
                            contToAdjust.classList.replace('grid-cols-3','grid-cols-5');

                        close.addEventListener('click',()=>{
                            gridToShow.classList.replace('flex', 'hidden');
                            gridToShow.classList.remove('col-span-2');
                            wDivToAdjust.classList.replace('w-[50vw]', 'w-[30vw]');
                            contToAdjust.classList.replace('grid-cols-5','grid-cols-3');
                            });
                        
                        postComment.addEventListener('click',()=>{
                            if(comment.value){
                            let com = comment.value;

                            const newComment = comment1.cloneNode(true);
                            newComment.textContent=com;

                            const time = document.createElement('span');
                            time.textContent = new Date().toLocaleTimeString([],{hour:'2-digit',minute:'2-digit',});
                            time.classList.add('absolute', 'bottom-0','right-0', 'text-xs', 'text-gray-500', 'p-2');

                             newComment.appendChild(time);

                            comments.appendChild(newComment);
                            comment.value=''}
                        });
                        }
                    else{
                        popup.classList.replace('hidden','fixed');
                        popup.classList.add('flex')
                        closePopup.addEventListener('click',()=>{
                            popup.classList.replace('fixed','hidden');
                        })
                        }
                    element.classList.add('animate-like');
                        setTimeout(() => {
                        element.classList.remove('animate-like');
                    }, 600);
                })
            });
        });

        titleContainer.forEach(element => {
            element.addEventListener('click',()=>{
                window.location.href='profile.html';
            })
        });


        function getRandomImageUrl(width, height) {
            return `https://picsum.photos/${width}/${height}?random=${Math.random()}`;
          }
          
          const images = document.querySelectorAll('img');
          images.forEach(img => {
            const width = img.width || 200; 
            const height = img.height || 300;
            
            img.src = getRandomImageUrl(width, height);
            img.classList.add('cursor-pointer');
          });
    });
