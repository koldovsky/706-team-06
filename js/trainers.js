(function() {
    const trainers = [
        {
            id:"1",
            name: "AMELIA PETERSON",
            position:"Trainer",
            image:"img/trainer-amelia-peterson-photo.png",
        },
        {
            id:"2",
            name: "STEVE HUNTER",
            position:"Trainer",
            image:"img/trainer-steve-hunter-photo.png",  
        },
        {
            id:"3",
            name: "MARY GREY",
            position:"Trainer",
            image:"img/trainer-mary-grey-photo.png",    
        }
    ];
    function renderTrainers(trainers) {
        const trainersContainer = document.querySelector('.our-trainers__container-list');
        trainersContainer.innerHTML = '';
        for (const trainer of trainers) {
            trainersContainer.innerHTML += `
            <div class="our-trainers__personal-card">
                <img src="${trainer.image}" alt="Photo of our trainer ${trainer.name}" />
                <p class="personal-card__trainer-name">${trainer.name}</p>
                <p class="personal-card__position">${trainer.position}</p>
            </div>`;
        }
    }
    renderTrainers(trainers);
})()