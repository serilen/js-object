;(function(){
	"use strict";

/*Работа на уроке:

Создать простой работающий “Онлайн тест”. Вопросы и ответы хранятся в двумерном массиве. Результат выводим на страницу: You got 1 question(s) right.
----------------------------------------------------------------------------------------------------------------------------------*/




/*Работа на уроке - задание для студентов:

Сумма свойств
Есть объект salaries с зарплатами. Напишите код, который выведет сумму всех зарплат.
Если объект пустой, то результат должен быть 0.
Например:
"use strict";

var salaries = {
"Вася": 100,
"Петя": 300,
"Даша": 250
};

//... ваш код выведет 650*/
//--------------------------------------------------------------------------------

/*let salaries = {
	"Вася": 300,
	"Петя": 200,
	"Даша": 500,
};

function isEmpty(obj) {
	for (let key in obj) {
    // если тело цикла начнет выполняться - значит в объекте есть свойства
    return false;
  }
  return true;
}

function sumValueObject(obj) {
	let sum = 0;
	for (let valueObject of Object.values(obj)) {
		sum += valueObject;
	}
  return sum;
}

if (isEmpty(salaries) == !true) {
	console.log(sumValueObject(salaries));
} else {
	console.log("0");
}*/






/*Свойство с наибольшим значением
Есть объект salaries с зарплатами. Напишите код, который выведет имя сотрудника, у которого самая большая зарплата.

Если объект пустой, то пусть он выводит «нет сотрудников».
Например:
"use strict";

var salaries = {
"Вася": 100,
"Петя": 300,
"Даша": 250
};

//... ваш код выведет Петя
//-----------------------------------------------------------------------------------------------------------------------------------*/

/*let salaries = {
	"Вася": 100,
	"Петя": 300,
	"Даша": 250,
};

function isEmpty(obj) {
	for (let key in obj) {
    // если тело цикла начнет выполняться - значит в объекте есть свойства
    return false;
  }
  return true;
}

function maxValueObject(obj) {
	let max = 0;
	let name = "";
for (let key in obj) {
  if(obj[key] > max) {
	max = obj[key];
	name = key;
  }
}
return(name + " " + max);
}

if (isEmpty(salaries) == !true) {
	console.log(maxValueObject(salaries));
} else {
	console.log("Нет сотрудников");
}*/

/*ДЗ:

Напиши функцию map(fn, array), которая принимает на вход функцию и массив, и обрабатывает каждый элемент массива этой функцией, возвращая новый массив. Пример:

function square(x) { return x * x; } // возведение в квадрат
console.log(map(square, [1, 2, 3, 4])); // [1, 4, 9, 16]
console.log(map(square, [])); // []

Обрати внимание: функция не должна изменять переданный ей массив:

var arr = [1, 2, 3];
console.log(map(square, arr)); // [1, 4, 9]
console.log(arr); // [1, 2, 3]
//----------------------------------------------------------------------------------------------------------------------------------*/

/*function map(fn, array) {
	let newArray = [];
	for(let i = 0; i < array.length; i++) {
		newArray.push(square(array[i]));
	}
	return newArray;
}

function square(x) {
	return x * x;
}

let array = [2, 3, 4, 2, 1, 3];
console.log(map(square, array));
console.log(array);
*/

})();

