
function addLang(langu){
    const li = document.createElement("li");
    li.innerHTML = langu;
    // li.createTextNode(langu);
    document.querySelector(".Plang").appendChild(li)
}

addLang("typescript")

function addOptiLang(langu){
    const li = document.createElement("li");
    li.append(document.createTextNode(langu));
    document.querySelector(".Plang").appendChild(li)
}

addOptiLang("Python")

// edit

// document.querySelector("li:nth-child(2)").innerHTML = "mojo"

const liNew = document.querySelector("li:nth-child(2)");
// liNew.innerHTML = "java"

const NewLi = document.createElement("li");
NewLi.textContent = "React";
liNew.replaceWith(NewLi)


//remove

const LastLang = document.querySelector("li:last-child")
LastLang.remove();