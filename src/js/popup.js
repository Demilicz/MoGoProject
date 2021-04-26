const searchBtn = document.querySelector(".header__search");
const input = document.querySelector(".header__input");


searchBtn.addEventListener('click', () => {
  input.classList.toggle('d-none');
});