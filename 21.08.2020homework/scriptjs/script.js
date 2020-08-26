//Задание 1
/*Создайте блок-схему, описывающую алгоритм поиска минимального из трех чисел.
Запишите алгоритм программно: создайте три переменные с любыми числовыми значениями;
используя именно и только вложенные условные операторы if (НЕ логические операторы),
найдите минимальное число и отобразите на экране его значение. */

/*
let a = prompt('Введите число а');
let b = prompt('Введите число b');
let c = prompt('Введите число c');

if (a < b, a < c) {
    alert(a);
} else if (b < a, b < c) {
    alert(b);
} else if (c < a, c < b) {
    alert(c);
}
*/

//Задание 2

/*По склону Фудзи ползет улитка. Ее скорость определяется в диалоговом окне.
Проверить и вывести на экран, улитка двигается вперед, назад или остается на месте (скорость (вектор) положительная,
отрицательная или ноль).*/

/*
let snailSpeed = +prompt('Введите число');

if (snailSpeed > 0) {
    alert('Улитка ползет вперед');
} else if (snailSpeed < 0){
    alert('Улитка ползет вниз');
} else if (snailSpeed === 0) {
    alert('Улитка тупит');
}
*/

//Задание 3

/*У вас и у вашего друга в кармане столько денег, сколько было указано в окнах prompt.
В зависимости от общей суммы ваших сбережений вы можете полететь на Мальту изучать английский язык или выпить пива.
С помощью условного оператора определите ваши возможности и отобразите на экране в alert.*/

/*
let yourMoney = +prompt('Введите количество ваших денег');
let friendMoney = +prompt('Введите количество денег у друга');
let allMoney = yourMoney + friendMoney;

if ( allMoney > 90000) {
alert("Можно сьездить на Мальту, но границы стран закрыты, так что пей пиво");
} 
else if ( allMoney > 500 && allMoney < 90000) {
    alert("Покопите еще годик");
} 
else if ( allMoney > 100 && allMoney < 500) {
alert("Выпейте пивка и не напрягайтесь");
} 
else if ( allMoney < 100){
    alert("Можете помечтать о пиве");
}
*/

//Задание 4

/*В переменную age запишите возраст человека. Если значение больше или равно 20 и меньше 30, в alert выводится
“Выслать повестку”.*/

/*
let age = +prompt('Введите возраст');

if (age > 20 && age < 30) {
    alert('Выслать повестку');
}
*/


//Задание 5

/*Чтобы добраться домой, вас устраивают маршрутки номер 7, 225 и 255.
Какая маршрутка приехала – определяется в prompt.
Если ваша, то вы едете домой, в противном случае – ожидаете.*/

/*
let busNumber = +prompt('Введите номер маршрутки, которая подьехала');

if (busNumber === 7) {
    alert('Юхуууууууууу, домой');
} else if (busNumber === 225) {
    alert('Юхуууууууу, тоже подойдет');
} else if (busNumber === 255) {
    alert('Дооооомой');
}
else {
    alert('Доууууууууу');
}
*/


//Задание 6

/*В переменную day записан текущий день недели.
 Если это не суббота и не воскресенье, выведите в alert сентенцию о необходимости идти на работу.*/

/*
let day = prompt('Введите день недели');

switch (day) {
    case 'Monday' : result = 'Дуй на работу'; break;
    case 'Tuesday' : result = 'Дуй на работу'; break;
    case 'Wednesday' : result = 'Дуй на работу'; break;
    case 'Thursday' : result = 'Дуй на работу'; break;
    case 'Friday' : result = 'Дуй на работу'; break;
    case 'Saturday' : result = 'можно дёрнуть пивка с друзьями'; break;
    case 'Sunday' : result = 'пора в церковь'; break;
    default : result = 'Учи английский';
}

alert(result);
*/


//Задание 7


