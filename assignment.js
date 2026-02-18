/*Question 1
Make a program that will filter out all the even numbers
var numbers = [1, 3, 4, 6, 8, 9];
HINT: Array.filter */

function isEven(number) {
  return number % 2 == 0;
}

let value = [1, 3, 4, 6, 8, 9].filter(isEven);
// console.log(value)

/*Question 2 
Make a function that will check either the word is palindrome or not ?
Palindrome: A palindrome is a word, number, phrase, or other sequence of characters which
reads the same backward as forward, such as madam or dad.*/

function isPalindrome(word) {
  let reversing = word.split("").reverse("").join("");

  return word === reversing;
}
console.log(isPalindrome("dad"));
console.log(isPalindrome("madam"));
console.log(isPalindrome("hello"));

/*Question 3
Filter out students which has the substring ‘an.’ So it will return an array consisting of those students
names as per the matching criteria
var students = ['hassan', 'salman', 'kamran', 'rashid', 'faizan', ‘noor’];
HINT: String.includes*/

const names = ["hassan", "salman", "kamran", "rashid", "faizan", "noor"];
const output = names.filter((names) => names.includes("an"));

// console.log(output)

/* Question 4
You have a string “The quick brown fox jumps over the lazy dog”. Write a program to count number of
occurrences of word “the” in given string.
HINT: String.split*/

const paraGraph = "The quick brown fox jumps over the lazy dog";
const lowerPara = paraGraph.toLowerCase();
const newWord = lowerPara.split(" ");

const theCount = newWord.filter((lafz) => lafz === "the").length;

// console.log("The Occurences of the is", theCount, "times");

/* Question 5 
Write a two dimensional for loop program that will print. Get prompt from user & make identity matrix
accordingly
eg; if user enters 3 then output matrix will be of 3 x 3
1 0 0
0 1 0
0 0 1*/

// let num = prompt("Enter the num:");
// let mtrx = [];

// for (let i = 0; i < num; i++) {
//     mtrx[i] = [];

//     for (let j = 0; j < num; j++) {
//         if (i === j) {
//             mtrx[i][j] = 1;
//         } else {
//             mtrx[i][j] = 0;
//         }
//     }
// }

// console.table(mtrx);

/* Question 6
Write a for loop program that will print
12345 *****
1234 ****
123 ***
12 **
1 * */

let n = 5;

for (let i = n; i >= 1; i--) {
  let row = ""; // numbers

  for (let j = 1; j <= i; j++) {
    row += j;
  }

  row += " ";

  for (let k = 1; k <= i; k++) {
    row += "*";
  }

  //   console.log(row);
}

/*Question 7
Write a JavaScript function which accepts an argument and returns the type.
Note : There are six possible values that typeof returns: object, boolean, function, number, string, and
undefined.*/

const stdData = {
  fullName: "Uzair Ahmed",
  stdID: 123,
  isPass: true,
  weight: undefined,
};

function rename(value) {
  return value;
}
// console.log(rename);

// console.log(typeof stdData.isPass);

/*Question 8
Make a javascript function, that should take arguments (2 operands + 1 operator) & based on that
perform these actions.
i) Sum
ii) Divide
iii) Subtract
iv) Multiply
Note: Take values from user*/

function calculate(a, b) {
  return {
    sum: a + b,
    sub: a - b,
    div: a / b,
    mul: a * b,
  };
}
// let u1 = Number(prompt("Enter first number"));
// let u2 = Number(prompt("Enter second number"));

// const outPutt = calculate(u1,u2);
// console.log(outPutt);

/*Question 9
We need to store studentData into a variable, which data type we will be using to store that ? Could you
make that variable & store these values
- firstName
- lastName
- rollNumber
- className
- midtermScore
- finalScore
- hasClassRepresentativeRole*/

// const studentData = {
//     firstName: "Uzair",
//     lastName: "Ahmed",
//     rollNumber: 46,
//     className: "DMM",
//     midtermScore: "75%",
//     finalScore: "75%",
//     hasClassRepresentativeRole: true,

// }

// console.log(studentData);

/*Question 10
After storing these above values, could you access these below properties using javascript
- className
- finalScore
- hasClassRepresentativeRole*/

const studentData = {
  firstName: "Uzair",
  lastName: "Ahmed",
  rollNumber: 46,
  className: "DMM",
  midtermScore: "75%",
  finalScore: "75%",
  hasClassRepresentativeRole: true,
};

// console.log(studentData.className);
// console.log(studentData.finalScore);
// console.log(studentData.hasClassRepresentativeRole);
