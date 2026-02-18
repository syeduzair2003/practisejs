// // // // for (let i = 1; i <= 10; i++) {
// // // //     // console.log(i);
// // // // }

// // // // // console.log(`I am out of loop: ${i}`);

// // // // for (let i = 1; i <= 10; i++) {
// // // //     console.log(`Outer loop: ${i}`);
// // // //     for (let j = 1; j <= 10; j++) {
// // // //         console.log(i + '*' + j + '=' + i*j );
// // // //     }
// // // // }

// // // let index = 0;
// // // while (index <= 10) {
// // //     console.log(`Value of index is ${index}`);
// // //     index = index + 2;
// // // }

// // // let myArray = ['Supraman', 'Batman', 'Flash']

// // // let arr = 0;
// // // while (arr < myArray.length) {
// // //     console.log(myArray[arr]);
// // //     arr = arr + 1;
// // // }

// // let score = 1;
// // do {
// //     console.log(`Score is ${score}`);
// //     score++;
// // }  while (score <= 10); 

// // for (let i = 12345, j = "*****";
// //     i >= 0 && j.length > 0;
// //     i = i - 1, j = j.slice(0, -1)) {
// //     // console.log(i, j);
// // }


// // let size = parseInt(prompt("Enter the size:"));
// // let matrix = []; // Main array

// // for (let i = 0; i < size; i++) {
// //     matrix[i] = []; // Har index par ek naya array (row) banayein
    
// //     for (let j = 0; j < size; j++) {
// //         if (i === j) {
// //             matrix[i][j] = 1; // Diagonal element
// //         } else {
// //             matrix[i][j] = 0; // Baqi sab zeros
// //         }
// //     }
// // }

// // console.table(matrix);


// // for (let i = 1; i <= 10; i++) {
// //     console.log(i);
// // }


// let num = [5, 6, 7, 8, 9, 10];
// for (let i = 0; i < num.length; i++) {
//     // console.log(num[i]);
// }

// num.forEach((element) => {
//     console.log(element * element);
// });


// let name = "Uzair";
// let arr = Array.from(name);
// console.log(arr);


/*var cabs = ["careem", "uber", "bykea"]
 // Output required using above array using for loops:
`careem and uber are good services`
`careem and bykea are good services`
`uber and careem are good services`
`uber and bykea are good services`
`bykea and careem are good services`
`bykea and uber are good services*/


var cabs = ["careem", "uber", "bykea"];

for (let i = 0; i < cabs.length; i++) {
    for (let j = i + 1; j < cabs.length; j++) {
        if (i !== j) {
            console.log(`${cabs[i]} and ${cabs[j]} are good services`);
        }
    }
}