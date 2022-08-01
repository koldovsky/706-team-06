(function () {

  const benefits = [
    {
      id: "1",
      title: "FULLY EQUIPPED GYM",
      description: "Our spacious gym is suitable for group lessons and has all the necessary equipment.",
      image: "img/bicycle.svg", 
    },
    {
      id: "2",
      title: "SELECT YOUR ACTIVITY",
      description: "Choose the activities which suit you and don't pay for the unnecessary ones.",
      image: "img/diet-food.svg",
    },
    {
      id: "3",
      title: "OPEN FOR ANYONE",
      description: "Whatever your fitness level is, you can attend our fitness classes at any time.",
      image: "img/sportwoman.svg",
    },
    {
      id: "4",
      title: "FLEXIBLE PRICES",
      description: "You can select a training plan, instructor, and schedule suitable for you",
      image: "img/checklist.svg",
    }
  ];
  function renderBenefits(benefits) {
const benefitsContainer = document.querySelector('.benefits__container');
benefitsContainer.innerHTML = '';
for (const benefit of benefits) {
  benefitsContainer.innerHTML +=`
        <div class="main__benefits">
            <img src=${benefit.image} alt=${benefit.title} />
            <h2 class="main__picture-title-benefits">${benefit.title}</h2>
            <p class="main__text-block-benefits">${benefit.description}</p>
        </div>`
      }
    }
    renderBenefits(benefits);
})()