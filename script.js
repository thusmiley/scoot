//Mobile menu
const open = document.querySelector(".menu-open");
const close = document.querySelector(".menu-close");
const headerNav = document.querySelector("#header-nav");
const overlay = document.querySelector(".overlay-menu");
function openMenu() {
  open.style.display = "none";
  close.style.display = "block";
  headerNav.style.display = "flex";
  overlay.style.width = "100%";
}
function closeMenu() {
  open.style.display = "block";
  close.style.display = "none";
  headerNav.style.display = "none";
  overlay.style.width = "0%";
}

//FAQ toggle
const questions = document.querySelectorAll(".question");
const arrows = document.querySelectorAll(".expand-icon");

function toggleFaqs() {
  const itemToggle = this.getAttribute("aria-expanded");
  
  for (i = 0; i < questions.length; i++) {
      questions[i].setAttribute("aria-expanded", "false");
        arrows[i].classList.remove("flip"); 

    }
    
    if (itemToggle == "false") {
        this.setAttribute("aria-expanded", "true");
        this.children[1].classList.add('flip') //add flip to the arrow icon class 
  }
}

questions.forEach((el) => el.addEventListener("click", toggleFaqs));
