'use strict';

/*Задание 1
Найдите и исправьте ошибки в коде:*/


/*var x = +prompt('Введите X', '1');
var y = +prompt('Введите Y', '1');
var z = x + y;
alert(`Сумма: ${z}`);*/



/*Задание 2
Создайте три переменные. Присвойте первой переменной случайное целочисленное значение.
Вторая переменная равна первой переменной, увеличенной в три раза. Третья переменная равна сумме двух первых.
Распечатайте все три.*/


/*
let a = +prompt('Введите число')
let b = +3 * a;
let c = (a + b);
alert(a);
alert(b);
alert(c);*/


/*Задание 3
Создайте переменные firstName и lastName для хранение имени и фамилии, запишите в них значения из модального окна prompt.
Выведите на экран приветствие (“What’s up John Doe”), используя конкатенацию и экранирование символов.
Имя и фамилию выводите заглавными буквами независимо от того, как они были введены.*/

/*
let firstName = prompt('Введите имя');
let lastName = prompt('Введите фамилию');
alert(`What's up ${firstName} ${lastName}`);*/


/*Задание 4
Создайте переменные x и y для хранения числа. Значения переменные получают из prompt.
Рассчитайте произведение, частное, разность и сумму этих значений. Результат последовательно отобразите в модальном окне.
(Процесс вычисления посмотрите в debugger.)*/

/*
let x = +prompt('Введите число X');
let y = +prompt('Введите число Y');
alert(x + y);
alert(x - y);
alert(x * y);
alert(x / y);*/


/*Задание 5
Космический корабль летит с Земли на Луну. Расстояние равно 384,400 км. Скорость полета корабля определяется в prompt.
Рассчитайте, за какое время ваш космический корабль доберется до Луны.*/

/*
let S = +384400;
let V = prompt('Введите скорость корабля');
let t = S / V;
alert(t);*/


/*Задание 6
Напишите программу, которая без использования оператора сравнения определяет, является ли целое число, введенное пользователем, нечётным (true/false).
Результат отобразите в alert.*/

/*
let Number = prompt('Введите число');
if (Number % 2 == 0) {
    alert('Ваше число чётное')
}

else {
    alert('Ваше число нечётное')
}*/


/*Задание 7
Напишите программу, которая проверяет (true/false), является ли значение, введенное пользователем, числом. */

/*
let d = prompt('Введите значение');
if ( d == +d) {
    alert('это число')
}
else {
    alert('не число')
}*/


/*Задание 8. Конвертация в байты, килобайты, мегабайты
Напишите калькулятор для конвертации единиц измерения количества информации (байт, килобайт, мегабайт, гигабайт).
Значения считаются из prompt, результаты отображаются в alert. Используйте константы там, где это логически оправдано.*/
/*
let pass = prompt('Введите количество байт');
let bite = pass / 1;
alert(`${bite} байт`);
let kilobite = pass / 1000;
alert(`${kilobite} килобайт`);
let megabite = pass / 1000000;
alert(`${megabite} мегабайт`);*/


/*Задание 9
У Чжуан-цзы было N яблок, Цзэн-Цзы съел несколько.
Чжуан-Цзы обвиняет Цзэн-Цзы в том, что он съел все яблоки, но Цзэн-Цзы возражает.
Запишите повествование в переменных и выражениях, читая значения из prompt.
Не используя операторы сравнения, покажите, правду говорит Цзэн-Цзы или ложь.*/

/*
let appleCount = prompt('Сколько яблок было у Чжуан-цзы?');
let appleEat = prompt('Сколько яблок было сьедено Цзэн-цзы?');
alert('Чжуан-цзы обвиняет Цзэн-цзы, что тот сьел все яблока');
alert('Цзэн-цзы отрицает это');
if (appleCount - appleEat == 0){
    alert('Цзэн-цзы врет')
}
else {
    alert('Цзэн-цзы говорит правду')
}*/


/*Задание 10
На сайте есть три колонки разной высоты,
заданной в единицах измерения веб (значения вводятся в prompt в формате “50px”, “20px”...).
Используя функцию из библиотеки Math, найдите наибольшее значение из трех и покажите его.
Учтите, что Math.max не работает со строками.*/

/*
let a = +prompt('Введите размер 1 строки');
let b = +prompt('Введите размер 2 строки');
let c = +prompt('Введите размер 3 строки');
let z = Math.min(a, b, c)
let k = Math.max(a, b, c)
alert(`${z}px`);
alert(`${k}px`);*/


/*Задание 11
Запишите в переменную случайное число (Math.random()), умножьте его на 100 и округлите.
Получите второе число из окна prompt. 
Сравните и отобразите в модальном окне: первое число меньше второго или нет, а также оба значения. 
Расчеты сделайте в одном выражении! (То есть в скобках метода alert.)*/

/*
var x;
var y = prompt('Введите y');

alert(('x > y ='+ (x=Math.round(Math.random()*100)) > y)+ '; x='+ x + '; y=' +y);*/