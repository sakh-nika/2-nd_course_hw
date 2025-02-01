/*Задание 1*/
let password = 'пароль';
let password1 = prompt('Введите пароль');

if (password1 === password) {
    alert('Пароль введен верно');
} else {
    alert('Пароль введен неправильно');
}
/*Задание 2*/
let c = 8;
if (c > 0 && c < 10) {
    console.log('Верно');
} else {
    console.log('Неверно');
}
c = 0;
if (c > 0 && c < 10) {
    console.log('Верно');
} else {
    console.log('Неверно');
}
c = 10;
if (c > 0 && c < 10) {
    console.log('Верно');
} else {
    console.log('Неверно');
}
c = -3;
if (c > 0 && c < 10) {
    console.log('Верно');
} else {
    console.log('Неверно');
}
c = 2;
if (c > 0 && c < 10) {
    console.log('Верно');
} else {
    console.log('Неверно');
}
/*Задание 3*/
let d = 52;
let e = 183;

if (d > 100 || e > 100) {
    console.log('Верно');
} else {
    console.log('Неверно');
}
/*Задание 4*/
let a = '2';
let b = '3';
alert(Number(a) + Number(b));

/*Задание 5*/
let monthNumber = 12;
switch (monthNumber) {
    case 12:
    case 1:
    case 2:
      console.log(`Зима`);
        break;
    case 3:
    case 4:
    case 5:
        console.log(`Весна`);
        break;
    case 6:
    case 7:
    case 8:
        console.log(`Лето`);
        break;
    case 9:
    case 10:
    case 11:
        console.log(`Осень`);
        break;
    default:
        console.log('Такого месяца нет');
        break;
}
/*допЗадание 1*/
let num = Number(prompt(`Пожалуйста, введите любое число`));
if (isNaN(num)) {
    alert('Это не число!');
} else if ((num % 2) === 0) {
    alert(`Число четное`);
} else {
    alert(`Число нечетное`);
}

/*допЗадание 2*/
let clientOS = Number(prompt(`Для установки приложения введите 0 - для iOS, введите 1 - для Android`));
switch (clientOS) {
    case 0:
        alert(`Установите версию приложения для iOS по ссылке`);
        break;
    case 1:
        alert(`Установите версию приложения для Android по ссылке`);
        break;

    default:
       alert(`Некорректное число. Попробуйте ввести еще раз.`);
        break;
}

/*допЗадание 3 */
clientOS = Number(prompt(`Для установки приложения введите 0 - для iOS, введите 1 - для Android`));
let clientDeviceYear = Number(prompt(`Укажите год выпуска Вашего телефона`));
if (clientOS === 0 && clientDeviceYear >= 2015) {
    alert(`Установите версию приложения для iOS по ссылке`);
} else if (clientOS === 0 && clientDeviceYear < 2015) {
    alert(`Установите облегченную версию приложения для iOS по ссылке`);
} else if (clientOS === 1 && clientDeviceYear >= 2015) {
    alert(`Установите версию приложения для Android по ссылке`);
} else if (clientOS === 1 && clientDeviceYear < 2015) {
    alert(`Установите облегченную версию приложения для Android по ссылке`);
} else {
    alert('Некорректные данные. Попробуйте ввести еще раз')
}


