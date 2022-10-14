document.addEventListener('DOMContentLoaded', function () {
    function Slider() {

        const prev = document.querySelector('.js--slider__prev');
        const next = document.querySelector('.js--slider__next');
        const list = document.querySelector('.js--list');

        this.length = list.querySelectorAll('li').length;

        this.changeItem = function ({ active, newElement }) {
            if (newElement) {
                active.classList.remove('active');
                newElement.classList.add('active');
            };
        };

        next.addEventListener('click', () => {
            const activeItem = list.querySelector('.active');
            this.changeItem ({
                active: activeItem, 
                newElement: activeItem.nextElementSibling
            });
            const last = list.querySelector('.last');
            if (activeItem.nextElementSibling === last || activeItem.nextElementSibling === null) {
                next.classList.add('disabled');
            } else {
                prev.classList.remove('disabled');
            }
        });

        prev.addEventListener('click', () => {
            const activeItem = list.querySelector('.active');
            const first = list.querySelector('.first');
            this.changeItem ({
                active: activeItem,
                newElement: activeItem.previousElementSibling
            });
            if (activeItem.previousElementSibling === first || activeItem.previousElementSibling === null) {
                prev.classList.add('disabled');
            } else {
                next.classList.remove('disabled');
            }
        });
    }
    
    const slider = new Slider('.js--slider__prev', '.js--slider__next', '.js--list');
    console.log(slider);
})


