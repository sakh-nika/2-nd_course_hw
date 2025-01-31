//задание 1 Создайте цикл, который будет выводить элементы массива, пока не встретит значение 10
const numbers = [1, 5, 4, 10, 0, 3]
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] == 10) break;
    console.log(numbers[i]);
}

// задание 2 Найдите индекс значения 4 в массиве
numbers.forEach((i, index) => {
    if (i == 4) {
        console.log(`У ${i} индекс ${index}`);
    }
});

//задание 3 С помощью метода join выведите элементы массива через пробел (пустую строку ' ')
let numb = [1, 3, 5, 10, 20]
numb = numb.join(' ');
console.log(numb);

//задание 4 С помощью вложенных циклов создайте многомерный массив [[1, 1, 1], [1, 1, 1], [1, 1, 1]].

let arr = []
for (let i = 0; i < 3; i++) {
    arr[i] = []; // 3 пустых массива 
   for (let n = 0; n < 3; n++ ) {
    arr[i][n] = 1;
   }
}
console.log(arr);

//задание 5 Добавьте в конец массива значения 2, 2, 2.
numb = [1, 1, 1];
numb.push(2, 2, 2);
console.log(numb);

// задание 6 С помощью метода sort отсортируйте массив и удалите букву 'a' из массива
numb = [9, 8, 7, 'a', 6, 5]
numb.sort();
numb.pop('a');
console.log(numb);

//задание 7 
/*Попросите пользователя угадать число с помощью метода prompt. 
Если значение, которое ввел пользователь, есть в массиве, выведите в 
alert «Угадал»/«Не угадал»*/
numb = [9, 8, 7, 6, 5]
let userNumber = Number(prompt(`Угадай число`));
let isConteins;

  if (isConteins = numb.includes(userNumber)) {
        alert(`Угадал`);
    } else {
        alert(`Не угадал`);
    }

// задание 8 Дана строка:'abcdef'. Выведите в консоль 'fedcba'.
let str = `abcdef`;
let splitStr = str.split('');
splitStr.reverse();
let joinedStr = splitStr.join('');
console.log(joinedStr); 
    // или

str = str.split('').reverse().join('');
console.log(str);

// задание 9 Дан массив:[[1, 2, 3],[4, 5, 6]]. Выведите в консоль массив вида:[1, 2, 3, 4, 5, 6]

numb = [
    [1, 2, 3],
    [4, 5, 6],
]
const newNumb = [...numb[0], ...numb[1]]
console.log(newNumb);

//задание 10 Массив с произвольными числами, переберите его с помощью цикла for, В каждой итерации выведите в консоль сумму текущего и следующего элементов массива

numb = [1, 8, 6, 4, 7, 3, 5, 2, 10, 9]
for (let i = 0; i < numb.length; i++) { 
    //let nextI = numb[i + 1]; // переменная для след числа
    let sum = (numb[i] + numb[i + 1]);
    //console.log(`${numb[i]} + ${numb[i + 1]}`); //выводит арифм действие
    if (isNaN(sum)) break;
    console.log(sum);
}

//задание 11 Создайте функцию, которая принимает на вход массив целых чисел, а возвращает массив квадратов этих чисел.
let getSquared = (numb) => {
    const squaredNumb = numb.map(numb => numb ** 2); // coздаем новый массив с измененными значениями
    console.log(squaredNumb);
}
getSquared([2, 3, 4, 5, 6]);

//задание 12 Создайте функцию, которая принимает на вход массив строк, а возвращает массив длины слов
let getStringLength = (string) => {
    const lengthString = string.map(string => string.length);
    console.log(lengthString);
}
getStringLength([`январь`, `февраль`, `март`]); // [6, 7, 4]

//задание 13 Создайте функцию, которая принимает на вход массив целых чисел, а возвращает массив, содержащий только отрицательные значения.
let getNegative = (numb) => {
    const negativeNumb = numb.filter(numb => numb < 0);
    console.log(negativeNumb);
}
getNegative([-1, 2, -3, 8, -6, 7 ]);

//задание 14 Создайте массив из 10 значений с помощью метода Math.random() в диапазоне от 0 до 10. Найдите все четные значения и добавьте их в новый массив.

numb = []
   for (let n = 0; n < 10; n++ ) {
    max = 10;
    min = 0;
    numb[n] = Math.floor(Math.random() * (max - min + 1)) + min;
   }
   const evenNumb = numb.filter(numb => numb % 2 === 0);
   console.log(numb);
   console.log(evenNumb);

 //задание 15 Создайте массив, состоящий из 6 элементов с помощью Math.random()в диапазоне от 1 до 10.Найти среднее арифметическое этих цифр, результат вывести в консоль.

numb = []
    for (let n = 0; n < 6; n++ ) {
    max = 10;
    min = 0;
    numb[n] = Math.floor(Math.random() * (max - min + 1)) + min;
    }
   let sum = numb.reduce((total, numb) => total + numb, 0);
   let arithmeticMean = sum / numb.length;
    //let arithmeticMean = (numb.reduce((total, numb) => total + numb, 0)) / numb.length;

    console.log(numb);
    //console.log(sum);
    console.log(`Среднее арифметическое равно ${arithmeticMean}`);
