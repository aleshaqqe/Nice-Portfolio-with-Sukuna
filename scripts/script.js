import {onLoad} from "./Observer.js";

const burger = document.querySelector('.header__burger');
const menu = document.querySelector('.header__menu');
const sections = document.querySelectorAll('.target');
const cards = document.querySelectorAll('.projects__card');

burger.addEventListener('click', () => {
  burger.classList.toggle('active');  // анимация крестика
  menu.classList.toggle('active');    // открытие меню
});

onLoad([...sections]);