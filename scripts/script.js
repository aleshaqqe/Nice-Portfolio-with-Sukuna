const burger = document.querySelector('.header__burger');
const menu = document.querySelector('.header__menu');

burger.addEventListener('click', () => {
  burger.classList.toggle('active');  // анимация крестика
  menu.classList.toggle('active');    // открытие меню
});