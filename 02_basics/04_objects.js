let user = new Object();
user = {
    name: "abhishek",
    address: {
        state: "london",
        street: "london hi hai bhai!!"
    }
}

const obj01 = {1: "a", 2: "b"}
const obj02 = {3: "a", 4: "b"}

const obj03 = Object.assign({}, obj01, obj02);
console.log(obj03);  