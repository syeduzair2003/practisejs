const mySym = Symbol("key1");

const JsUser = {
    name: "Uzair",
    "full name": "Uzair Ahmed",
    age: 22,
    [mySym]: ("key1"),
    email: "helloworld@gmailcom",
    location: "Karachi",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Tuesday"]
}

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
console.log(JsUser[mySym]);

JsUser.email = "helloworld@gmailcom";  
Object.freeze(JsUser);

JsUser.email = "hello@gmailcom";
console.log(JsUser);