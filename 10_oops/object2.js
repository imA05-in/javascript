function hi(){}
// console.log(typeof(hi));
// console.log(typeof(hi.prototype));
// console.log(hi.prototype);

function user(username, age){
    this.username = username;
    this.age = age;
    this.score1 = 4

}

user.prototype.score = function(){
    this.score1++;
    return this.score1
}

const user1 = new user("abc", 13)
console.log(user1.score());
