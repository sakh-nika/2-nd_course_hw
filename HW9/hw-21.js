//задание 1 cоздайте кнопку, которая будет скрывать и показывать текст в заголовке <h1>.

const headingEl = document.querySelector('.heading');
const btnEl = document.querySelector('.btn');

btnEl.addEventListener('click', function () {
    this.textContent = this.textContent === 'Скрыть' ? 'Показать' : 'Скрыть';
    headingEl.style.display = headingEl.style.display === 'none' ? 'block' : 'none';
});
// Задание 2. // Задача: создайте кнопку, которая изменяет цвет текста в элементе <p>
// В HTML создайте абзац <p> //  и кнопку.
// Используйте метод // querySelector//  для получения ссылки на абзац и кнопку.
// Используйте событие // click//  и метод // addEventListener // , чтобы изменить стиль элемента, например его цвет.
// Как должно работать: нажатие на кнопку «Изменить цвет» делает текст абзаца синим.
const textEl = document.querySelector('.text');
const btnChangeColor = document.querySelector('.сhange-color');

btnChangeColor.addEventListener('click', () => {
    textEl.style.color = 'blue';
});

// Задание 3. // Задача: создайте кнопку, которая меняет текст в заголовке // <h1>
// В HTML создайте заголовок // <h1>//  с текстом и кнопку.
// Используйте метод // querySelector//  для получения ссылки на заголовок и кнопку.
// Используйте событие // click//  и метод // addEventListener
// , чтобы изменить текст заголовка при нажатии на кнопку.
// Как должно работать: нажатие на кнопку «Изменить текст» меняет текст заголовка на «Привет, мир!».
const titleEl = document.querySelector('.title');
const btnChangeText = document.querySelector('.сhange-text');

btnChangeText.addEventListener('click', () => {
    titleEl.textContent = 'Привет, мир!';
});

// Задание 4. // Задача: найдите все элементы с классом description
//  и измените их текст на «Измененный текст».

// В HTML создайте несколько элементов с классом description
// Используйте метод querySelectorAll  для поиска всех элементов с этим классом.
// Переберите найденные элементы и измените их текстовое содержимое с помощью свойства textContent
// Как должно работать: после выполнения скрипта все элементы с классом 
// description изменяют свой текст на «Измененный текст».

const descriptionEl = document.querySelectorAll('.description');
setTimeout(() => {descriptionEl.forEach(element => {
    element.textContent = 'Измененный текст';
    })
}, 3000);


// Задание 5.  Задача: создайте несколько элементов <p>
//  с разными классами. Используйте querySelectorAll, 
// чтобы найти все элементы с классом description  и изменить их текст.

// В HTML создайте несколько абзацев <p>
// , некоторые из них должны иметь класс description.
// Используйте  querySelectorAll  для поиска всех элементов с классом// description
// Переберите найденные элементы и измените их текстовое содержимое.
// Как должно работать: после выполнения скрипта все элементы с классом 
// description  изменяют свой текст на «Новый текст».

const descEl = document.querySelectorAll('.description-new');
setTimeout(() => {descEl.forEach(element => {
    element.textContent = 'Новый текст';
    })
}, 6000);

// Задание 6. Задача: создайте кнопку, которая добавляет новый элемент <p>
//  с текстом в конец документа.

// В HTML создайте кнопку.
// Используйте метод // createElement//  для создания нового элемента.
// Используйте // appendChild для добавления нового элемента в конец документа при нажатии на кнопку.
// Как должно работать: нажатие на кнопку «Добавить элемент» добавляет 
// в конец страницы новый абзац с текстом «Новый абзац».

const taskEl = document.querySelector('.task-6');
const btnAddEl = document.querySelector('.add-element');

btnAddEl.addEventListener('click', () => {
    const newInfo = document.createElement('p');
    newInfo.textContent = 'Новый абзац';
    newInfo.classList.add('info');
    taskEl.appendChild(newInfo);
});


// Задание 7. Задача: создайте кнопку, которая удаляет первый элемент <p> с классом description.

// В HTML создайте несколько абзацев <p>, некоторые из них должны иметь класс description
// Используйте метод // querySelector//  для поиска первого элемента с классом description
// Используйте метод remove для удаления этого элемента при нажатии на кнопку.
// Как должно работать: нажатие на кнопку «Удалить элемент» удаляет первый абзац с классом
// description со страницы.

const btnRemove = document.querySelector('.remove');
    btnRemove.addEventListener('click', () => {
        const newDescEl = document.querySelector('.new-description');
        newDescEl.remove();
    })

