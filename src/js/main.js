
let navHeader = document.querySelector('.nav--header');
let burger = document.querySelector('.burger');
let logoHeader = document.querySelector('.logo--header');
let body = document.querySelector('body');
let burgerLink = document.querySelectorAll('.burger__link');


burger.addEventListener('click', () => {
  navHeader.classList.toggle('nav--opened');
  burger.classList.toggle('burger--opened');
  logoHeader.classList.toggle('logo--burger');
  body.classList.toggle('scroll-lock');
  body.classList.toggle('shadow');
})


burgerLink.forEach(item => {
item.addEventListener('click', () => {
  navHeader.classList.toggle('nav--opened');
  burger.classList.toggle('burger--opened');

  if(body.classList.contains('scroll-lock') || body.classList.contains('shadow') || logoHeader.classList.contains('logo--burger')) {
    body.classList.remove('scroll-lock');
    body.classList.remove('shadow');
    logoHeader.classList.remove('logo--burger');
  }
  // logoHeader.classList.toggle('logo--burger');
  // body.classList.toggle('scroll-lock');
  // body.classList.toggle('shadow');
});
})

