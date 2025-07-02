const score = 100
const scoreValue = 100.3 


const isLoggedIn = false
const outsideTemp =null
let userEmail;


const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

// Non primitive
//Array , Objects , Functions

const heros = ["shaktiman", "spiderman", "Batman"]

let myObj = {
    name: "Sanchit",
    age: 22, 
}

const myFunction = function () {
    console.log("Hello World");
    
}

console.log(typeof heros);

//Memory

//Stack(Primitive) ,Heap(Non-Premitive)

let myCollegename = "Bhagwan Mahavir"

let anothername = myCollegename
anothername = "DRB"

console.log(myCollegename);
console.log(anothername);

let user1 = {
        email: "sanchitjha8888@gmail.com",
        upi: "sanchit@123"
    }

let user2 = user1

user2.email = "jhasanchit8888@gmail.com"

console.log(user1.email);
console.log(user2.email);










