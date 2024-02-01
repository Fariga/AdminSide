/**
 * !(i)
 * Код попадает в итоговый файл, только когда вызвана функция, например FLSFunctions.spollers();
 * Или когда импортирован весь файл, например import "files/script.js";
 * Неиспользуемый код в итоговый файл не попадает.

 * Если мы хотим добавить модуль следует его раскомментировать
 */
// import MousePRLX from './libs/parallaxMouse'
// import AOS from 'aos'
// import Swiper, { Navigation, Pagination } from 'swiper';


const dropdown = document.querySelectorAll('.dropdown');
for (let i = 0; i < dropdown.length; i++) {
dropdown[i].addEventListener('click', function() {
  dropdown[i].querySelector('.dropdown__menu').classList.toggle('dropdown__menu--open');
});
}