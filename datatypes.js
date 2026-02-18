// // number 
// // BigInt
// // string
// // boolean
// // null
// // undefined
// // symbol

// // Primitive data types
// // string, number, boolean, null, undefined, symbol

// const score = 100;
// const scoreValue = 100.3;

// const isLoggedIn = false;
// const outsideTemp = null;
// let userEmail;

// const id = Symbol("321");
// const anotherId = Symbol("321");
// console.log(id === anotherId);

// // Reference Non-primitive data types
// // Arrays
// // Objects
// // Functions

// const heros = ["Superman", "Batman", "Spiderman"];
// let myObj = {
//     name: "Uzair",
//     age: 22,
// }

// const myFunction = function () {
//     console.log("Hello World");
// }

// console.log(typeof heros);
// console.log(typeof myObj);
// console.log(typeof myFunction);

let nStr = "12345";
let newStar = "*****";

// console.log(nStr, newStar);

for (let k = 5; k <= 1; k--){
        let curNum = " ";
        let curStar = " ";
        for (let i = 0; i < k; i++){
            curNum += nStr[i];
        }
        for (let j = 0; j < k; j++){
            curStar += newStar[j];
        }
        console.log(curNum, curStar);

    }