//singleton
// Object.create
// object literals

const mySym = Symbol("key1")


const JsUser = {
     name: "Sanchit",
    "full name": "Jha Sanchit",
    [mySym]: "mykey1",
    age: 22,
    location: "Surat",
    email: "sanchitjha8888@gmail.com",
    isLoggedIn: false,
   lastLoginDays: ["Monday", "Friday"]
 }

console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["full name"])
console.log(JsUser["location"])
console.log(JsUser.age);
console.log(JsUser[mySym]);

JsUser.email = "jhasanchit8888@gmail.com"
console.log(JsUser);
Object.freeze(JsUser)
JsUser.email = "123sanchitjha@gmail.com"
console.log(JsUser);


// JsUser.greeting = function(){
//     console.log("Hello JS user");
// }
// JsUser.greetingTwo = function(){
//     console.log(`Hello JS user, ${this.name}`);
// }

// console.log(JsUser.greeting());
// console.log(JsUser.greetingTwo());