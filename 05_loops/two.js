const arr = [1,2,3,4,5]

for (const i of arr) {
    // console.log(i)
}


//map
const map = new Map();
map.set("name","user1")
map.set("age",19)
map.set("IN","India")
map.set("education","hs")

for (const [key, value] of map) {
    console.log(key+`: ` +value)
}


//objects forOf
const obj = {
    name: "user1",
    age: 87,
    location: "nayi haveli"
}

for (const element of obj) {
    // console.log(element)
}