 const slides = [
        `<div class="slide__icon">
            <img scr = "img/bicycle.svg" alt="Bicycle">
        </div>`,
         `<div class="slide__icon">
         <img src="img/diet-food.svg" alt="Diet Food">
        </div>`,
        `<div class="slide__icon">
        <img src="img/sportwoman.svg" alt="Women training">
        </div>`,
        `<div class="slide__icon">
        <img src="img/checklist.svg" alt="checklist">
        </div>`,
    ];

    let currentSlideIdx = 0;

    function renderCarousel() {
        const slideContainer = document.querySelector('benefits__carousel__slides');
        slideContainer.innerHTML = slides [currentSlideIdx];
    }

    function nextSlide() {
        currentSlideIdx = currentSlideIdx + 1 >= slides.length ? 0 : currentSlideIdx + 1;
        renderCarousel ();
    }
    // setInterval (next, 3000);
    renderCarousel();



