let setId;
const start = document.querySelector("#start")
start.addEventListener("click",function(e){
    // setId = setInterval(function(e){
    //     console.log(Date.now(),e)
    // },1000, "hello")
    // console.log(randomColor())
    setId = setInterval(function(){
        document.querySelector("body").style.backgroundColor = randomColor()
      },100)
    })
    
    const stop = document.querySelector("#stop")
    stop.addEventListener("click",function(e){
      clearInterval(setId)
      console.log("STOPPED")
      document.querySelector("body").style.backgroundColor = "black"
})


const randomColor = function () {
  const hex = "123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    const index = Math.floor(Math.random() * 16);
    color += hex[index];
  }
  return color;
};
// console.log(randomColor());