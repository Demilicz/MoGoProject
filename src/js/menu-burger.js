const iconMenu = document.querySelector('.menu-burger');
const bodyMenu = document.querySelector('.header__list');
const header = document.querySelector('.header');

const searchBtn = document.querySelector(".header__search");
const input = document.querySelector(".header__input");

// console.log(input);

// Menu-burger

iconMenu.addEventListener('click', () => {
  document.body.classList.toggle('_lock');
  iconMenu.classList.toggle('_active');
  bodyMenu.classList.toggle('_active');

  if(document.body.classList.contains('_lock')){
    document.body.style.overflow = "hidden";
  }
  if(!document.body.classList.contains('_lock')){
    document.body.style.overflow = "scroll";
  }
});

searchBtn.addEventListener('click', () => {
  input.classList.toggle('d-none');
});



