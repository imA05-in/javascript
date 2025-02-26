const user  = {
    name: "ahbi",
    age: "just  a number",
    printT: function(){
        console.log(this.name);
    }
}

console.log(Object.getOwnPropertyDescriptors(user))

Object.defineProperties(user, {
    name: {writable: false}    
})


console.log(Object.getOwnPropertyDescriptors(user))

// const user1 = new user;
// console.log(this);

// this.hooga = "booga"

// user.printT()