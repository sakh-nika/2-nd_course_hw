/*Генерация случайного числа
function randomInteger(min, max) {
    let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(randomNumber);
}
randomInteger(1, 10);*/

//Задание Игра

function game(min, max) {
    let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    let userNumber = Number(prompt(`Попробуй угадать число от 1 до 100`));

    while (userNumber > randomNumber || userNumber < randomNumber || userNumber === randomNumber) {
        if (isNaN(userNumber)) {
            userNumber = Number(prompt(`Некоректное значение. Попробуй еще`));
        } else if (randomNumber > userNumber) {
            userNumber = Number(prompt(`Загаданное число больше. Попробуй еще`));
        } else if (randomNumber < userNumber) {
            userNumber = Number(prompt(`Загаданное число меньше. Попробуй еще`));
        } else if (userNumber === randomNumber) {
            alert(`Правильно! ${userNumber}`);
            break;
        }
    }
} 


//Задание 1
let min = (a, b) => {
    if (a < b) {
        return a;
    } else {
        return b;
    }
}
console.log(min(6, 6));
console.log(min(8, 3));

//Задание 2
let isEven = (number) => {
    if (number % 2 === 0) {
        console.log(`Число четное`);
    } else {
        console.log(`Число нечетное`);
    }
}
isEven(153);
isEven(24);

//Задание 3
let squared = (number) => number ** 2;

console.log(squared(8));

let getSquared = (number) => {
    let result = number ** 2;
    console.log(result);
}

getSquared(14);

//Задание 4
function sayHello() {
    let age = Number(prompt(`Сколько тебе лет?`));

    if (isNaN(age)) {
        alert(`Это не число!`);
    } else if (age < 0) {
        alert(`Вы ввели неправильное значение`);
    } else if (age >= 0 && age <= 12) {
        alert(`Привет, друг!`);
    } else {
        alert(`Добро пожаловать!`);
    }
}
sayHello();

//Задание 5
function product(a, b) {
    result = a * b;

    if (isNaN(result)) {
        console.log(`Одно или оба значения не являются числом`);
    } else {
        console.log(result);
    }
}
product(`j`, 2);
product(8, 4)

//Задание 6
function cube() {
    let n = Number(prompt(`Введите любое число`));

    if (isNaN(n)) {
        alert(`Переданный параметр не является числом`);
    } else {
        let thirdPower = n ** 3;
        alert(`${n} в кубе равняется ${thirdPower}`);
    }
}
cube();

// Задание 7

function getCircleArea() {
    return (3.14 * this.radius) ** 2;
}

function getCirclePerimetr() {
    return 2 * 3.14 * this.radius;
}

const circle1 = {
    radius: 30,
    getArea: getCircleArea,
    getPerimetr: getCirclePerimetr,
}

const circle2 = {
    radius: 12,
    getArea: getCircleArea,
    getPerimetr: getCirclePerimetr,
}
console.log(circle1.getArea());
console.log(circle1.getPerimetr());
console.log(circle2.getArea());
console.log(circle2.getPerimetr());
