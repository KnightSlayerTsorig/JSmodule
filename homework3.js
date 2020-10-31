/*
-- створити об'єкт (не меньше 5ти властивостей) який описує
- собаку
- людину
- автомобіль
- квартиру
- книгу


let someObject = {
    dog: "Коллі",
    human: "Паразит",
    car: "Audi",
    flat: "50м.кв",
    book: "Чорний обеліск",
}

-- Створити масив та вивести його в консоль:
- з 5 собак
- 3 5 людей
- з 5 автомобілів


let dogs = ["Коллі", "Кавказька вівчарка", "Акіта-іну", "Пітбуль", "Дворняга"];
console.log(dogs);

let humans = ["Bob", "Dilan", "Tom", "Melissa", "Jerry"];
console.log(humans);

let cars = ["Mazda", "Toyota", "Audi", "BMW", "Ford"];
console.log(cars);

-- створити об'єкт (не меньше 5ти властивостей) який описує, одна з властивостей обов'язково повинна бути
об'єктом,ще одна - масивом
- будинок
- водій
- іграшку
- стіл
- сумка



let someObject2 = {
    house: {
        big: "red",
        medium: "yellow",
        small: "green",
    },
    driver: ["Norman", 23, "male"],
    toy: "TeddyBear",
    table: "white",
    bag: "big",
}

console.log(someObject2);


Дан массив:

let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];


- звернутися в відповідну ячейку масиву і відповідний параметр об'єкта і вивести в консольх наступне
- статус Андрія

console.log(users[7].status);

- статус Максима
console.log(users[4].status);

- ім'я передостаннього об'єкту
console.log(users[9].name);

- ім'я третього об'єкта
console.log(users[2].name);


- вік Олега
console.log(users[6].age);

/*
- вік Олі
console.log(users[3].age);

- вік + ім'я 5го об'єкта
console.log(users[4].name + users[4].age);

- вік + статус Анни
console.log(users[5].age + users[5].status);

-- Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або
document.getElementsByTagName :

- отримує текст з параграфа з id "content"
let content = document.getElementById('content');

- отримує текст з блоку з id "rules"
let rules = document.getElementById('rules');


- замініть текст параграфа з id 'content' на будь-який інший

let content = document.getElementById('content');
content.innerText = 'Що завгодно, але не те що було на початку.';

- замініть текст параграфа з id 'rules' на будь-який інший

let rules = document.getElementById('rules');
rules.innerText = 'Не те що хотілося б, але те що необхідно.';


- змініть кожному елементу колір фону на червоний

content.style.backgroundColor = 'red';
rules.style.backgroundColor = 'red';

- змініть кожному елементу колір тексту на синій

content.style.backgroundColor = 'blue';
rules.style.backgroundColor = 'blue';

- отримати весь список класів елемента з id=rules і вивести їх в console.log

console.log(rules.classList);

- отримати всі елементи з класом fc_rules

let c = document.getElementsByClassName('fc_rules');
console.log(c);

- поміняти колір тексту у всіх елементів fc_rules на червоний
*/

let fcRules = document.getElementsByClassName('fc_rules');
fcRules[0].style.color = 'red';
fcRules[1].style.color = 'red';
fcRules[2].style.color = 'red';
fcRules[3].style.color = 'red';

