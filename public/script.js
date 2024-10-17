
document.addEventListener('DOMContentLoaded', function() {
    const posts = document.querySelectorAll('.col-span-3');
    const iconsBars = document.querySelectorAll('.icons');
    const grid1 = document.getElementById('grid1');
    const grid2 = document.getElementById('grid2');
    const w50 = document.querySelector('#w50');
    const w51 = document.querySelector('#w51');
    const container = document.querySelectorAll('.container');

    const postComment = document.querySelectorAll('.postComment');
    const comment1 = document.getElementById('comment1');
    
    const popup = document.querySelector('#sharePopup');
    const closePopup = document.querySelector('#closePopup');

    const titleContainer = document.querySelectorAll('.titleContainer');
    const imgUrl = document.getElementById('imgUrl');

    const nightMode = document.getElementById('nightMode');
    
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

                        close.addEventListener('click',closeComments);

                        if(gridToShow.classList.contains('hidden')){
                            gridToShow.classList.replace('hidden', 'flex');
                            gridToShow.classList.add('col-span-2');
                            wDivToAdjust.classList.replace('w-[30vw]', 'w-[50vw]');
                            contToAdjust.classList.replace('grid-cols-3','grid-cols-5');}
                        else{closeComments()}
                        
                        function closeComments(){
                            gridToShow.classList.replace('flex', 'hidden');
                            gridToShow.classList.remove('col-span-2');
                            wDivToAdjust.classList.replace('w-[50vw]', 'w-[30vw]');
                            contToAdjust.classList.replace('grid-cols-5','grid-cols-3');
                            };

                        
                        postComment.forEach(element => {
                        element.addEventListener('click',()=>{
                            
                            const gridToShow = parentDiv.id === 'w50' ? grid1 : grid2; 
                            const comment = gridToShow.querySelector('.comment');
                            const comments = gridToShow.querySelector('.comments');

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
                        });
                        }
                    else{
                        popup.classList.replace('hidden','fixed');
                        popup.classList.add('flex');
                        const wDivToAdjust = parentDiv.id === 'w50' ? w50 : w51;

                        const image = wDivToAdjust.querySelector('.image');                        

                        imgUrl.value= image.getAttribute('src');
                        counter.textContent = currentCount + 1;
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

          nightMode.addEventListener('click',()=>{
            document.body.classList.toggle('bg-black');
            document.body.classList.toggle('text-white');
            container.forEach(element => {
                element.classList.toggle('border')
            });
            if(document.body.classList.contains('bg-black')){
            nightMode.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-10">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                                </svg>`
            }
        else{
            nightMode.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-10">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
                                </svg>`
        }});
    });
