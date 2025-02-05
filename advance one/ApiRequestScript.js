const xhr = new XMLHttpRequest();
xhr.open("get", "https://api.github.com/users/imA05-in")
// console.log("here")


let UserName;

xhr.onreadystatechange = function(){
    if(this.readyState === 4){

        const div = document.createElement("div")
        div.setAttribute("class", 'display' )
        
        const photoDiv = document.createElement("img")
        photoDiv.setAttribute("class", "photo")
        
        // console.log(xhr.readyState)
        const userDet = JSON.parse(xhr.responseText)
        // console.log(userDet)
        console.log(this.responseText)
        // UserName = userDet.name;
        div.innerHTML = `user name: ${userDet.name}`
        
        photoDiv.setAttribute("src",userDet.avatar_url)
        
        document.body.appendChild(photoDiv)
        
        // div.appendChild(photoDiv)
        document.body.appendChild(div)
    }
    
}
    xhr.send()
    
    
    