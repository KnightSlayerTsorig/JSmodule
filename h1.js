/*
let hello;
hello = "Hello";
hello = "Hi";

let school;
school = "owu";
school = 8;

let com;
com = "com";
com = ".ua";

let country;
country = "ua";
country = "Zimbabwe";

let int1;
int1 = 1;
int1 = 21;

let int2;
int2 = 10;
int2 = 17;

let int3;
int3 = -999;
int3 = -27;

let int4;
int4 = 123;
int4 = 321;

let float1;
float1 = 3.14;
float1 = 14.3;

let float2;
float2 = 2.7;
float2 = 7.2;

let int5;
int5 = 16;
int5 = 61;

let boolT;
boolT = true;
boolT = false;

let boolF;
boolF = false;
boolF = true;

console.log(hello);
console.log(school);
console.log(com);
console.log(country);
console.log(int1);
console.log(int2);
console.log(int3);
console.log(int4);
console.log(float1);
console.log(float2);
console.log(int5);
console.log(boolT);
console.log(boolF);

alert(hello);
alert(school);
alert(com);
alert(country);
alert(int1);
alert(int2);
alert(int3);
alert(int4);
alert(float1);
alert(float2);
alert(int5);
alert(boolT);
alert(boolF);

document.write(hello);
document.write(school);
document.write(com);
document.write(country);
document.write(int1);
document.write(int2);
document.write(int3);
document.write(int4);
document.write(float1);
document.write(float2);
document.write(int5);
document.write(boolT);
document.write(boolF);


const float_const1 = 2378;
const float_const2 = -222;
const float_const3 = 1862;

const string_const1 = "Hi!";
const string_const2 = "My name is Donald.";
const string_const3 = "I love cookies!";

console.log(float_const1);
console.log(float_const2);
console.log(float_const3);
console.log(string_const1);
console.log(string_const2);
console.log(string_const3);

alert(float_const1);
alert(float_const2);
alert(float_const3);
alert(string_const1);
alert(string_const2);
alert(string_const3);

document.write(float_const1);
document.write(float_const2);
document.write(float_const3);
document.write(string_const1);
document.write(string_const2);
document.write(string_const3);


let name = prompt('Please enter your name') + " ";
let surname = prompt('Please enter your surname') + " ";
let patronymic = prompt('Please enter your patronymic') + ".";

let person = "Welcome " + surname + name + patronymic;

document.write(person);
alert(person);
console.log(person);


let number1 = +prompt('Please enter first number:')
let number2 = +prompt('Please enter second number:')
let number3 = +prompt('Please enter third number:')

console.log(number1);
console.log(number2);
console.log(number3);

let number1 = parseInt(prompt('Please enter first number:'));
let number2 = parseInt(prompt('Please enter second number:'));
let number3 = parseInt(prompt('Please enter third number:'));
let number4 = parseInt(prompt('Please enter fourth number:'));

result = number1 + number2 + number3 + number4;
console.log(result);


let number1 = parseFloat(prompt('Please enter first number:'));
let number2 = parseFloat(prompt('Please enter second number:'));
let number3 = parseFloat(prompt('Please enter third number:'));

result = number1 + number2 + number3;
console.log(result);


let number1 = Math.round(prompt('Please enter first number:'));
let number2 = Math.round(prompt('Please enter second number:'));
let number3 = Math.round(prompt('Please enter third number:'));

result = number1 + number2 + number3;
console.log(result);


let number1 = +prompt('Please enter first number:');
let number2 = +prompt('Please enter second number:');

result = (Math.pow(number1, number2));
console.log(result);

let a = 100;
let b = '100';
let c = true;
let d = undefined;

console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
console.log(typeof d);


5 < 6 -> true
5 > 6 -> false
5 === 6 -> false
5 >= 6 -> false
10 === 10 -> true
10 <= 10 -> true
10 !== 10 -> false
10 > 10 -> false
10 < 10 -> false
123 === '123' -> false
123 !== '123' -> true
*/

//Додаткові задачі

/*
let trafficLights = prompt('Please enter traffic lights color: ');

if (trafficLights === 'green'){
    alert('You can go!');
}
else if (trafficLights === 'yellow'){
    alert('Wait!');
}
else if (trafficLights === 'red'){
    alert('Stop!');
}
else{
    alert('Do whatever you want!');
}
*/

let trafficLights = prompt('Please enter traffic lights color: ');
let isRoadClear = confirm('Is there traffic on the road?');

if (trafficLights === 'green' && isRoadClear == false){
    alert('You can go!');
}
else if (trafficLights === 'green' && isRoadClear == true){
    alert('Wait for intruders to pass');
}
else if (trafficLights === 'yellow' && isRoadClear == false){
    alert('Wait, do not move!');
}
else if (trafficLights === 'yellow' && isRoadClear == true){
    alert('Wait');
}
else if (trafficLights === 'red' && isRoadClear == false){
    alert('Stop and wait');
}
else if (trafficLights === 'red' && isRoadClear == true){
    alert('Stop');
}
else{
    alert('Do whatever you want!');
}
