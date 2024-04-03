//BACKGROUND SLIDE//
let index = 0;
displayImages();

function displayImages() {
  const slides = document.querySelectorAll('.fade');
  
  slides.forEach(slide => slide.style.opacity = 0);

  index++;
  if (index > slides.length) {
    index = 1;
  }

  slides[index - 1].style.opacity = 1;

  setTimeout(displayImages, 5000);
}



function changeSlide(step) {
  const slides = document.querySelectorAll('.fade');
  
  index += step;
  if (index < 1) {
    index = slides.length;
  } else if (index > slides.length) {
    index = 1;
  }

  slides.forEach(slide => slide.style.opacity = 0);
  slides[index - 1].style.opacity = 1;
}
//END..//



//MENUBAR ANIMATION
const menuBar = document.getElementById("menubar");
const dropdown = document.querySelector(".blank-canvas");
menuBar.addEventListener("click", ()=>{
  menuBar.classList.toggle("change");
  dropdown.classList.toggle("changeHeight");
})
