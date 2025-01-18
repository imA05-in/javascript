const DBmessage = (function(){
    // console.log(`DB connected`);
    
    return `DB connected`
})()

// console.log(DBmessage);


//normal funnction

const dbMessage = function(){
    return `Db connecteD`
}

// console.log(dbMessage())
//END

//NAMED IIFE
(function namer(){
    console.log(`hello`);
})();

