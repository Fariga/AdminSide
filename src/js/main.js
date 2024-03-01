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

const rows = document.querySelectorAll('.student-data__body .student-data__checkbox');
rows.forEach(row => {
  let line = row.parentNode;
  row.addEventListener('click', () => {
    if (row.querySelector('input').checked) {
      line.classList.add('student-data__row--select');
    } else 
    line.classList.remove('student-data__row--select');
  });
});

const headName = document.querySelector('.student-data__head .student-data__checkbox').addEventListener('click', () => {
  rows.forEach(row => {
    row.querySelector('input').checked = document.querySelector('.student-data__head .student-data__checkbox input').checked; 
  })
});
