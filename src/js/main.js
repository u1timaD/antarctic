
let navHeader = document.querySelector('.nav--header');
let navClosed = document.querySelector('.nav--opened');
let burger = document.querySelector('.burger');


burger.addEventListener('click', () => {
  navHeader.classList.toggle('nav--opened');
  burger.classList.toggle('burger--opened');
})

// navClosed.classList.toggle
// console.log(navClosed);