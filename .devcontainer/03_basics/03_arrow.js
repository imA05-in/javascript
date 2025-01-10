const user = {
    username:"user1",
    price: 999,
    // const name = 'IDK',

    WelcomMessage: function() {
        console.log(`${this.username}, welcome`);
        console.log(this);
         
    }
}
let idk = 5
// console.log(this)
// user.WelcomMessage();


//functions

// function addTwo(num1, num2){
// }

// const addfofr = function(n1, n2){
//     return n1 + n2;
// }



// arrow function

const addTwo = (num1, num2) =>{
    return num1 + num2;
}    

// console.log(addTwo(1,2))

const addThree = (n1, n2) => n1+ n2 

// console.log(addThree(1,0))


const addfour = (n1, n2) => (n1+ n2) 

// const addfour = (n1, n2) => n1+ n2
console.log(addfour(1,0))


const name = () => ({username: "mujhe nahi pata!!!!!(user1)"})

console.log(name());
