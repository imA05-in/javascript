arr = [1,2,3]

const newNum = arr.reduce(function(acc, currval){
    return acc + currval
}, 0)


const newNum1 = arr.reduce( (acc, currval) => acc + currval, 0 )
// console.log(newNum1)


shoppingCart = [
    {
        name: "java course",
        price: 999
    },
    {
        name: "python course",
        price: 1999
    },
    {
        name: "javascript course",
        price: 2999
    },
    {
        name: "cpp course",
        price: 3999
    }
]

const total = shoppingCart.reduce( (acc , item)=> acc + item.price, 0 );
console.log(total);