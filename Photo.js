// const cards = document.querySelectorAll(".memory-card");

// const nextBtn = document.getElementById("nextBtn");
// const prevBtn = document.getElementById("prevBtn");

// let currentCard = 0; 

// cards[currentCard].classList.add("active"); 

// cards.forEach(card => {

//     card.addEventListener("dblclick", function () {

//         card.classList.toggle("flipped");

//     });

// }); 
// nextBtn.addEventListener("click", function () {

//     cards[currentCard].classList.remove("active");
//     cards[currentCard].classList.remove("flipped");

//     currentCard++;

//     if (currentCard >= cards.length) {
//         currentCard = 0;
//     }

//     cards[currentCard].classList.add("active");

// }); 

// prevBtn.addEventListener("click", function () {

//     cards[currentCard].classList.remove("active");
//     cards[currentCard].classList.remove("flipped");

//     currentCard--;

//     if (currentCard < 0) {
//         currentCard = cards.length - 1;
//     }

//     cards[currentCard].classList.add("active");

// });  
const cards = document.querySelectorAll(".memory-card");

const photoNextBtn = document.getElementById("photoNextBtn");
const photoPrevBtn = document.getElementById("photoPrevBtn");

let currentCard = 0;


/* =========================
   Show First Card
========================= */

cards[currentCard].classList.add("active");


/* =========================
   Double Click → Flip
========================= */

cards.forEach(card => {

    card.addEventListener("dblclick", function () {

        card.classList.toggle("flipped");

    });

});


/* =========================
   Next Photo
========================= */

photoNextBtn.addEventListener("click", function () {

    cards[currentCard].classList.remove("active");
    cards[currentCard].classList.remove("flipped");

    currentCard++;

    if (currentCard >= cards.length) {
        currentCard = 0;
    }

    cards[currentCard].classList.add("active");

});


/* =========================
   Previous Photo
========================= */

photoPrevBtn.addEventListener("click", function () {

    cards[currentCard].classList.remove("active");
    cards[currentCard].classList.remove("flipped");

    currentCard--;

    if (currentCard < 0) {
        currentCard = cards.length - 1;
    }

    cards[currentCard].classList.add("active");

}); 
