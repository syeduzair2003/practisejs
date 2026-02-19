/* Question 2
Create an object with properties name, email, password, age, gender, city,
country.
● Check if age and country properties exist in the object
or not.
● Also check firstName and lastName properties in the
object.*/

let usr = {
    name : "Uzair",
    email : "helloworld@gmailcom",
    password : "123456",
    age : 22,
    gender : "Male",
    city : "Karachi",
    country : "Pakistan"
}
// console.log("Age is exist:", "age" in usr);
// console.log("Country is exist:", "country" in usr);


/* Question 3 
Create a constructor function with some properties. Now create multiple
records using the constructor.*/


function person(person_name, person_age, person_gender) {
    this.name = person_name;
    this.age = person_age;
    this.gender = person_gender;
}

let person1 = new person("Uzair", 22 , "Male");
let person2 = new person("Alisha", 25 , "Female");
let person3 = new person("Akbar", 26 , "Male");

// console.log(person1.age);
// console.log(person2.gender);
// console.log(person3.name);


