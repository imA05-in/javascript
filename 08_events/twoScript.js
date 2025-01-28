const timeOut = setTimeout(function(){
    console.log("hello time is up!")
    setInterval(function(ti){
        let time = new Date
        time = time.toLocaleTimeString()
        document.querySelector("#time").innerHTML = `remaing time: ${time}`
    },1000)
},2000)

// setInterval(function(){
//     let time = new Date;
//     time = time.toLocaleTimeString();
// document.querySelector("#time").innerHTML =`remaining time: ${time}`
// },1000)

document.querySelector('#stop').addEventListener(function(e){
    clearTimeout(timeOut)
    console.log("STOPED")
})

// document.querySelector("#time").innerHTML = `remaing time: `