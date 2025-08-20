const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username},${this.price} , welcome to website`);
        //console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()
// user.price= 499
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "Sanchit"
//     console.log(this.username);
// }
// chai()

// const chai = function () {
//     let  username = "Sanchit"
//     console.log(this.username);
    
// }

const chai = () => {
    let  username = "Sanchit"
    console.log(this.username);
    
}
//chai()

// const addTwo = (num1,num2) => {
//     return num1 + num2
// }

// const addTwo = (num1,num2) => (num1 + num2)
const addTwo = (num1,num2) => ({username: "Sanchit"})

// console.log(addTwo(3,4));
