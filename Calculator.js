function button(num){
    let result = document.getElementById("inputbox");

    result.value += num;
}
function calculate()
{
    let result = document.getElementById("inputbox");
    try{
        result.value = eval(result.value);

    }
    catch(err)
    {
        alert("Wrong input");

    }

}
function clr()
{
    let result = document.getElementById("inputbox");

    result.value = " ";
    
}

   
