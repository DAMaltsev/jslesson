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

//В JS есть тернарные операторы 

const num = 50;

(num == 1) ? console.log('Ok!') : console.log('Error')

//В JS есть так же бинарные (4+4) и унарные операторы (+4)
//Существует конструкция SWITCH она сравнивает только на СТРОГОЕ значение

const num2 = 1;

switch(num2) {
    case 3:
        console.log('Неверно!');
        break;
    case 2:
        console.log("Неверно");
        break;
    case 1:
        console.log('Ок');
        break;
    default: 
        console.log('Не в этот раз!')
        break;
}


//Циклы while do/while for 

let num3 = 10;

while (num3 < 15 ) {
    console.log(num3);
    num3++;
}

let num4 = 10;

do {
    console.log(num4);
    num4++
}
while ( num4 < 20);

// continue пропускает значение и продолжает цикл. Break прерывает. 

for (let i=1; i < 8; i++) {

    if (i===6) {
        // break;
        continue;
    }

     console.log(i);
}

//Замыкание функции это сама функция со всеми переменными ее доступные
//Существует три типа функции - function declaration (существует еще до того как код запуститься). Запятая не ставиться
//function expression - функциональное выражение (нужно ставить ; в конце). Создает только когда код доходит до нее

const logger = function(){
    console.log('Hello again!');
};

logger();

//Стрелочные функциию Не имеет контекста вызова (this). 

const calc = (a , b) => {return a + b};
const calc2 = a => a + 2;

//Методы это вспомогательные функции
//Свойства это вспомогательные значения
//Поиск подстроки с помощью метода indexOf()
