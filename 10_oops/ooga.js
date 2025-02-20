function SetUserName(username){
    this.username = username
    return username
}

function createUser(username, email, password){
    // SetUserName.call(this, username);  //normal funciton call => this refers to global context
    this.username = SetUserName(username)
    this.email = email;
    this.password = password
}

const user1 = new createUser("idk", "idk@goog.com", 123)
console.log(user1);
