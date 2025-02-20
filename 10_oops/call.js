function SetUserName(username){
    this.username = username
}

function createUser(username, email, password){
    SetUserName.call(this, username);  //normal funciton call => this refers to global context
    this.email = email;
    this.password = password
}

const user1 = new createUser("idk", "idk@goog.com", 123) // constructor call => this refers to user1
// console.log(user1);
// console.log(username);




function product(name, price){
    this.name = name;
    this.price = price;
}

function food(name, price){
    product.call(this, name, price);
    this.category =  "food"
}

console.log(new food("vanilla ice cream", 25).name);

