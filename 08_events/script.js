// document.querySelector("#owl").onclick = function(){
//     alert('owl clicked')
// }
// document.querySelector("#images").addEventListener("click", function(e){
//     alert("image clicked")
// })

// document.querySelector("#owl").addEventListener("click", function owlClickMsg(e){
//     alert("owl clickd!")
//     console.log(e)
//     e.stopPropagation()
// })

document.querySelector('#google').addEventListener("click", function(e){
    // alert("google clicked")
    console.log(e)
    e.preventDefault()
    e.stopPropagation()
})


// document.querySelector("#images").addEventListener("click", function(e){
//     console.log(e.target.tagName)
//     if(e.target.tagName == "IMG"){
//         e.target.parentNode.remove()
//     }
//     else{
//         console.log(e.target.tagName)
//     }
// })

document.addEventListener('keypress', function(e){
    console.log(e.key)
    // console.log(e.target)
    console.log(e.type)
    console.log(e.timeStamp.toString())
})

document.addEventListener("mousemove", function(e){
    // console.log(e.type)
    // console.log(e.clientX+","+e.clientY);
    // console.log(e.screenX+","+e.screenY);
    
})