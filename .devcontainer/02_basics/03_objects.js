// object literals

const obj1 = {
    name:"Abhishek",
    age: 19,
    location: "Naveda",
    email: "abhishek29112005@gmail.com"
}
obj1.greetings = function(){
    return "hello ji"
    Object.freeze(obj1);
}

obj1.greetingsTwo = function(){

    console.log(`hello ${this.name}`);
}
// console.log(obj1.name);
// console.log(obj1["name"]);
// console.log(obj1.greetings());
console.log(obj1.greetingsTwo())

console.log(`${obj1.greetings()} kya haal chal ${obj1.name}`);
