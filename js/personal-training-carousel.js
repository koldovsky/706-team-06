// function () {
const carouselBenefit = [
    `<div class="main__benefits">
        <img src="img/bicycle.svg" alt="Bicycle" class="main__picture-bicycle benefits-icon" />
        <h2 class="main__picture-title-benefits">FULLY EQUIPPED GYM</h2>
        <p class="main__text-block-benefits">
          Our spacious gym is suitable for group lessons and has all the
          necessary equipment.
        </p>
      </div>`,
    `<div class="main__benefits">
         <img src="img/diet-food.svg" alt="Diet Food" class="main__picture-dietfood benefits-icon" />
         <h2 class="main__picture-title-benefits">SELECT YOUR ACTIVITY</h2>
         <p class="main__text-block-benefits">
           Choose the activities which suit you and don't pay for the
           unnecessary ones.
         </p>
       </div>`,
    `<div class="main__benefits">
        <img src="img/sportwoman.svg" alt="Women training" class="main__picture-sportwoman benefits-icon" />
        <h2 class="main__picture-title-benefits">OPEN FOR ANYONE</h2>
        <p class="main__text-block-benefits">
          Whatever your fitness level is, you can attend our fitness classes
          at any time.
        </p>
      </div>`,
    `<div class="main__benefits">
        <img src="img/checklist.svg" alt="checklist" class="main__picture-checklist benefits-icon" />
        <h2 class="main__picture-title-benefits">FLEXIBLE PRICES</h2>
        <p class="main__text-block-benefits">
          You can select a training plan, instructor, and schedule suitable
          for you.
        </p>
      </div>`,
];

let currentSlideIdx = 0;

function benefitsCarousel() {
    const slideContainer = document.querySelector('benefits__carousel__slides');
    slideContainer.innerHTML = slides[currentSlideIdx];
}

function next() {
    currentSlideIdx = currentSlideIdx + 1 >= slides.length ? 0 : currentSlideIdx + 1;
    benefitsCarousel();
}
function previous() {
    itemIndex = itemIndex - 1 < 0 ? carouselItem.length - 1 : itemIndex - 1;
    benefitsCarousel;
}
const nextButton = document.querySelector('.benefit__carousel__btn-right');
nextButton.addEventListener('click', next);

const previousButton = document.querySelector('.benefit__carousel__btn-left');
previousButton.addEventListener('click', previous);

benefitsCarousel();
// };


