(function () {

    const letstartedArr = [
        `<div class="carousel-letstarted-item">
        <div class= "letstarted-img" ><img src="img/letsget1-empty-gym 600x400.png" alt=""></div>
        </div >`,
        `<div class="carousel-letstarted-item">
        <div class= "letstarted-img" ><img src="img/letsget2-woman-powerfit 600x400.png" alt=""></div>
        </div >`,
        `<div class="carousel-letstarted-item">
        <div class= "letstarted-img" ><img src="img/letsget3-group-yoga 600x400.png" alt=""></div>
        </div >`,
        `<div class="carousel-letstarted-item">
        <div class= "letstarted-img" ><img src="img/letsget4-group-spinfit 600x400.png" alt=""></div>
        </div >`,
        `<div class="carousel-letstarted-item">
        <div class= "letstarted-img" ><img src="img/letsget5-woman-yoga 600x400.png" alt=""></div>
        </div >`,
        `<div class="carousel-letstarted-item">
        <div class= "letstarted-img" ><img src="img/letsget6-man-powerfit 600x400.png" alt=""></div>
        </div >`
    ]

    let currentLetstartedArrIdx = 0;

    function renderCarousel() {
        const LetstartedArrContainer = document.querySelector('.letstarted-slides');
        LetstartedArrContainer.innerHTML = letstartedArr[currentLetstartedArrIdx];
        if (window.innerWidth > 600) {
            const secondLetstartedArrIdx = currentLetstartedArrIdx + 1 >= letstartedArr.length ? 0 : currentLetstartedArrIdx + 1;
            LetstartedArrContainer.innerHTML += letstartedArr[secondLetstartedArrIdx];
            if (window.innerWidth > 800) {
                const thirdLetstartedArrIdx = secondLetstartedArrIdx + 1 >= letstartedArr.length ? 0 : secondLetstartedArrIdx + 1;
                LetstartedArrContainer.innerHTML += letstartedArr[thirdLetstartedArrIdx];
                if (window.innerWidth > 1000) {
                    const fourhLetstartedArrIdx = thirdLetstartedArrIdx + 1 >= letstartedArr.length ? 0 : thirdLetstartedArrIdx + 1;
                    LetstartedArrContainer.innerHTML += letstartedArr[fourhLetstartedArrIdx];
                }
            }
        }
    }

    function next() {
        currentLetstartedArrIdx = currentLetstartedArrIdx + 1 >= letstartedArr.length ? 0 : currentLetstartedArrIdx + 1;
        renderCarousel();
    }

    function prev() {
        currentLetstartedArrIdx = currentLetstartedArrIdx - 1 < 0 ? letstartedArr.length - 1 : currentLetstartedArrIdx - 1;
        renderCarousel();
    }

    const nextButton = document.querySelector('.letstarted-btn-next');
    nextButton.addEventListener('click', next);

    const prevButton = document.querySelector('.letstarted-btn-prev');
    prevButton.addEventListener('click', prev);

    renderCarousel();

    window.addEventListener('resize', renderCarousel);
})();