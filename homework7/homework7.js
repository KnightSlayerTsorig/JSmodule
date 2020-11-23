/*
//- Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку
исчезал элемент с id="text".
let text = document.getElementById('text');
text.onclick = () => {
    text.style.display = 'none';
};

//- Создайте кнопку, при клике на которую, она будет скрывать сама себя.
let button = document.getElementById('button');
button.style.width = '200px';
button.style.height = '70px';
button.style.margin = '14px';
button.style.textAlign = 'center';
button.style.border = 'solid green';

button.onclick = () => {
    button.style.display = 'none';
}

//- створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати
//інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
let form1 = document.forms.form1;
let submit = form1.submit;

submit.onclick = () => {
    let age = form1.task3.value;
    if (age < 18) {
        alert('Ти гусь, свали звідси!')
    }
    else  {
        alert('Заходь старий!')
    }
};

//- Создайте меню, которое раскрывается/сворачивается при клике

let menuButton = document.getElementById('menuButton');

menuButton.onclick = () => {
    let menu = document.getElementById('menu');
    if (menu.style.display === 'none') {
        menu.style.display = 'flex';
        return;
    }
    menu.style.display = 'none';
};



//- Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'Lorem ipsum dolor sit amet'}.
//Вывести список комментариев в документ, каждый в своем блоке.
// Добавьте каждому комментарию по кнопке для сворачивания его body.

//- Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.
*/
/*let picturesArr = [
    {id: 1, url: 'pictures/k1.jpg'},
    {id: 2, url: 'pictures/k2.jpg'},
    {id: 3, url: 'pictures/k3.jpg'},
    {id: 4, url: 'pictures/k4.jpg'},
    {id: 5, url: 'pictures/k5.jpg'},
    {id: 6, url: 'pictures/k6.jpg'},
];

let gallery = document.getElementById('gallery');
let img = document.createElement('img');
let bt1 = document.createElement('button');
let bt2 = document.createElement('button');

bt1.innerText = 'Назад';
bt2.innerText = 'Вперед';

let i = 0
    img.width = 200;
    img.height = 300;
    img.src = picturesArr[i].url;

gallery.appendChild(bt1);
gallery.appendChild(img);
gallery.appendChild(bt2);

bt1.onclick = () => {
    i - 1 < 0
        ? i = picturesArr.length - 1
        : i--

    img.src = picturesArr[i].url;
};

bt2.onclick = () => {
    i + 1 > picturesArr.length - 1
        ? i = 0
        : i++

    img.src = picturesArr[i].url;
};*/

/*
- Сворити масив не цензцрних слів.
Сворити інпут текстового типу.
Якщо людина вводить слово і воно міститься в масиві не цензурних слів
кинути алерт з попередженням.
Перевірку робити при натисканні на кнопку

let words1 = document.forms.words1;
let submitWords = words1.submit;

submitWords.onclick = () => {
    let words = words1.words2.value;
    let badWords = ['хуй', 'пісюн', 'чмо', 'пизда'];
    for (let i = 0; i < badWords.length; i ++) {
        if (words === badWords[i]) {
            alert('Ти шо волчара?');
        }
    }
};


- Сворити масив не цензцрних слів.
Сворити інпут текстового типу.
Потрібно перевіряти чи не містить ціле речення в собі погані слова.
Кинути алерт з попередженням у випадку якщо містить.
Перевірку робити при натисканні на кнопку
*//**//*

let words1 = document.forms.words1;
let submitWords = words1.submit;

submitWords.onclick = () => {
    let words = words1.words2.value;
    let badWords = ['хуй', 'пісюн', 'чмо', 'пизда'];
    for (let i = 0; i < badWords.length; i ++) {
        if (words.includes(badWords[i])) {
            alert('Ти шо волчара?');
        }
    }
};

*//**//*

-- взять массив пользователей
*//**//*
let usersWithAddress = [
    {id:1,name: 'vasya', age: 14, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id:2,name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
    {id:3,name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
    {id:4,name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
    {id:5,name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
    {id:6,name: 'anya', age: 17, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
    {id:7,name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
    {id:8,name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
    {id:9,name: 'masha', age: 33, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
    {id:10,name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id:11,name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
];

//Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать как вместе так и по отдельности.
//1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
//2й - оставляет старше 29 лет включительно
//3й - оставляет тех у кого город киев
//Данные выводить в документ

let status = document.getElementById('status');

let age = document.getElementById('age');

let city = document.getElementById('city');

let check = document.forms.checkboxForm;
let submitCheck = checkboxForm.submit2;

submitCheck.onclick = () => {

    array = usersWithAddress;

    if (status.checked) {
        array = array.filter(value => !value.status);
    };
    if (age.checked) {
        array = array.filter(value => value.age >= 29);
    };
    if (city.checked) {
        array = array.filter(value => value.address.city === 'Kyiv');
    };
    let newArray = JSON.stringify(array);
    document.write(newArray);
};


(Прям овердоз с рекурсией) Создать функцию которая принимает какой-либо элемент DOM-структуры .Функция создает в
боди 2 кнопки (назад/вперед) при нажатии вперед, вы переходите к дочернему элементу, при еще одном нажатии на "вперед",
вы переходите к следующему дочернему элементу (лежащему на одном уровне) НО если у (какого-либо)дочеренего элемента
есть дети, то нажатие "вперед" позволяет нам войти внутрь элемента и  выводит первого ребенка. и тд.
Когда все дети заканчиваются, мы выходим из данного дочернего элемента и переходим к следующему, лежащему с ним на
одном уровне*/

let roundabout = document.getElementById('roundabout');
let bt3 = document.createElement('button');
let bt4 = document.createElement('button');

bt3.innerText = 'Назад';
bt4.innerText = 'Вперед';

roundabout.appendChild(bt3);
roundabout.appendChild(bt4);

let dom1 = document.getElementById('test');


const dom = (tag) => {
    const arr = [...tag.children];
    for (let j = 0; j < arr.length; j++) {
        for (let i = arr.length; i >= 0; i--) {
            bt4.onclick = () => {
                console.log(arr[i]);
                dom(arr[i++]);
            }
        }
    }
};


dom(dom1);
