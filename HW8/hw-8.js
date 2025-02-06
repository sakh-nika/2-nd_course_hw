//Задание 1
for (let welcome = 0; welcome < 2; welcome++) {
    console.log(`Привет!`);
}
//Задание 2
let n = 1;
while (n <= 5) {
    console.log(n);
    n++;
}
//Задание 3
for (n = 7; n <= 22; n++) {
    console.log(n);
}
//Задание 4
const obj = {
    Коля: `200`,
    Вася: `300`,
    Петя: `400`
}
for (let key in obj) {
    console.log(`${key} - зарплата ${obj[key]} долларов`);
}

//Задание 5
n = 1000;
let num = 0;
while (n > 50) {
    n /= 2;
    num++;
}
console.log(n);
console.log(`количество циклов: ${num}`);

//Задание 6
let friday = 3;
let allDay = 31;
while (friday > 0 && friday <= allDay) {
    console.log(`Сегодня пятница, ${friday}-е число. Необходимо подготовить отчет.`);
    friday += 7;
}

//допЗадание 1
let k = 100;
let interations = 0;
while (k > 0) {
    k -= 7;
    interations++;
}
console.log(k);
console.log(interations);

//допЗадание 2
const months = [
    'Январь',
    'Февраль',
    'Март',
    'Апрель',
    'Май',
    'Июнь',
    'Июль',
    'Август',
    'Сентябрь',
    'Октябрь',
    'Ноябрь',
    'Декабрь',
]
let numberMonth = 0;
for (let nameMonth of months) {
    numberMonth++;
    console.log(`${nameMonth}, ${numberMonth}`);
}

//допЗадание 3 
const writing = {
    book_title: `"Евгений Онегин"`,
    author: `Пушкин А. С.`,
    publication: 1893,
    genre: `роман в стихах`
}
for (let key in writing) {
    console.log(`${key}: ${writing[key]}`);
}

//допЗадание 4
let numbers = [65, 51, 12, 77, 2, 94, 31, 87,];
let minNumber = numbers[0];
for (const item of numbers) {
    if (item < minNumber) {
        minNumber = item;
    }
}
console.log(minNumber);

//Training
const user = {
nameUser: `Vika`,
age: 30,
city: `Yuzhno-Sakhalinsk`,
getInfo() {
    return `Пользователь ${user.nameUser}, возраст ${user.age}, проживает в городе ${user.city}.`;
    }
}
console.log(user.getInfo());

const square1 = {
    width: 20,
    height: 20,
    getRectangleArea() {
        return this.width * this.height;
        },
    getRectanglePerimeter() {
        return (this.width + this.height) * 2;
    } 
}

console.log(square1.getRectangleArea());
console.log(square1.getRectanglePerimeter());
    
const square2 = {
    width: 30,
    height: 30,
    getRectangleArea() {
        return this.width * this.height;
        },
    getRectanglePerimeter() {
        return (this.width + this.height) * 2;
    } 
}

console.log(square2.getRectangleArea());
console.log(square2.getRectanglePerimeter());
    
function getRectangleArea() {
    return this.width * this.height;
}

function getRectanglePerimeter() {
    return (this.width + this.height) * 2;
}

const square3 = {
    width: 5,
    height: 8,
    getArea: getRectangleArea,
    getPerimeter: getRectanglePerimeter,
}

const square4 = {
    width: 12,
    height: 6,
    getArea: getRectangleArea,
    getPerimeter: getRectanglePerimeter,

}

console.log(square3.getArea());
console.log(square3.getPerimeter());
console.log(square4.getArea());
console.log(square4.getPerimeter());



