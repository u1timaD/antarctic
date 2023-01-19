
let navHeader = document.querySelector('.nav--header');
let burger = document.querySelector('.burger');
let logoHeader = document.querySelector('.logo--header');

burger.addEventListener('click', () => {
  navHeader.classList.toggle('nav--opened');
  burger.classList.toggle('burger--opened');
  logoHeader.classList.toggle('logo--burger');
})

