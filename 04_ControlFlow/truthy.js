const obj = {
    name:" idk",
    age: undefined,
    age2:"  "
}

console.log(obj.age2);


const emptyObj = {

}

if(Object.keys(emptyObj).length=== 0){
    // console.log("empty object");
    
}


// nullish coalescing operator (??): null undefined

val1 = null;
val1 = null ?? 10;
val2 = undefined ?? 20;
console.log(val1);
console.log(val2);