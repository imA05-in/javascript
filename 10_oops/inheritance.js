class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username is: ${this.username}`);
        
    }
}

class Teacher  extends User{
    constructor(username, email, pass){
        super(username)
        this.email = email;
        this.pass = pass;
    }

    addCourse(){
        console.log(`${this.username} added a new course!`);
        
    }
}

const teacher = new Teacher("pto 9", "pta@9.com", 123)


class Teacher2  extends User{
    constructor(username, email, pass){
        super(username)
        this.email = email;
        this.pass = pass;
    }   

    addCourse(){
        console.log(`${this.username} added a new course!`);
        
    }
}


console.log(Teacher === Teacher2);
