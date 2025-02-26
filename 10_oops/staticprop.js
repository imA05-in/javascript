class User{
    constructor(username){
        this.username = username
    }
    static createId(){
        return `${(Math.random()).toFixed(2)*100}`
    }
    
}

const teacher = new User("teacher1")
// console.log(User("idk").createId());
console.log(teacher.createId());

