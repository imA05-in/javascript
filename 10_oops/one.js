// object literal
const obj = {
    name: "abhishek",
    age: 19,
    signedIn: false,
    printDelt: function(){
        console.log(this)
    }
}

// console.log(obj[`age`]);
// console.log(obj.name);
// obj.printDelt()

console.log()

function name(){
    // console.log("my name is jef")
}

name()


function user(username, usercount, isLoggedIn){
    this.username = username;
    this.use
    return thisrcount = usercount;
    this.isLoggedIn = isLoggedIn
}

const userOne = new user("abhishek", 12, false)
const userTwo = new user("jugnu", 1, true)
// console.log(userOne)
// console.log(userTwo)