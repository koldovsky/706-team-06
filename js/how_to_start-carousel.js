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

})();