
//MENUBAR ANIMATION
const menuBar = document.getElementById("menubar");
const dropdown = document.querySelector(".blank-canvas");
const linkWrapper = document.querySelector(".link-wrapper");
menuBar.addEventListener("click", ()=>{
  menuBar.classList.toggle("change");
  dropdown.classList.toggle("changeHeight");
  linkWrapper.classList.toggle("show-link-wrapper");
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



/****blog-scroll bar */

const leftCaret = document.querySelector(".fa-caret-left");
const rightCaret = document.querySelector(".fa-caret-right");

leftCaret.addEventListener("click", ()=> {
  const blogDiv = document.querySelector('.blog-overflow-box');
  blogDiv.scrollLeft += -400;
});


rightCaret.addEventListener("click", ()=> {
  const blogDiv = document.querySelector('.blog-overflow-box');
  blogDiv.scrollLeft += 400;
});



