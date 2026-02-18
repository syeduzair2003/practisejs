// const mySym = Symbol("key1");

// const JsUser = {
//     name: "Uzair",
//     "full name": "Uzair Ahmed",
//     age: 22,
//     [mySym]: ("key1"),
//     email: "helloworld@gmailcom",
//     location: "Karachi",
//     isLoggedIn: false,
//     lastLoginDays: ["Monday", "Tuesday"]
// }

// console.log(JsUser.email);   //Dot Notation
// console.log(JsUser["email"]); //Bracket Notation
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

// JsUser.email = "helloworld@gmailcom";  
// Object.freeze(JsUser);

// JsUser.email = "hello@gmailcom";
// console.log(JsUser);


// Merging Objects

// const obj1 = { 1: "one", 2: "two" };
// const obj2 = { 3: "three", 4: "four", 5: "five" };
// // const obj3 = { ...obj1, ...obj2 };  //Spread Object

// // const obj3 = Object.assign({}, obj1, obj2);  //Object.assign

// console.log(obj3);



// var itemsArray = [
//     {name:"Cookie", price: "20", quantity: 5},
//     {name:"Chocolate", price: "30", quantity: 3},
//     {name:"Cake", price: "40", quantity: 2}

// ]
// console.log(itemsArray.price);


// var itemsArray = [
//   {name: "juice", price: "50", quantity: "3"},
//   {name: "cookie", price: "30", quantity: "9"},
//   {name: "shirt", price: "880", quantity: "1"},
//   {name: "pen", price: "100", quantity: "2"}
// ];

// var individualPrices = itemsArray.map(item => Number(item.price));

// var totalOfPrices = itemsArray.reduce((acc, item) => {
//   return acc + Number(item.price);
// }, 0);

// console.log("Individual Prices Array:", individualPrices); 

// console.log("Total Sum of Prices:", totalOfPrices); 


// var user = {
//   name: "Ahmed Khan",
//   email: "ahmed@example.com",
//   password: "securePassword123",
//   age: 25,
//   gender: "Male",
//   city: "Karachi",
//   country: "Pakistan"
// };

// console.log("Age is exist:","age" in user);


// Constructor Function
function person(person_name, person_age, person_gender) {
  this.name = person_name;
  this.age = person_age;
  this.gender = person_gender;
}

const person1 = new person("Uzair", 22 , "Male");
const person2 = new person("Ali", 22 , "Male");

console.log(person1);
console.log(person2);