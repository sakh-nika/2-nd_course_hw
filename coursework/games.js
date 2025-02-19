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

// Переверни текст
function game3() {
    let userText = prompt(`Введи любое слово или текст`);
    let reverseText = userText.split(``).reverse().join(``);
    alert(reverseText);
}


//Простая викторина
function game4() {
    const quiz = [
        {
            question: "Какой цвет небa?",
            options: ["1. Красный", "2. Синий", "3. Зеленый"],
            correctAnswer: 2 // номер правильного ответа
        },
        {
            question: "Сколько дней в неделе?",
            options: ["1. Шесть", "2. Семь", "3. Восемь"],
            correctAnswer: 2
        },
        {
            question: "Сколько у человека пальцев на одной руке?",
            options: ["1. Четыре", "2. Пять", "3. Шесть"],
            correctAnswer: 2
        }
    ];
  
    let trueAnswer = 0;

    for (i = 0; i < quiz.length; i++) {
        let unswer = Number(prompt(`Выбери правильный ответ.\n ${quiz[i].question} \n Варианты ответов: ${quiz[i].options}`));
        
        if (isNaN(unswer)) {
           alert(`Нужно выбрать номер ответа`);
           i--;
        } else if (unswer === quiz[i].correctAnswer) {
            alert(`:) Правильно!`);
            trueAnswer++;
        } else {
            alert(`:( Ответ неверный. Правильный ответ ${quiz[i].options[1]}`);
        }
    }
    alert(`Правильных ответов: ${trueAnswer} из 3.`);
}

// Игра «Камень, ножницы, бумага»
// Описание: создайте игру «Камень, ножницы, бумага», где пользователь играет против компьютера.

// Требования:

// Сайт запрашивает у пользователя его выбор (камень, ножницы, бумага).
// Генерирует случайный выбор компьютера.
// Определяет победителя и выводит результат.
// Последовательность создания игры «Камень, ножницы, бумага»:

// Используйте функцию // prompt()//  для получения выбора пользователя: "камень", "ножницы" или "бумага".
// Сгенерируйте случайный выбор компьютера.
// Создайте массив с возможными вариантами: 
// ["камень", "ножницы", "бумага"]
// .
// Используйте функцию для генерации случайного индекса и выберите вариант для компьютера.
// Определите победителя.
// Сравните выбор пользователя и выбор компьютера.
// Используйте правила игры для определения победителя:
// Камень побеждает ножницы.
// Ножницы побеждают бумагу.
// Бумага побеждает камень.
// Если выборы совпадают, это ничья.
// Выведите результат:
// Выведите выборы пользователя и компьютера.
// Сообщите результат игры: победа, поражение или ничья.

function randomOption() {
    const options = ['Камень', 'Ножницы', 'Бумага'];
    return options[Math.floor(Math.random() * options.length)];
}

function game5() {

    for (let i = 0; i < 3; i++) { // функция повторится 3 раза
        let userOption = prompt(`Выбери:\n Камень, ножницы, бумага?`);
        let compOption = randomOption();
        
        if (userOption.toLowerCase() === compOption.toLowerCase()) {
            alert(`Ничья! Комьютер тоже выбрал '${compOption}'`);
        } else if (userOption.toLowerCase() === 'камень' && compOption.toLowerCase() === 'ножницы') {
            alert(`Ты победил! \n Ты выбрал '${userOption}'. Комьютер выбрал '${compOption}'.\n Камень побеждает ножницы`);
        } else if (userOption.toLowerCase() === 'ножницы' && compOption.toLowerCase() === 'бумага') {
            alert(`Ты победил! \n Ты выбрал '${userOption}'. Комьютер выбрал '${compOption}'. \n Ножницы побеждают бумагу`);
        } else if (userOption.toLowerCase() === 'бумага' && compOption.toLowerCase() === 'камень') {
            alert(`Ты победил! \n Ты выбрал '${userOption}'. Комьютер выбрал '${compOption}'. \n Бумага побеждает камень`);
        } else {
            alert(`Победил компьютер! \n Комьютер выбрал '${compOption}'. Ты выбрал '${userOption}'.`);
        }
    }
}

// Генератор случайных цветов
// Описание: При каждом клике на кнопку фон страницы меняется на случайный цвет.
// Требования: Создайте кнопку, которая при нажатии меняет цвет фона (или другого элемента) на случайный.

const gamesBackgroundColor = document.querySelector('.games');
const btnChangeBackgroundColor = document.querySelector('#button-game_6.game__button');
    btnChangeBackgroundColor.addEventListener('click', () => {
        gamesBackgroundColor.style.backgroundImage = 'none'; // убирает фоновое изображение
        const randomColor = `#${Math.floor(Math.random() * 0xFFFFFF).toString(16).padEnd(6, '0')}`;    
        gamesBackgroundColor.style.backgroundColor = randomColor;
        });
        
   






