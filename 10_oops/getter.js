class React{
    constructor(password, apikey){
        this.password = password
        this.apikey = apikey
    }
    get doNOtGetPassword(){
        return `${this.password} get`
    }
    set passwords(pass){
        this.password = pass
    }
}
const react = new React(123, "idk")
console.log(react.doNOtGetPassword);
