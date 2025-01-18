const arr = ["js", "java", "python", "cpp", "ruby" ]
arr.forEach(function (languages){
    // console.log(languages)
})

arr.forEach( (items) => {
    // console.log(items)
})

arr.forEach( (elements, index, arr)=>{
    // console.log(elements,index, arr)
} )


const api = [
    {
        name:"pthon",
        extension: "py",
    },
    {
        name:"java",
        extension: "java",
    },
    {
        name:"javascript",
        extension: "js",
    }
]

api.forEach( (objects)=> {
    console.log(objects.name,': ', objects.extension);
} )