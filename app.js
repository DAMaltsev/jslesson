'use strict';

let MyName = 'Daniil';

// alert('Hi!');

// const answer = confirm('Do you like JS?');
// console.log(answer);

// const lang = prompt('What is your favorite programm language?', 'JavaScript'); 
/* Обязательно пустое значение для второго параметра или placeholder*/

// console.log(typeof(lang));
/* Вся информация от пользователя приходит в виде строк (ур.7) Можно поменять тип с помощью унарного плюса*/


const answers = [];

answers[0] = prompt('What is your name?', '');
answers[1] = prompt('What is your age?', '');

console.log(answers);
// document.write(answers);

// `бэктик позволяет использовать интерполяцию (ES6) - вставить переменную внутрь строки - ${}(Шаблонные строки)

const category = 'reading';
console.log(`www.google.com/${category}/5`);