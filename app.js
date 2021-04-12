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

//Callback функция - это функция которая должна быть выполнена после завершения другой функции. В аргументах без функция без скобок

function learnJS (lang, callback) {
    console.log(`Я учу: ${lang}`);
    callback();
}

learnJS('JavaScript', function(){
    console.log('Я прошел этот урок');
});


//Так как в объекте нет свойства length, то с помощью Object.keys(options).length мы переводим это в массив (массивы и строки имееют свойство length - количество элементов

//Методы в объекте

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function(){
        console.log('Test');
    }
};

options.makeTest();

console.log(Object.keys(options).length);

//Деструктуризация объекта

const {border, bg} = options.colors;

console.log(border);

//Счетчик object

let counter = 0;

for (let x in options) {
    counter++;
    console.log(counter);
}

for (let key in options) {
    if(typeof(options[key]) === 'object') {
        for (let i in options[key]) {
            console.log(`Свойство: ${i} имеет значение ${options[key][i]}`);
        }
    } else {
        console.log(`Свойство: ${key} имеет значение ${options[key]}`);
    }
        
}


//Методы массива
//Pop - удаляет последний элемент массива
//Push - добавляет элемент в конец массива

//Shift/Unshift - имееют минусы. Они меняют индексы элементов что влияет на скорость

const arr = [1, 2, 3, 6, 8];

arr.pop();

console.log(arr);

// for OF работает только с массивоподобными объектами ( + строками). Можно использовать break и continue

for (let value of arr) {
    console.log(value);
}

//Возможные нарушение массива при arr.length (последний индекс +1)
//forEach для массива

arr.forEach(function(item, i, arr){
    console.log(`${i}: ${item} внутри массива ${arr}`);
}); 

//Метод split

const str = prompt("", "");
const products = str.split(', ');

console.log(products);

//Метод join (объединение массива в строку)

console.log(products.join('; '));

//Метод sort() сортирует как строки. Использует алгоритм быстрой сортировки. С цифрами работает по символьно. Но может принимать callback функцию

function compareNum(a, b) {
    return a - b;
}

console.log(products.sort());

//Псевдомассивы. У них нет методов
//Изменяя что то внутри копии объекта мы модифицируем сам объект а не копию

const copy = obj; //Ссылка на объекта!!! Передача по ссылки

//Чтобы создать копию массива/объекта

function copy3 (mainObj) {
    let objCopy = {};
    let key;

    for( key in mainObj) {
        objCopy[key] = mainObj[key];
    }

    return objCopy;
}


//Есть глубокие и поверхностные копии объекта
// метода Object.assign('obj1', 'obj2) - совмещает объекты второй в первый

//Копирование массива

const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();

console.log(newArray);

//В ES появился spread оператор для копирования 

const videoHost = ['youtube', 'vimeo', 'rutube'];
const siteBuilders = ['wordpress', 'shopify'];
const internet = [...videoHost, ...siteBuilders, 'facebook'];

console.log(internet);

//Задать прототип объекту 

const soldier = {
    health: 500,
    armor: 100
};
const john = {
    health: 150,
};


Object.setPrototypeOf(john, soldier);

const dan = Object.create(soldier);