/*Создайте две переменные: greeting и lang. Переменная greeting – пустая строка.
Переменная lang может принимать три значения: 'ru', 'en', 'de' (например, из prompt).
Если она имеет значение 'ru', то в переменную greeting запишите приветствие на русском языке,
если имеет значение 'en' – то на английском, если 'de' – на немецком.
Выведите на экран приветствие в зависимости от значения переменной lang.
Решите задачу через if-else и через switch-case.*/

/*
let lang = prompt('Введите одно из трёх значений: ru, en, de');

if (lang == 'ru') {
    alert('Здарова');
} else if (lang == 'en') {
    alert('Hello');
} else if (lang == 'de') {
    alert('Hallo');
} else {
    alert('Моя твоя не понимать');
}
*/


// Задание 7 use Switch - case


/*
let lang = prompt('Введите одно из трех значений: ru, en, de');

switch (lang) {
    case 'ru' : greeting = 'Привет'; break;
    case 'en' : greeting = 'Hello'; break;
    case 'de' : greeting = 'Hallo'; break;
    default : greeting =  'Моя твоя не понимать';
}

alert(greeting);

*/

// Задание 8

/*В переменной month хранится текущий месяц (new Date()).
Определите в какую пору года попадает этот месяц (зима, лето, весна, осень).*/

/*
const date1 = new Date('December 17, 1995 03:24:00');

const month = prompt('Введите месяц ');

switch (month) {
    case 'december' : result = 'winter'; break;
    case 'january' : result = 'winter'; break;
    case 'february' : result = 'winter'; break;
    case 'march' : result = 'Spring'; break;
    case 'april' : result = 'Spring'; break;
    case 'may' : result = 'Spring'; break;
    case 'june' : result = 'summer'; break;
    case 'july' : result = 'summer'; break;
    case 'august' : result = 'summer'; break;
    case 'september' : result = 'Autumn'; break;
    case 'october' : result = 'Autumn'; break;
    case 'november' : result = 'Autumn'; break;
    default : result = "This isn't a month";
}

alert(result);

*/


// Задание 9

/*
Переменная lang может принимать два значения: 'ru' и 'en'.
Переменная day принимает значение от 0 до 6-ти.
Если lang имеет значение 'ru', то в переменную result запишите название дня недели на русском языке в соответствии
со значением переменной day (0 – воскресенье, 1 – понедельник, 2 – вторник и т.д.).
Если же lang имеет значение 'en' – то аналогично, но день недели будет на английском.*/

/*
let lang = prompt('Введите значение ru или en');
let day = +prompt('Введите число от 0 до 6');


    switch (lang + day ) {
        case  'ru' + 0 : result = 'Воскресенье'; break;
        case  'en' + 0 : result = 'Sunday'; break;
        case  'ru' + 1 : result = 'Понедельник'; break;
        case  'en' + 1 : result = 'Monday'; break;
        case  'ru' + 2 : result = 'Вторник'; break;
        case  'en' + 2 : result = 'Tuesday'; break;
        case  'ru' + 3 : result = 'Среда'; break;
        case  'en' + 3 : result = 'Wednesday'; break;
        case  'ru' + 4 : result = 'Четверг'; break;
        case  'en' + 4 : result = 'Thursday'; break;
        case  'ru' + 5 : result = 'Пятница'; break;
        case  'en' + 5 : result = 'Friday'; break;
        case  'ru' + 6 : result = 'Суббота'; break;
        case  'en' + 6 : result = 'Saturday'; break;
        default : result = 'Шото пошло не так';
    }
alert(result);
*/


// Задание 10
/*Найдите и исправьте ошибки в коде:*/

/*
var x = +prompt('x', 0);
var error;

switch (x) {
    case 0: error = 'На ноль делить нельзя'; break;
    case 1: error = 'На единицу делить бессмысленно'; break;
    case NaN: error = 'Не математическая операция'; break;

}

if (error) {
    alert(error);
} else {
    alert(100 / x);
}

*/



