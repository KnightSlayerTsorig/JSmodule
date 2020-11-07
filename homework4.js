/* - створити функцію яка виводить масив
let arr1 = [12];

function list(arr){
    console.log(arr);
}

list(arr1);

//Cтворити функцію яка заповнює масив рандомними числами та виводить його.
//Для виведення використати попвередню функцію.
function addToList(list){
    list.unshift(5, 4, 3);
}

addToList(arr1);
list(arr1);


//Cтворити функцію яка приймає три числа та виводить та повертає найменьше.
function smallNum(first, second, third){
        if(first < second && first < third){
            console.log(first);
        }
        else if(second < first && second < third){
            console.log(second);
        }
        else if(third < first && third < second){
            console.log(third);
        }
}

smallNum(12,1,3);

//Cтворити функцію яка приймає три числа та виводить та повертає найбільше.
function bigNum(first, second, third){
        if(first > second && first > third){
            console.log(first);
        }
        else if(second > first && second > third){
            console.log(second);
        }
        else if(third > first && third > second){
            console.log(third);
        }
}

bigNum(12,111,3);


//  - створити функцію яка виводить масив
let arr1 = [12, 45, 323, 434, 2];

function list(arr){
    console.log(arr);
}

list(arr1);

// створити функцію яка повертає найбільше число з масиву

function bigArr(arr){
    max = Math.max.apply(Math, arr);
    console.log(max);
}


bigArr(arr1);

// створити функцію яка повертає найменьше число з масиву
function smallArr(arr){
    min = Math.min.apply(Math, arr);
    console.log(min);
}


smallArr(arr1);

//створити функцію яка приймає масив чисел та складає значення елементів масиву та повертає його.
let arr1 = [12, 45, 323, 434, 2];

function arrPlus(arr){
    let count = 0;
    for (let element of arr){
       count = count + element;
    }

   console.log(count)
}
arrPlus(arr1);

//- створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
let arr1 = [12, 45, 323, 434, 2, 67, 7898];
j = arr1.length;


function arrMiddle(arr, arrLength){
    let count = 0;
    for (let element of arr){
       count = count + element;
    }
    middle = Math.round(count / arrLength);
    console.log(middle)
}
arrMiddle(arr1, j);

//- Створити функцію яка приймає масив будь яких объектів, та повертає значення кількості об'єктів в масиві
let arr2 = [
            {house: 'blue'},
            {horse: 'black'},
            {car: 'green', size: 'small'}
]

function arrLength(arr){
    console.log(arr.length);
}

arrLength(arr2);

//- Створити функцію яка приймає масив будь яких объектів, та повертає загальн кількість полів в них

function arrFieldsLength(arr){
    let count = 0;
    for(let obj of arr) {
      for(let value in obj) {
      count++;
      }
    }
   console.log(count)
}

arrFieldsLength(arr2);

//- створити функцію  яка скаладає значення елементів з однаковими індексами
//та повертає новий результуючий масив.

arr3 = [1,2,3,4];
arr4 = [1,2,3,4];

function arrSum(a,b){
    countArr = [];
    for (i = 0; i < a.length && i < b.length; i++){
        countArr.push(a[i] + b[i]);
    }
    return countArr;
}

// приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"


arr = [1,2,3,7];
i = 3;

function changeI(a, i){
   for (p = 0; p < a.length; p++){
        if (p === i){
            a.splice(p, 1, i + 1,);
            return a;
        }
   }
}

створити функцію яка буде переносити елементи з значенням 0 у кінець маисву.
Зберігаючи при цьому порядок не нульових значень. Двожина масиву від 2 до 100


let arr = [1,2,3,7,0,343,31,1,2,3,1,2,6,7,0,8,9,3,32,0,32,32,3,234,0,4,5,6,7,8,0,23,3,434,5,54,4];


function transfer(a){
    for (i = 0; i < a.length; i++){
        if (a[i] === 0){
            a.splice(i, 1);
            a.push(0);
        }
    }
    console.log(a);
}

transfer(arr);


Створити функцію яка :
- Додає в боді блок з текстом "Hello owu"
- Додає в боді елемент з текстом . Тип елементу та текст отримати через аргументи


function addText(){
    document.body.textContent = "Hello owu";
}

addText();

function addText2(a, b){
    c = document.createElement(b);
    c.textContent = a;
    document.body.appendChild(c);
}

addText2("Hello owu2", 'div');

//функція приймає 2 масиви з рівною кількістю об'єктів та з'єднює в один об'єкт користувача та місто з відповідними "id" та "user_id",
//та повертає масив цих з'єднаних об'єктів.
//Приклад масивів:

let usersWithId = [{id: 1, name: 'vasya', age: 31, status: false}, {id: 2, name: 'petya', age: 30, status: true}, {id: 3, name: 'kolya', age: 29, status: true}, {id: 4, name: 'olya', age: 28, status: false},];
let citiesWithId = [{user_id: 3, country: 'USA', city: 'Portland'}, {user_id: 1, country: 'Ukraine', city: 'Ternopil'}, {user_id: 2, country: 'Poland', city: 'Krakow'}, {user_id: 4, country: 'USA', city: 'Miami'},];

function separate(arr1, arr2) {
    let users = JSON.parse(JSON.stringify(arr1));
    let cities = JSON.parse(JSON.stringify(arr2));

    for (city of cities) {
        for (user of users) {
            if(city.user_id === user.id) {
                user.address = city;
            }
        }
    }
    return users;
}

let s1 = separate(usersWithId, citiesWithId);
console.log(s1)



беремо завдання з правилами з укроку №3 :
Та робимо це функцією.При цьому правила отримувати через аргумент.
*/

function content() {
    document.getElementById('content');
}

function rules() {
    document.getElementById('rules');
}

function content2() {
    let a = document.getElementById('content');
    a.innerText = 'Що завгодно, але не те що було на початку.';
}

content2();

function rules2() {
    let a = document.getElementById('rules');
    a.innerText = 'Не те що хотілося б, але те що необхідно.';
}

rules2();

function changeBackColor() {
    let a = document.getElementById('content');
    let b = document.getElementById('rules');
    a.style.backgroundColor = 'red';
    b.style.backgroundColor = 'red';
}

changeBackColor();

function changeTextColor() {
    let a = document.getElementById('content');
    let b = document.getElementById('rules');
    a.style.color = 'blue';
    b.style.color = 'blue';
}
changeTextColor();

function rulesClassList() {
    let a = document.getElementById('rules');
    console.log(a.classList);
}

rulesClassList();

function rulesElements() {
    let c = document.getElementsByClassName('fc_rules');
    console.log(c);
}

function rulesColor() {
    let a = document.getElementsByClassName('fc_rules');
    for (i = 0; i < a.length; i++){
        a[i].style.color = 'red';
    }
}
rulesElements();
rulesColor();

//Flat
//Вирівняти багаторівневий масив в однорівневий
let array = [1,3, ['Hello, World', [9,6,1]], ['oops'], 9];

console.log(array);

let arrFlat = array.flat([3]);

console.log(arrFlat);
