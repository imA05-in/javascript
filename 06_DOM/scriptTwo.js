const parentT = document.querySelector('.parent')
// console.log(document.querySelector('.parent').children)
// console.log(parentT)

// document.querySelector(".parent").children.style.backgroundColor = 'lightblue';

for(let i = 0;i<parentT.children.length;i++){
    console.log(parentT.children[i].innerHTML)
}

console.log("nodes: ", parentT.childNodes);
