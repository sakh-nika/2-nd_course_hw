// Генератор случайных чисел

function game1(min, max) {
    let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    let userNumber = Number(prompt(`Попробуй угадать число от 1 до 100`));

    while (true) {
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
// Простая арифметика

function randomNumb(max, min) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function randomSign() {
    const sign = [`+`, `-`, `*`, `/`];
    return sign[Math.floor(Math.random() * sign.length)];

}

/*function game2_1() {    // вариант 1
    let n = randomNumb(20, 10);
    let b = randomNumb(10, 2);
    let a = n - (n % b);
    let mathSing = randomSign();
    let sum = a + b;
    let difference = a - b;
    let product = a * b;
    let quotient = a / b;
    let userAnswer = Number(prompt(`Реши задачу ${a} ${mathSing} ${b}`));
    console.log(a);
    console.log(b);

    if (isNaN(userAnswer)) {
        alert(`Некоректное значение.`);
    } else if (userAnswer === sum || userAnswer === difference || userAnswer === product || userAnswer === quotient) {
        alert(`Правильно! ${userAnswer}.`);
    } else {
        alert(`Ответ неверный.`);
    }
}

game2_1();*/

function game2() { // вариант 2
    for (let i = 0; i < 3; i++) { // функция повторится 3 раза
        let n = randomNumb(20, 10);
        let b = randomNumb(10, 2);
        let a = n - (n % b);//чтобы делилось без остатка
        let mathSing = randomSign();
        let result = (a, b) => {
            if (mathSing === `+`) {
                return a + b;
            } else if (mathSing === `-`) {
                return a - b;
            } else if (mathSing === `*`) {
                return a * b;
            } else if (mathSing === `/`) {
                return a / b;
            }
        }

        let userAnswer = Number(prompt(`Реши задачу ${a} ${mathSing} ${b}`));
        if (isNaN(userAnswer)) {
            alert(`Некоректное значение.`);
        } else if (userAnswer === result(a, b)) {
            alert(`Правильно! ${userAnswer}.`);
        } else {
            alert(`Ответ неверный. Правильный ответ ${result(a, b)}`);
        }
    }
}





