(function () {

    const slides = [
        `<div class="slides">
        <img src="img/img_women_run.png" alt="Run women">
        </div>`,
        `<div class="slides" >
        <img src="img/img_women_ex.png" alt="Women exercise">
        </div>`,
        `<div class="slides" >
        <img src="img/img_women.png" alt="Women with coach">
        </div>`,
        `<div class="slides" >
        <img src="img/img_people.png" alt="People in training">
        </div>`,
        `<div class="slides" >
        <img src="img/img_atribute.png" alt="Atribute">
        </div>`
    ];

    let currentSlideIdx = 0;

    function renderCarousel(){
        const slideContainer = document.querySelector('.lets_get__carousel_slides');
        slideContainer.innerHTML = slides[currentSlideIdx];
        if (window.innerWidth >200) {
            const secondSlideidx = currentSlideIdx + 1 >= slides.length ? 0 : currentSlideIdx + 1;
            slideContainer.innerHTML += slides[secondSlideidx];
            if (window.innerWidth >350) {
            const thirdSlideidx = secondSlideIdx + 1 >= slides.length ? 0 : secondSlideIdx + 1;
            slideContainer.innerHTML += slides[thirdSlideidx];
            }
            if (window.innerWidth >500) {
                const forthSlideidx = thirdSlideidx + 1 >= slides.length ? 0 : thirdSlideidx + 1;
                slideContainer.innerHTML += slides[forthSlideidx];
                }
        }
    }

    function next() {
        currentSlideIdx = currentSlideIdx + 1 >= slides.length ? 0 : currentSlideIdx + 1;
        renderCarousel();
    }
    function prev() {
        currentSlideIdx = currentSlideIdx - 1 < 0 ? slides.length - 1 : currentSlideIdx - 1;
        renderCarousel();
    }
    
    const nextButton = document.querySelector('.lets_get__carousel_btn-next');
    nextButton.addEventListener('click', next);
    
    const prevButton = document.querySelector('.lets_get__carousel_btn-prev');
    prevButton.addEventListener('click', prev);

    renderCarousel();

    window.addEventListener('resize', renderCarousel);

}) ();