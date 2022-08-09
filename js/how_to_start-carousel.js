(function(){
    let currentStartSlide = 0;
    showSlides();
    renderHowToStartCarousel();
    function showSlides() {
        let i;
        let slides = document.getElementsByClassName("start_photo_slides");
        for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
        }
        currentStartSlide++;
        if (currentStartSlide > slides.length) { currentStartSlide = 1 }
        
        slides[currentStartSlide - 1].style.display = "block";
       
        setTimeout(showSlides, 3000);
      }

    
    function renderHowToStartCarousel() {
        const start__slideContainer = document.querySelector('.start__slideshow');
        start__slideContainer.innerHTML = start_slides[currentStartSlide];
        
    }
    function prevStart() {
        currentStartSlide = currentStartSlide - 1 < 0 ? start_slides.length - 1 : currentStartSlide + 1;
        renderHowToStartCarousel();
    }

    function nextStart() {
        currentStartSlide = currentStartSlide + 1 >= start_slides.length ? 0 : currentStartSlide + 1;
        renderHowToStartCarousel();
    }


const prevButton = document.querySelector('.start__slideshow__btn-prev');
prevButton.addEventListener('click', prev);
const nextButton = document.querySelector('.start__slideshow__btn-next');
nextButton.addEventListener('click', next);



})();