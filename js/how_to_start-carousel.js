(function(){

const start_slides = [
    <><div class='start_photo_slides'>
        <img src="img/girls-training-in-gym.png" alt="Girls training in the gym." />
    </div>
    <div class='start_photo_slides'>
        <img src='img/aqaprogram.png' alt='Aqa program'/>
    </div>
    <div class='start_photo_slides'>
        <img src = 'img/aqaprogram.png' alt ='Aqa program'/>
    </div></>

];

let currentStartSlide = 0;
function renderHowToStartCarousel() {
    const startContainer = document.querySelector('.start__carousel-slides');
    startContainer.innerHTML = start_slides[currentStartSlide];
}

function nextStart() {
    currentStartSlide = currentStartSlide + 1 >= start_slides.length ? 0 : currentStartSlide + 1;
}

setInterval(nextStart, 3000);

})();