/*==============================================
-  Створити функцію конструктор для об'єкту який описує теги
Властивості
 -назва тегу
 - опис його дій
 - масив з атрибутами (2-3 атрибути максимум)
 Кожен атрибут описати як окремий який буде містити
 -назву атрибуту
 -опис дії атрибуту
 інформацію брати з htmlbook.ru

 Таким чином описати теги
 -a
 -div
 -h1
 -span
 -input
 -form
 -option
 -select


function Describe(tagName, actions, arr){
    this.tagName = tagName;
    this.actions = actions;
    this.arr = arr;
}

let tag1 = '<a>';
let tag1A = 'Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок';
let tag1Arr = [
    {name: 'href', action: 'Задает адрес документа, на который следует перейти.'},
    {name: 'download', action: 'Предлагает скачать указанный по ссылке файл.'},
]
let tag2 = '<div>';
let tag2A = 'Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого';
let tag2Arr = [
    {name: 'align', action: 'Задает выравнивание содержимого тега <div>.'},
    {name: 'title', action: 'Добавляет всплывающую подсказку к содержимому.'},
]
let tag3 = '<h1>';
let tag3A = 'Тег <h1> представляет собой наиболее важный заголовок первого уровня.';
let tag3Arr = [
    {name: 'align', action: 'Определяет выравнивание заголовка.'},
]
let tag4 = '<span>';
let tag4A = 'Тег <span> предназначен для определения строчных элементов документа';
let tag4Arr = [
    {name: 'class', action: 'Определяет имя класса, которое позволяет связать тег со стилевым оформлением.'},
    {name: 'dir', action: 'Задает направление и отображение текста — слева направо или справа налево.'},
]
let tag5 = '<input>';
let tag5A = 'Тег <input> является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем';
let tag5Arr = [
    {name: 'accesskey', action: 'Переход к элементу с помощью комбинации клавиш.'},
    {name: 'align', action: 'Определяет выравнивание изображения..'},
]
let tag6 = '<form>';
let tag6A = 'Тег <form> устанавливает форму на веб-странице';
let tag6Arr = [
    {name: 'action', action: 'Адрес программы или документа, который обрабатывает данные формы.'},
    {name: 'method', action: 'Метод протокола HTTP.'},
]
let tag7 = '<option>';
let tag7A = 'Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>';
let tag7Arr = [
    {name: 'disabled', action: 'Заблокировать для доступа элемент списка.'},
    {name: 'label', action: 'Указание метки пункта списка.'},
]
let tag8 = '<select>';
let tag8A = 'Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка.';
let tag8Arr = [
    {name: 'form', action: 'Связывает список с формой.'},
    {name: 'multiple', action: 'Позволяет одновременно выбирать сразу несколько элементов списка.'},
]


let aTag = new Describe (tag1, tag1A, tag1Arr);
let divTag = new Describe (tag2, tag2A, tag2Arr);
let h1Tag = new Describe (tag3, tag3A, tag3Arr);
let spanTag = new Describe (tag4, tag4A, tag4Arr);
let inputTag = new Describe (tag5, tag5A, tag5Arr);
let formTag = new Describe (tag6, tag6A, tag6Arr);
let optionTag = new Describe (tag7, tag7A, tag7Arr);
let selectTag = new Describe (tag8, tag8A, tag8Arr);
console.log(aTag);
console.log(divTag);
console.log(h1Tag);
console.log(spanTag);
console.log(inputTag);
console.log(formTag);
console.log(optionTag);
console.log(selectTag);

/*
//Створити класс  для об'єкту який описує теги

class Describe2 {
    constructor(tagName, actions, arr) {
        this.tagName = tagName;
        this.actions = actions;
        this.arr = arr;
    }
}

let aTag2 = new Describe2 (tag1, tag1A, tag1Arr);
let divTag2 = new Describe2 (tag2, tag2A, tag2Arr);
let h1Tag2 = new Describe2 (tag3, tag3A, tag3Arr);
let spanTag2 = new Describe2 (tag4, tag4A, tag4Arr);
let inputTag2 = new Describe2 (tag5, tag5A, tag5Arr);
let formTag2 = new Describe2 (tag6, tag6A, tag6Arr);
let optionTag2 = new Describe2 (tag7, tag7A, tag7Arr);
let selectTag2 = new Describe2 (tag8, tag8A, tag8Arr);
console.log(aTag);
console.log(divTag);
console.log(h1Tag);
console.log(spanTag);
console.log(inputTag);
console.log(formTag);
console.log(optionTag);
console.log(selectTag);


//- Створити об'єкт car, з властивостями модель, виробник, рік випуску, максимальна швидкість,
//об'єм двигуна. додати в об'єкт функції:
//-- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
//-- info () - яка виводить всю інформацію про автомобіль
//-- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//-- changeYear (newValue) - змінює рік випуску на значення newValue
//-- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в
//поточний об'єкт car


let car = {
    model: 's7',
    manufacturer: 'audi',
    year: 2019,
    maxSpeed: 320,
    engineCapacity: 4,
    drive: function (){
        console.log('їдемо зі швидкістю '+ car.maxSpeed + ' на годину')
    },
    info: function (){
        console.log(car.model, car.manufacturer, car.year, car.maxSpeed, car.engineCapacity);
    },
    increaseMaxSpeed: function (newSpeed){
        car.maxSpeed = car.maxSpeed + newSpeed;
        console.log(car.maxSpeed);
    },
    changeYear: function(newValue){
        car.year = newValue;
        console.log(car.year);
    },
    addDriver: function(driver){
        car.driver = driver;
    }

}

let driver = {name: 'Kolhoz', age: 24};

car.drive();
car.info();
car.increaseMaxSpeed(40);
car.changeYear(2020);
car.addDriver(driver);

// Створити функцію конструктор яка дозволяє створювати об'єкти car

function Car2(model, manufacturer, year, maxSpeed, engineCapacity){
    this.model = model,
    this.manufacturer = manufacturer,
    this.year = year,
    this.maxSpeed = maxSpeed,
    this.engineCapacity = engineCapacity,
    this.drive = function() {
        console.log('їдемо зі швидкістю '+ this.maxSpeed + ' на годину')
    },
    this.info = function (){
        console.log(this.model, this.manufacturer, this.year, this.maxSpeed, this.engineCapacity);
    },
    this.increaseMaxSpeed = function (newSpeed){
        this.maxSpeed = this.maxSpeed + newSpeed;
        console.log(this.maxSpeed);
    },
    this.changeYear = function(newValue){
        this.year = newValue;
        console.log(this.year);
    },
    this.addDriver = function(driver){
        this.driver = driver;
    }
}
let driver2 = {name: 'Tractor', age: 24}
let automobile = new Car2('A4', 'Audi,', 2019, 220, '5,3');

automobile.drive();
automobile.info();
automobile.increaseMaxSpeed(20);
automobile.changeYear(2020);
automobile.addDriver(driver2);
console.log(automobile.driver);

- Створити клас який дозволяє створювати об'єкти car


class Car3 {
    constructor(model, manufacturer, year, maxSpeed, engineCapacity){
        this.model = model,
        this.manufacturer = manufacturer,
        this.year = year,
        this.maxSpeed = maxSpeed,
        this.engineCapacity = engineCapacity,
        this.drive = function() {
            console.log('їдемо зі швидкістю '+ this.maxSpeed + ' на годину')
        },
        this.info = function (){
            console.log(this.model, this.manufacturer, this.year, this.maxSpeed, this.engineCapacity);
        },
        this.increaseMaxSpeed = function (newSpeed){
            this.maxSpeed = this.maxSpeed + newSpeed;
            console.log(this.maxSpeed);
        },
        this.changeYear = function(newValue){
            this.year = newValue;
            console.log(this.year);
        },
        this.addDriver = function(driver){
            this.driver = driver;
        }
    }
}

let driver3 = {name: 'Taksist', age: 94}
let automobile = new Car3('Q8', 'Audi,', 2019, 250, '4,2');

automobile.drive();
automobile.info();
automobile.increaseMaxSpeed(20);
automobile.changeYear(2020);
automobile.addDriver(driver3);
console.log(automobile.driver);


-створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
--Створити 10 попелюшок , покласти їх в масив
--Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку він знайшов, та функцію "пошук попелюшки"
-- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить
 */


