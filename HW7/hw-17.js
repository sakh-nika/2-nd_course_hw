// Задание 1
// Преобразовать строку 'js' в верхний регистр.

let string = 'js';
string = string.toUpperCase();
console.log(string);

// Задание 2
// Создать функцию, которая принимает массив строк и строку. 
//Функция должна вернуть новый массив, содержащий только те элементы первого массива, которые начинаются со второй строки. Регистр символов не влияет на результат.
//Начни с создания функции, которая принимает два параметра: 
//массив и строку. Затем используй метод `filter()` для перебора элементов массива. 
//Внутри `filter()` можно использовать метод `startsWith()` 
//для проверки, начинается ли элемент с заданной строки. 
//Не забудь привести строки к одному регистру с помощью `toLowerCase()`, 
//чтобы регистр не влиял на результат.

let getNewArray = (array, str) => {
    let newArray = array.filter(item => item.toLowerCase().startsWith(str.toLowerCase()));
    console.log(newArray);
}

getNewArray(['день Понедельник', 'день Вторник','день Среда', 'день Четверг','день Пятница', 'выходной Суббота', 'выходной Воскресение'], 'Выходной');

// Задание 3
// Округлить число 32.58884: До меньшего целого. До большего целого. До ближайшего целого.
let numb = 32.58884;
let numbMin = Math.floor(numb);
let numbMax = Math.ceil(numb);
let numbRound = Math.round(numb);
console.log(numbMin);
console.log(numbMax);
console.log(numbRound);

// Задание 4
// Найти минимальное и максимальное значения из чисел 52, 53, 49, 77, 21, 32 и вывести их в консоль.

let min = Math.min(52, 53, 49, 77, 21, 32);
let max = Math.max(52, 53, 49, 77, 21, 32);
console.log(min);
console.log(max);


// Задание 5
// Создать функцию, которая выводит в консоль случайное число от 1 до 10.

let num = Math.ceil(Math.random() * 10);
console.log(num);


// Задание 6
// Написать функцию, которая принимает целое число и возвращает массив случайных чисел от 0 до этого числа. Длина массива должна быть в два раза меньше переданного числа.

let getArray = (num) => {
    let arr = [];
    let lenth = Math.floor(num / 2);
    for (i = 0; i < lenth; i++) {
    arr[i] = Math.floor(Math.random() * (num + 1));
    }
    console.log(arr);
}

getArray(13);

// Задание 7
// Создать функцию, которая принимает два целых числа и возвращает случайное число в этом диапазоне.
let getrandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(randomNumb(10, 30));

// Задание 8
// Вывести в консоль текущую дату.

console.log(new Date());

// Задание 9
// Создать переменную currentDate, хранящую текущую дату. Вывести дату, которая наступит через 73 дня после текущей.

let currentDate = +new Date();
let days73 = 73 * 24 * 60 * 60 * 1000;
let searchDate = currentDate + days73;
let daysAhead73 = new Date(searchDate);
console.log(daysAhead73);


// Задание 10
// Написать функцию, которая принимает дату и возвращает ее в формате: Дата: [число] [месяц на русском] [год] — это [день недели на русском]. Время: [часы]:[минуты]:[секунды]

function getDateFormat(anyDate) {
const days = ['воскресенье', 'понедельник','вторник','среда','четверг','пятница','суббота'];
const months = ['январь','февраль', 'март','апрель','май','июнь','июль','август','сентябрь','октябрь','ноябрь','декабрь'];
return 'Дата: ' + anyDate.getDate() + ' ' + months[anyDate.getMonth()] + ' ' + anyDate.getFullYear() + ' - это' + ' ' + days[anyDate.getDay()] + '. Время: ' + anyDate.toLocaleTimeString('ru-RU');
}
console.log(getDateFormat(new Date('12/31/2024')));
console.log(getDateFormat(new Date()));