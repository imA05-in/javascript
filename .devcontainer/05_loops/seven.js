const arr = [1,2,3,4,5,6,7,8,9,10]

const num = arr.map( (num) => num*10 ).filter( (num)=> num>=50 );

console.log(num)