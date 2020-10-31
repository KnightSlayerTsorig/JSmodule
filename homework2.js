/*
--створити масив та вивести його в консоль:
- з 5 числових значень
- з 5 стічкових значень
- з 5 значень стрічкового, числового та булевого типу


let arr1 = [4, 23, 6, 1, 52];
console.log(arr1);

let arr2 = ["sobaka", "kit", "dog", "cat", "птеродактиль"];
console.log(arr2);

let arr3 = ["neko", 987, true, 2 == 2, "hazmat"];
console.log(arr3);

-- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

let arr11 = [];
arr11.push(12);
arr11.push(2 !== 2);
arr11.push('Niko');
arr11.push(-1212);
arr11.push('background');
console.log(arr11);


- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині


let b = "<div>Something</div>";
for (let a = 0; a < 10; a++){
    document.write(b);
}

- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині


for (let a = 0; a < 10; a++){
    document.write('<div>Something ' + (a) + '</div>');
}

- За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

let a = 0;
while (a < 10){
    document.write('<h1>Something</h1>');
    a++;
}

- За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

let a = 0;
while (a < 10){
    document.write('<h1>Something ' + (a) + '</h1>');
    a++;
}

- Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

let arr4 = [1, 232, 23, 445, 2, 56, 4, 6, 7, 8];
for (i = 0; i < arr4.length; i++){
    console.log(arr4[i]);
}

- Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.


let arr4 = ["1", "232", "23", "445", "2", "56", "4", "6", "7", "8"];
for (i = 0; i < arr4.length; i++){
    console.log(arr4[i]);
}

- Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.

let arr4 = ["bread", 234, false, true, "potato", 2===2, 5, 67, 7 > 9, "stop"];
for (i = 0; i < arr4.length; i++){
    console.log(arr4[i]);
}

- Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки
булеві елементи



let arr4 = ["bread", 234, false, true, "potato", 2===2, 5, 67, 7 > 9, "stop"];
for (i = 0; i < arr4.length; i++){
    if (typeof arr4[i] == 'boolean'){
    console.log(arr4[i]);
    }
}

- Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof
вивести тільки числові елементи


let arr4 = ["bread", 234, false, true, "potato", 2===2, 5, 67, 7 > 9, "stop"];
for (i = 0; i < arr4.length; i++){
    if (typeof arr4[i] == 'number'){
    console.log(arr4[i]);
    }
}

- Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof
вивести тільки рядкові елементи


let arr4 = ["bread", 234, false, true, "potato", 2===2, 5, 67, 7 > 9, "stop"];
for (i = 0; i < arr4.length; i++){
    if (typeof arr4[i] == 'string'){
    console.log(arr4[i]);
    }
}

- Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення
 до конкретних індексів. Вивести в консоль всі його елементи в циклі.


let arr11 = [];
arr11[0] = 12;
arr11[1] = 'sobaka';
arr11[2] = 12 === 12;
arr11[3] = 12 !== 12;
arr11[4] = 'potato';
arr11[5] = 763;
arr11[6] = undefined;
arr11[7] = 'pumpkin';
arr11[8] = 'aba' === 'aba';
arr11[9] = 876;

console.log(arr11);


- Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

for (let i = 0; i < 10; i++){
    document.write(i);
    console.log(i);
}

- Створити цикл for на 100  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write


for (let i = 0; i < 100; i++){
    document.write(i);
    console.log(i);
}

- Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write


for (let i = 0; i < 100; i += 2){
    document.write(i);
    console.log(i);
}

- Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write

for (let i = 0; i < 100; i++){
    if (i % 2 == 0){
        document.write(i);
        console.log(i);
    }
}
- Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write


for (let i = 0; i < 100; i++){
    if (i % 2 !== 0){
        document.write(i);
        console.log(i);
    }
}

- Відтворити роботу годинника, відрахувавши 2 хвилини (2 цикли! 1й - хвилини, 2й - секунди)

for (let m = 0; m <= 2; m++){
    for (let s = 0; s < 60; s++){
        if (m === 2 && s === 0){
            console.log(m, s);
            break;
        }
    }
}
*/
- Відтворити роботу годинника, відрахувавши  2 години 20 хвилини (3 цикли! 1й - години, 2й - хвилини, 3й - секунди)

for (let h = 0; h <= 24; h++){
    for (let m = 0; m < 60; m++){
        for (let s = 0; s < 60; s++){
            if (h === 2 && m === 20 && s === 0){
                console.log(h, m, s);
                break;
            }
        }
    }
}
