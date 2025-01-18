function name(){
    console.log(`Hello im Abhishek`);
    
}
// name();

function add(num1, num2){
    const c = num1 + num2;
    // console.log(`${c}`)
    return c;
}

// console.log(add(1,2))


function userLogginMessage(userName){
    return `A wild ${userName} just appeared`
}

// console.log(userLogginMessage("ikudu"))


const user = {
    userName: "ikudu ji",
    balance: 499.91
}


function handleObj(objectName){
    console.log(`Hello, ${objectName.userName} your order costs $${objectName.balance}`);
    return `hi`;
    // console.log("hello");
    // return 0;
        
}

// handleObj(user)



const arrau = [1,2,3,4,5,6,7];


function arraySec(getArray){
    return `${getArray[1]}`
}

console.log(arraySec(arrau));
