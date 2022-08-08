(function(){

    let currentStartSlide = 0;
function renderHowToStartCarousel() {
    
    let start_slides = document.getElementsByClassName("start_photo_slides");
    const startContainer = document.querySelector('.start__carousel-slides');
    startContainer.innerHTML = start_slides[currentStartSlide];
    for (currentStartSlide = 0; currentStartSlide <start_slides.length; currentStartSlide++) {
        start_slides[currentStartSlide].style.display ="none";
    }
    currentStartSlide++;

    start_slides[currentStartSlide - 1].style.display ="block";
}

function nextStart() {
    currentStartSlide = currentStartSlide + 1 >= start_slides.length ? 0 : currentStartSlide + 1;
}

setInterval(nextStart, 3000);
renderHowToStartCarousel();

})();