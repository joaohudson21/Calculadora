let result = document.getElementById('result');

function calculate(val)
{
    result.value += val;
}

function clearResult(){
    result.value = "";
}

function calculateResult(){
    try{
        result.value = eval(result.value)
    }
    catch(err){
        alert("DEU ERRO"); 
       }
}