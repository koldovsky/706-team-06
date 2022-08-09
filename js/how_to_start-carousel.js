(function(){
    const start_slides = [
        `<div class='start_photo_slides'>
            <img src = 'img/girls-training.png' alt ='Girls training at gym.'/>
        </div>`,
        `<div class='start_photo_slides'>
            <img src = 'img/girls-training-alone.png' alt ='Girls at alone training.'/>
        </div>`,
        `<div class='start_photo_slides'>
        <img src = 'img/girls-streching.png' alt ='Two girls streching at gym.'/>
    </div>`
    ];

    let currentStartSlide = 0;
    function renderHowToStartCarousel() {
        const start__slideContainer = document.querySelector('.start__carousel-slides');
        start__slideContainer.innerHTML = start_slides[currentStartSlide];
        
    }

function nextStart() {
    currentStartSlide = currentStartSlide + 1 >= start_slides.length ? 0 : currentStartSlide + 1;
}

//setInterval(nextStart, 3000);
const nextButton = document.querySelector('.start__carousel__btn-prev');
nextButton.addEventListener('click', next);
renderHowToStartCarousel();

})();