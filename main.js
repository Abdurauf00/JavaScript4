//N1

let dsadsa = prompt('Введите свое имя');
let year = +prompt('Введите нынешний год');
let myYear = +prompt('Введите год вашего рождения');

function first(year, myYear) {
    
let age = year - myYear ;
   let text =', Ваш возраст ' ;
   return dsadsa + text +age;
}

console.log(first(year, myYear));

//N2
function ChoToTam(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

let amount = prompt('Введите количество примеров');
let minNum = prompt('Введите минимальный диапазон');
let maxNum = prompt('Введите максимальный диапазон');

for (let i = 0; i < amount;  i++) {
    let num1 = ChoToTam(minNum, maxNum);
    let num2 = ChoToTam(minNum, maxNum);
    let aboba = ChoToTam(1, 5);
    let abobaNum;

    switch(aboba) {
        case 1:
            abobaNum = '+';
            break;
        case 2:
            abobaNum = '-';
            break;
        case 3:
            abobaNum = '*';
            break;
        case 4:
            abobaNum = '/';
            break;
    }

    let word = +prompt(num1 + abobaNum + num2 + ' =');
    let result = eval(num1 + abobaNum + num2);
    let answer = word == result ? ' - ответ верный' : ' - ответ неверный, правильный ответ - ' + result;
    console.log(num1 + abobaNum + num2 + ' = ' + ' Ваш ответ - ' + word + answer);
}