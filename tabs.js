
//get tab btns
const tab1 = document.querySelector(".about-me-tab");
const tab2 = document.querySelector(".education-tab");
const tab3 = document.querySelector(".experience-tab");
const tab4 = document.querySelector(".mission-tab");

//get tab cards
const card1 = document.querySelector(".about-me-card");
const card2 = document.querySelector(".education-card");
const card3 = document.querySelector(".experience-card");
const card4 = document.querySelector(".mission-card");


//change tab btns onclick
function resetTabs(){
    tab1.classList.remove('changeColor');
    tab2.classList.remove('changeColor');
    tab3.classList.remove('changeColor');
    tab4.classList.remove('changeColor');
};




resetTabs();
tab1.classList.add('changeColor');
card1.classList.add('showCard');

tab1.addEventListener("click", ()=>{
    resetTabs();
    tab1.classList.add('changeColor');
    card1.classList.add('showCard');
    card2.classList.remove('showCard');
    card3.classList.remove('showCard');
    card4.classList.remove('showCard');
});


tab2.addEventListener("click", ()=>{
    resetTabs();
    tab2.classList.add('changeColor');
    card1.classList.remove('showCard');
    card2.classList.add('showCard');
    card3.classList.remove('showCard');
    card4.classList.remove('showCard');

});


tab3.addEventListener("click", ()=>{
    resetTabs();
    tab3.classList.add('changeColor');
    card1.classList.remove('showCard');
    card2.classList.remove('showCard');
    card3.classList.add('showCard');
    card4.classList.remove('showCard');
});


tab4.addEventListener("click", ()=>{
    resetTabs();
    tab4.classList.add('changeColor');
    card1.classList.remove('showCard');
    card2.classList.remove('showCard');
    card3.classList.remove('showCard');
    card4.classList.add('showCard');
})