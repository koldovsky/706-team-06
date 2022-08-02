(function () {
   const accordion = [
    `<div class="accodion__our-classes">
        <a class="main__plus-minus"> 
        <hr class="main__picture-ropes-horisontal-line" />
        <hr class="main__picture-ropes-vertical-line" />
        <p class="main__picture-ropes-text">
           Have fun while mixing your interval training, body weight
           exercises, and strength training!                 
        </a> 
    </div>
    `
   ];

   function accordionRender  () {
       const accordionList = document.querySelector('.main__plus-minus');
       accordionList.innerHTML = ("click", plusClick);
   };

   function plusClick () {
       
   }
})();