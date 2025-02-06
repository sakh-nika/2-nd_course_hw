//Training Callback
// Есть функция callbackWithArrayLength. Первым аргументом она принимает массив, а вторым — колбэк.
// Код функции не дописан: сейчас она всегда вызывает колбэк с числом −1.
// Программа выводит -1 -1 -1. А должна вызывать колбэк с **длиной переданного первым аргументом массива.**
// Допишите тело функции так, чтобы код вызывал колбэк с **длиной переданного первым аргументом массива.**
// Код должен выводить в консоль 1 2 5.

function callbackWithArrayLength(arr, callback) {
    console.log(arr);
    callback(arr.length);

}

callbackWithArrayLength([1], (length) => {
	console.log(length);
});

callbackWithArrayLength([1, 1], (len) => {
	console.log(len);
});
callbackWithArrayLength([1, 1, 1, 1, 1], (l) => {
	console.log(l);
});


//Исправьте код функции each так, чтобы в консоль выводились не индексы элементов в массиве, 
//а сами элементы массива: «Глеб», «Олег» и так далее.
//В ответ напишите новый, исправленный вариант строки, которую надо скорректировать.


function log(arrItem) {
    console.log("Элемент массива:", arrItem); //callback
}

function each(arr, cb) {
	for (let i = 0; i < arr.length; i++) {
		cb(arr[i]);
	}
}
each(["Глеб", "Олег", "Татьяна", "Платон"], log);


