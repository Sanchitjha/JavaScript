
function sayMyName () {
console.log("S");
console.log("A");
console.log("N");
console.log("C");
console.log("H");
console.log("I");
console.log("T");
}

//sayMyName()

// function addTwoNumbers(number1,number2) {
//     console.log(number1 + number2);
    
// }

// function addTwoNumbers(number1,number2) {
// let result = number1 + number2
// return result
//     return number1 + number2
// }

// const result = addTwoNumbers(3,5 )
// console.log("Result:", result);

function loginUserMessage(username){

    if(!username){
           console.log("Please enter a username");  
           return   
    }
      return `${username} just logged in`
}
//console.log (loginUserMessage("Sanchit"))
// console.log (loginUserMessage())

function calculateCartprice(val1,val2,...num1){
    return num1
}
//console.log(calculateCartprice(200,300,400,500))

const user = {
    username: "Sanchit",
    Price: 499
}
const user2 = {
    username: "Manav",
    Price: 599
}

function handleObject (anyobject) {
    console.log(`Username is ${anyobject.username} and The Price is ${anyobject.Price}`);
}

// handleObject(user)
// handleObject(user2)
handleObject({
    username: "Omkar",
    Price: 399
})

const NewArray = [200,300,400,500]
 function returnsecondValue(Array){
      return Array[1]
 }
//  console.log(returnsecondValue(NewArray));
// console.log(returnsecondValue([200,300,400,500])); 
