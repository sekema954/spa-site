
//MENUBAR ANIMATION
const menuBar = document.getElementById("menubar");
const dropdown = document.querySelector(".blank-canvas");
menuBar.addEventListener("click", ()=>{
  menuBar.classList.toggle("change");
  dropdown.classList.toggle("changeHeight");
})



/***testimonials */
const rightArrow = document.querySelector(".fa-arrow-right");
const leftArrow = document.querySelector(".fa-arrow-left");


rightArrow.addEventListener("click", ()=>{
  const overflowBox = document.querySelector(".testimonial-overflow-box");
  overflowBox.scrollLeft += 430;
})


leftArrow.addEventListener("click", ()=>{
  const overflowBox = document.querySelector(".testimonial-overflow-box");
  overflowBox.scrollLeft -= 430;
})