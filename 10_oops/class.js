class User {
    constructor(username, email, password){
        this.username = username
        this.email = email
        this.password = password
    }

    encryptPass(){
        return `${this.password}encrypted`
    }

    changeUsername(){
        return `${this.username.toUpperase()}`
    }
}

const obj = new User("abc", "abc@gb.com", 123)

console.log(obj.encryptPass());
