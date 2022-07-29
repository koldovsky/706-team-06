
// (function () {

let currentIndex = 1;
displaySlides(currentIndex);

function setSlides(num) {
displaySlides(currentIndex += num);
}

function displaySlides(num) {
  let i;
  const slides = document.getElementsByClassName("getclass-imageSlides");
  if (num > slides.length) { currentIndex = 1 }
  if (num < 1) { currentIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[currentIndex - 1].style.display = "block";
}

// })();
