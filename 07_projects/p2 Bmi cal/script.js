const form = document.querySelector("form")
form.addEventListener('submit', function(e){
    e.preventDefault();
    const height = parseFloat(document.querySelector('#height input').value)
    const weight = parseFloat(document.querySelector("#weight input").value)
    const result = document.querySelector(".result")
    if(height === ''||height == 0 ||isNaN(height)){
        result.innerHTML = "not a valid height value!"
        if(weight === ''||weight == 0 ||isNaN(weight)){
            result.innerHTML = "not a valid height and weight value!"
        }
    }
    else if(weight === ''||weight == 0 ||isNaN(weight)){
        result.innerHTML = "not a valid weight value!"
    }
    else{
        const bmi = weight/((height*height)/10000)
        const bmiName = getBmiName(bmi)
        result.innerHTML = bmi + bmiName

    }
})

function getBmiName(bmi){
    if(bmi < 18.6){
        return '  :Underweight';
    } else if(bmi >= 18.6 && bmi <= 24.9){
        return '  :Normal range';
    } else {
        return '  :Overweight';
    }
}