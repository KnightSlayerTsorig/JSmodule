/*

//Cоздать массив с 20 числами.
let arr1 = [1, 40, 343, 23, 4, 90, 76, 21, 3, 6, 9, 12, 15, 19, 14, 41, 45, 2221, 32, 300];

//при помощи filter получить числа кратные 3

arr1.filter((v) => {
    if (v % 3 === 0) {
        return v;
    }
});

//при помощи filter получить числа кратные 10

arr1.filter((v) => {
    if (v % 10 === 0) {
        return v;
    }
});

// перебрать (проитерировать) массив при помощи foreach()

arr1.forEach((v, i) => {
    console.log(`Index: ${i}, value: ${v}`);
})

//-- перебрать массив при помощи map() и получить новый массив в котором все значения
//будут в 3 раза больше

let arr2 = arr1.map(v => {
    return v * 3;
})

console.log(arr2);

//- создать массив со словами на 15-20 элементов.
//- отсортировать его по алфавиту в восходящем порядке.

let arr4 = ['sobaka', 'pes', 'dog', 'kit', 'cat', 'neko', 'katze', 'space', 'tea', 'something', 'potato', 'key', 'language', 'tool', 'scram'];
/*
let arr5 = arr4.sort();
console.log(arr5);

//-- отсортировать его по алфавиту  в нисходящем порядке.
let arr6 = arr4.sort((a, b) => {
    if (a > b) {
        return - 1
    }
    return 1
});

console.log(arr6);

//-- отфильтровать слова длиной менее 4х символов
let arr7 = [];

arr4.filter((v) => {
    if (v.length < 4) {
        arr4.splice(v, 0);
        arr7.push(v);
    }
});

console.log(arr7);

//-- перебрать массив при помощи map() и получить новый массив в котором
//все значения будут со знаком "!" в конце

let arr8 = arr4.map((v) => {
    return v + '!'
});

console.log(arr8);
*/
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
/*
//відсортувати його за  віком (зростання , а потім окремо спадання)

let usersAge = users.sort((a, b) => {
    if (a.age > b.age) {
        return 1
    }
    return -1
});
/*
let usersAge2 = users.sort((a, b) => {
    if (a.age > b.age) {
        return -1
    }
    return 1
});

console.log(usersAge);



// відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)
let userNameLength = users.sort((a, b) => {
    if (a.name.length > b.name.length) {
        return 1
    }
    return -1
});

let userName = users.sort((a, b) => {
    if (a.name.length > b.name.length) {
        return -1
    }
    return 1
});
console.log(userName);

//пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор
//(По якому принципу його створювати - ваше рішення), та зберегти це в новий масив
//(первинний масив залишиться без змін)


let usersId = [];
users.map((v, i) => {
    v.id = Math.round(Math.random());
    usersId.push(v);
});


//- відсортувати його за індентифікатором

usersId.sort((a, b) => {
    if (a.id > b.id) {
        return 1
    }
    return -1
});

console.log(usersId);
