const clock = document.querySelector("#clock")

let date = new Date();
let time = date.toLocaleTimeString();
clock.innerHTML = time

setInterval(function(){
    let date = new Date();
    let time = date.toLocaleTimeString();
    clock.innerHTML = date.toLocaleTimeString()

},1000)