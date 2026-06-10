let navBtn = document.getElementById("nav-btn");
let navBtnClose = document.getElementById("close-btn");
let navMenu = document.querySelector(".nav-modal");

let navLinks = document.querySelectorAll("modal-link");
let body1 = document.body;

navBtn.addEventListener("click", function() {
  navMenu.classList.toggle("display-modal");
  navBtnClose.classList.toggle("display-modal");
  body1.classList.toggle("display-modal");
});

navBtnClose.addEventListener("click", function() {
  navMenu.classList.toggle("display-modal");
  navBtnClose.classList.toggle("display-modal");
  body1.classList.toggle("display-modal");
});


document.querySelectorAll('.modal-link').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.toggle('display-modal');
    body1.classList.toggle("display-modal");
    navBtnClose.classList.toggle("display-modal");
  });
});