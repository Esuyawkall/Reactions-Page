document.addEventListener('DOMContentLoaded', function() {
    const posts = document.querySelectorAll('.col-span-3');
    const iconsBars = document.querySelectorAll('.icons');
    const grid1 = document.getElementById('grid1');
    const grid2 = document.getElementById('grid2');
    const w50 = document.querySelector('#w50');
    const w51 = document.querySelector('#w51');
    const container = document.getElementsByClassName('container');

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
                if (element.getAttribute('fill') === 'red') {
                    element.setAttribute('fill', '');
                } else {
                    const parentDiv = element.closest('#w50') || element.closest('#w51');

                    if (element.classList.contains('heart')) {
                        element.setAttribute('fill', 'red');
                    } else if (element.classList.contains('comment') && parentDiv) {
                        const gridToShow = parentDiv.id === 'w50' ? grid1 : grid2; 
                        const wDivToAdjust = parentDiv.id === 'w50' ? w50 : w51;

                        if (gridToShow.classList.contains('hidden')) {
                            gridToShow.classList.replace('hidden', 'flex');
                            gridToShow.classList.add('col-span-2');
                            wDivToAdjust.classList.replace('w-[30vw]', 'w-[50vw]');
                            container[0].classList.replace('grid-cols-3','grid-cols-5');
                        } else {
                            gridToShow.classList.replace('flex', 'hidden');
                            gridToShow.classList.remove('col-span-2');
                            wDivToAdjust.classList.replace('w-[50vw]', 'w-[30vw]');
                            container[0].classList.replace('grid-cols-5','grid-cols-3');
                        }
                    }

                    element.classList.add('animate-like');
                    setTimeout(() => {
                        element.classList.remove('animate-like');
                    }, 600);
                }
            });
        });
    });
});
