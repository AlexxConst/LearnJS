'use strict';

// 1)
// let x = 5; console.log( ++x );

// 2)
// console.log([] + false - null + true); //NuN

//3)
/*let y = 1; 
let x = y = 2; alert(x); //2 */

// 4)
// console.log(typeof([] + 1 + 2)); //12

//5)
// console.log( "1"[0] ); //1

//6)
// console.log(2 && 1 && null && 0 && undefined);
// И запинается на лжи
// Оператор ИЛИ || всегда запинается на правде

//7)
// console.log(!!(1 && 2)===(1 && 2)); //false
// Два знака удараения превращает в булиновое значение.

//8)
// console.log((null || (2 && 3) || 4)); //3

//9)
// a = [1, 2, 3];
// b = [1, 2, 3];
// console.log(a === b); //false

//10)
// alert(+'Infinity'); //Infinity

//11)
// console.log("Ёжик" > "яблоко"); //false

//12)
// console.log(0 || '' || 2 || undefined || true || falsе); //2

// const restorantData = {
//     menu: [
//         {
//             name: 'Salad Caesar',
//             price: '14$',
//         },
//         {
//             name: 'Pizza Diavola',
//             price: '9$',
//         },
//         {
//             name: 'Beefsteak',
//             price: '17$',
//         },
//         {
//             name: 'Napoleon',
//             price: '7$',
//         },
//     ],
//     waitors: [
//         { name: 'Alice', age: 22 },
//         { name: 'John', age: 24 },
//     ],
//     averageLunchPrice: '20$',
//     openNow: true,
// };

// function isOpen(prop) {
//     let answer = '';
//     prop ? (answer = 'Открыто') : (answer = 'Закрыто');

//     return answer;
// }

// console.log(isOpen(restorantData.openNow));

// function isAverageLunchPriceTrue(fDish, sDish, average) {
//     if (+fDish.price.slice(0, -1) + +sDish.price.slice(0, -1) <
//         average.slice(0, -1)
//     ) {
//         return 'Цена ниже средней';
//     } else {
//         return 'Цена выше средней';
//     }
// }

// console.log(
//     isAverageLunchPriceTrue(
//         restorantData.menu[0],
//         restorantData.menu[1],
//         restorantData.averageLunchPrice
//     )
// );

// function transferWaitors(data) {
//     const copy = Object.assign({}, data);

//     copy.waitors = [{ name: 'Mike', age: 32 }];
//     return copy;
// }

// transferWaitors(restorantData);

let out = document.querySelector('.out');

// for (let i = 0; i < 5; i++) {
//     for (let j = 0; j < 10; j++) {

//         out.innerHTML += '*';
//     }
//     out.innerHTML += '<br>';
// }

const lines = 5;
let result = '';

for (let i = 0; i <= lines; i++) {
    for (let j = 0; j < lines - i; j++) {
        result += ' ';
    }
    for (let j = 0; j < 2 * i + 2; j++) {
        result += '*';
    }
    result += '\n';
}

console.log(result);
