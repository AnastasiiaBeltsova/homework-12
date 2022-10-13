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

        next.addEventListener('click', function () {
            const activeItem = list.querySelector('.active');
            this.changeItem ({
                active: activeItem, 
                newElement: activeItem.nextElementSibling
            });
        });

        prev.addEventListener('click', function () {
            const activeItem = list.querySelector('.active');
            this.changeItem({
                active: activeItem,
                newElement: activeItem.previousElementSibling
            });
        });

        
    }
    
    const slider = new Slider('.js--slider__prev', '.js--slider__next', '.js--list');
    // slider.changeItem();
    console.log(slider);
})


