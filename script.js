function displaybutton(num){
result.value+=num
}

function cleartext(){
    result.value = " "
}

function operation(){
    result.value = eval(result.value)
}
function bcksp(){
    result.value=result.value.slice(0,-1)
}