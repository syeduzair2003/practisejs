/* Question 1
Write a program to print numeric counting from 1 to 10.*/

// for (let i = 1; i <= 10; i++) {
//     // console.log(i);
// }

/* Question 2
Write a program to print multiplication table of any number
using for loop. Table number & length should be taken as an
input from user.*/

// let table = Number(prompt("Enter a number to show it's multiplication table"));
// let length = Number(prompt("Enter the length of multiplication table"));

// for (let i = 1; i <= length; i++) {
//     // console.log(`${table} * ${i} = ${table * i}`);
// }

/* Question 3 
Write a program to print items of the following array
using for loop:
fruits = [“apple”, “banana”, “mango”, “orange”,
“strawberry”] */

const fruits = ["apple", "banana", "mango", "orange", "strawberry"];
for (let i = 0; i < fruits.length; i++) {
    // console.log("Element at Index " + i + " is " + fruits[i]);
}

/* Question 4 
Generate the following series in your browser. See
example output.
a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k*/

// a. Counting: 1 to 15

for (let i = 1; i <= 15; i++) {
    // console.log(i);
}

//b. Reverse Counting: 15 to 1

for (let i = 15; i >= 1; i--) {
    // console.log(i);
}

// c. Even: 2 to 20

for (let i = 0; i <= 20; i += 2) {
    // console.log(i);
}

// d. Odd: 1 to 19

for (let i = 1; i <= 19; i += 2) {
    // console.log(i);
}

// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k

let series = [];
for (let i = 2; i <= 20; i += 2) {

    series.push(i + "k");
}
// console.log("Series: " + series.join(", "));


/* Question 5 
You have an array
A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
Write a program to enable “search by user input” in an
array.
After searching, prompt the user whether the given item is
found in the list or not. Example:*/

const Bak = ["cake", "apple pie", "cookie", "chips", "patties"];

let userIn = prompt("Welcome to ODD Bakery! What do you want to order?").toLowerCase();

let found = Bak.includes(userIn);

if (found) {
    alert(`${userIn} is available at index ${Bak.indexOf(userIn)} in our bakery`);
} else {
    alert(`We are sorry. ${userIn} is not available in our bakery`);
}



/* Question 6 
Write a program to identify the largest number in the
given array.
A = [24, 53, 78, 91, 12].*/

const A = [24, 53, 78, 91, 12];
let largest = A[0];
for (let i = 0; i < A.length; i++) {
    if (A[i] > largest) {
        largest = A[i];
    }
}
// console.log("Array items: 24, 53, 78, 91, 12");
// console.log("Largest number is " + largest);

/* Question 7 
Write a program to identify the smallest number in the
given array.
A = [24, 53, 78, 91, 12].*/

const B = [24, 53, 78, 91, 12];
let smallest = B[0];
for (let i = 0; i < B.length; i++) {
    if (B[i] < smallest) {
        smallest = B[i];
    }
}
// console.log("Array items: 24, 53, 78, 91, 12");
// console.log("Smallest number is " + smallest);


/* Question 8 
Write a program to print multiples of 5 ranging 1 to*/

for (let i = 5; i <= 100; i += 5) {
    // console.log(i);
}