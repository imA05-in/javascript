function addLang(lang){
    const language = document.createElement('li');
    language.innerHTML = lang;
    document.querySelector(".Plang").appendChild(language)
}

// addLang("python")

function addOptiLang(langu){
    const li = document.createElement("li");
    li.innerHTML = langu
    document.querySelector(".Plang").appendChild(li)
}

addOptiLang("typescript")