class Cinderella{
    constructor(name, age, feetSize){
        this.name = name;
        this.age = age;
        this.feetSize = feetSize;
    }
}

let anya = new Cinderella('Anya', 23, 35);
let vika = new Cinderella('Vika', 24, 36);
let maria = new Cinderella('Maria', 25, 37);
let petro =  new Cinderella('Petro', 26, 38);
let sobaka =  new Cinderella('Sobaka', 27, 39);
let potato =  new Cinderella('Potato', 28, 40);
let tracktorist =  new Cinderella('tracktorist', 29, 41);
let shrek =  new Cinderella('Shrek', 30, 45);
let wheel =  new Cinderella('Wheel', 2, 20);
let donald =  new Cinderella('Donald', 99, 42);


let Cinderellas = [anya, vika, maria, petro, sobaka, potato, tracktorist, shrek, wheel, donald];

class Prince{
    constructor(name, age, shoes){
        this.name = name;
        this.age = age;
        this.shoes = shoes;
        this.findCinderella = function(woman){
            for (woman of Cinderellas){
                if (woman.feetSize === this.shoes){
                    console.log('Вітаю ' + this.name + ' твоя принцесса: ' + woman.name);
                }
            }
        }
    }
}

let taksist = new Prince('Igor', 25, 37);
taksist.findCinderella(Cinderellas);
