(function () {
  const modalPricing = document.querySelector(".modal__window-pricing");
  const openPricing = document.getElementsByClassName("select__plan");
  const closePricing = document.getElementsByClassName("close__window-pricing");
  for (let i=0; i < openPricing.length; i++) {
    openPricing[i].addEventListener("click", openModal);
  }
  function openModal ()  {
    modalPricing.style.display = "block";
  };
  for (let x=0; x < closePricing.length; x++) {
    closePricing[x].addEventListener("click", closeModal);
  }
  function closeModal () {
    modalPricing.style.display = "none";
  };
  window.onclick = function (event) {
    if (event.target == modalPricing) {
      modalPricing.style.display = "none";
    }
  }
})();