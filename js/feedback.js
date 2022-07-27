
(function () {

const carouselItem = [
    `<div class="carousel__feedback__item">
           <div class="carousel-feedback-el active">
              <img class="feedback_img" src="img/feedback.svg" alt="quote" />
              <h2 class="feedback_heading">
                “FitB has a well-equipped gym with everything I need for my
                workouts. Also, the staff is very welcoming and nice, so I
                really like attending this place.”
              </h2>
              <p class="feedback_text">Jane Williams</p>
              <p class="feedback__small-text">March 12, 2021</p>
            </div>
          </div>
          <div class="carousel__feedback__item">
            <div class="carousel-feedback-el active">
              <img class="feedback_img" src="img/feedback.svg" alt="quote" />
              <h2 class="feedback_heading">
                “Nothing beats feeling refreshed after a good workout in a
                fitness club! FitB is my choice as they have many fitness
                programs and individual training sessions.”
              </h2>
              <p class="feedback_text">Eric Flanders</p>
              <p class="feedback__small-text">November 03, 2021</p>
            </div>
          </div>
          <button class="feedback__btn-right">
            <span class="feedback__btn_span">
              <img class="fdb_arrow" src="img/feedback-right-arrow.svg" alt="scroll arrow" />
            </span>
          </button>
          <button class="feedback__btn-left">
            <span class="feedback__btn_span">
              <img class="fdb_arrow" src="img/feedback-left-arrow.svg" alt="scroll arrow" />
            </span>
          </button>`
          ];
    
    let itemIndex = 0; 

    function feedbackCarousel (){
        const carouselContainer = document.querySelector('.carousel_controls');
        carouselContainer.innerHTML = carouselItem[itemIndex];
    }
    function next (){
        itemIndex = itemIndex + 1 >= carouselItem.length ? 0 : itemIndex + 1;
        feedbackCarousel();
    }
    function previous (){
        itemIndex = itemIndex - 1 <0 ? carouselItem.length - 1 : itemIndex - 1;
        feedbackCarousel();
    }

    const nextButton = document.querySelector('.feedback__btn-right');
    nextButton.addEventListener('click', next);

    const previousButton = document.querySelector('.feedback__btn-left');
    nextButton.addEventListener('click', previous);

    feedbackCarousel();
          }) ();


// nextButton.addEventListener ("click", () => {
//     const feedbckWidth = carouselItem.clientWidth;
//     feedbackCarousel.scrollLeft += feedbckWidth;
// })

// prevButton.addEventListener ("click", () => {
//     const feedbckWidth = carouselItem.clientWidth;
//     feedbackCarousel.scrollLeft -= feedbckWidth;
// })