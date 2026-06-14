let navBtn = document.getElementById("nav-btn");
let navMenu = document.querySelector(".nav-modal");
let logo = document.getElementById("logo");

let navLinks = document.querySelectorAll(".modal-link");
let body1 = document.body;

navBtn.addEventListener("click", function() {
  navMenu.classList.toggle("display-modal");
  body1.classList.toggle("display-modal");
});

logo.addEventListener("click", function() {
  navMenu.classList.remove("display-modal");
  body1.classList.remove("display-modal");
});

document.querySelectorAll('.modal-link').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('display-modal');
    body1.classList.remove("display-modal");
  });
});