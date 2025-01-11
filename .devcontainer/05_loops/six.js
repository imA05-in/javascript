const arr = [1,2,3,4,5,6,7,8,9,10]

const newNums = arr.filter( (num) => {return num > 4} );
// console.log(newNums);

const num = arr.map( (num) => {return num + 10} );
console.log(num)