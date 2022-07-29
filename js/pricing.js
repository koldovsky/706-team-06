(function () {
  const discountEnd = new Date("Jul 31, 2022 23:59:59").getTime();
  const countDiscountTimer = setInterval(function () {
    const now = new Date().getTime();
    const timeleft = discountEnd - now;
    const days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
    document.querySelector('.days__discount-left').innerHTML = days + "d ";
    document.querySelector('.hours__discount-left').innerHTML = hours + "h ";
    document.querySelector('.minutes__discount-left').innerHTML = minutes + "m ";
    document.querySelector('.seconds__discount-left').innerHTML = seconds + "s ";
    if (timeleft < 0) {
      clearInterval(countDiscountTimer);
      document.querySelector('.days__discount-left').innerHTML = "";
      document.querySelector('.hours__discount-left').innerHTML = "";
      document.querySelector('.minutes__discount-left').innerHTML = "";
      document.querySelector('.seconds__discount-left').innerHTML = "";
      document.querySelector('.discount__left').innerHTML = "NEXT TIME!";
    }
  }, 1000);
})();
