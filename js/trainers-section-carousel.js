(function(){
    const slidesTrainers = [
        `<div class="our-trainers__personal-card">
            <img src="img/trainer-amelia-peterson-photo.png" alt="Photo of our trainer AMELIA PETERSON">
            <p class="personal-card__trainer-name">AMELIA PETERSON</p>
            <p class="personal-card__position">Trainer</p>
            <p class="personal-card__certifications"> Certifications: Certified CPR/AED, Specializing in Strength Training, Olympic Lifting, Experienced in Women’s Strength Training.</p>
        </div>`,
        `<div class="our-trainers__personal-card">
            <img src="img/trainer-steve-hunter-photo.png" alt="Photo of our trainer STEVE HUNTER">
            <p class="personal-card__trainer-name">STEVE HUNTER</p>
            <p class="personal-card__position">Trainer</p>
            <p class="personal-card__certifications"> Certifications: Certified CPR/AED, CrossFit L1, USAW, and CrossFit Judge, Specializes in Weight Loss, Exercise for Runners.</p>
        </div>`,
        `<div class="our-trainers__personal-card">
            <img src="img/trainer-mary-grey-photo.png" alt="Photo of our trainer MARY GREY">
            <p class="personal-card__trainer-name">MARY GREY</p>
            <p class="personal-card__position">Trainer</p>
            <p class="personal-card__certifications"> Certifications: BS in Kinesiology, Minor in Health Sociology, Health &amp; Physical Education Certification K-12. Sign up for individual training!</p>
        </div>`,
        `<div class="our-trainers__personal-card">
            <img src="img/trainer-frank-stone-photo.png" alt="Photo of our trainer FRANK STONE">
            <p class="personal-card__trainer-name">FRANK STONE</p>
            <p class="personal-card__position">Founder/Head Coach</p>
            <p class="personal-card__certifications"> Certifications: Level 1 Fitness Trainer, CrossFit Weightlifting, Active CrossFit Competitor, Specializing in Sports Conditioning.</p>
        </div>`,
        `<div class="our-trainers__personal-card">
            <img src="img/trainer-donald-freeman-photo.png" alt="Photo of our trainer DONALD FREEMAN">
            <p class="personal-card__trainer-name">DONALD FREEMAN</p>
            <p class="personal-card__position">Trainer</p>
            <p class="personal-card__certifications"> Certifications: ACSM Certified Personal Trainer, Weightlifting Level 1 Coach. Specializing in Strength Training, Functional Training.</p>
        </div>`,
        `<div class="our-trainers__personal-card">
            <img src="img/trainer-hank-wilson-photo.png" alt="Photo of our trainer HANK WILSON">
            <p class="personal-card__trainer-name">HANK WILSON</p>
            <p class="personal-card__position">Trainer</p>
            <p class="personal-card__certifications"> Certifications: Muscle Activation Level 1, USAW, and CrossFit Judge. Specializing in Weight Loss, Strength. Individual training sessions are available.</p>
        </div>`
    ];

    let currentSlideTrainersIndx = 0;

    function renderTrainersCaroules() {
        const slideTrainersContainer = document.querySelector('.our-trainers__container-list');
        slideTrainersContainer.innerHTML = slidesTrainers[currentSlideTrainersIndx];
        if (window.innerWidth > 770) {
            const secondSlideTrainersIndx = currentSlideTrainersIndx + 1 >= slidesTrainers.length ? 0 : currentSlideTrainersIndx + 1;
            slideTrainersContainer.innerHTML += slidesTrainers[secondSlideTrainersIndx];
            if(window.innerWidth > 1000){
                const thirdSlideTrainersIndx = secondSlideTrainersIndx + 1 >= slidesTrainers.length ? 0 : secondSlideTrainersIndx + 1;
                slideTrainersContainer.innerHTML += slidesTrainers[thirdSlideTrainersIndx];
            }
        }
    }

    function next() {
        currentSlideTrainersIndx = currentSlideTrainersIndx + 1 >= slidesTrainers.length ? 0 : currentSlideTrainersIndx + 1;
        renderTrainersCaroules();
    }

    function prev() {
        currentSlideTrainersIndx = currentSlideTrainersIndx - 1 < 0 ? slidesTrainers.length - 1 : currentSlideTrainersIndx - 1;
        renderTrainersCaroules();
    }

    const nextButtonTrainersCarousel = document.querySelector('.our-trainers__next-button');
    nextButtonTrainersCarousel.addEventListener('click',next);

    const prevButtonTrainersCarousel = document.querySelector('.our-trainers__prev-button');
    prevButtonTrainersCarousel.addEventListener('click',prev);

    renderTrainersCaroules();

    window.addEventListener('resize', renderTrainersCaroules);



})()