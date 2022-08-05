(function () {
  const modalPricing = document.querySelector(".modal__window-pricing");
  const openPricing = document.querySelector(".select__plan");
  const closePricing = document.querySelector(".close__window-pricing");
  openPricing.onclick = function () {
    modalPricing.style.display = "block";
  };
  closePricing.onclick = function () {
    modalPricing.style.display = "none";
  };
})();