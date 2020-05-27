window.onload = function() {
	var formHandle = document.forms.icon_form;
	formHandle.onsubmit = processForm ;
    //form handler
    
    //using the function processForm - to do whatever we want to get after
    //the form is submitted.
    
    function processForm() {
        //getting the integer after the form is being submitted
        var integer = parseInt(document.forms[0].integer.value);
        // to get the div element to print the result and putting it in a //variable.
        var output = document.getElementById("result");
         
        //now, if the number is not entered or is 
        //not an number then print the error message
        // if it is good, then give the result after the form submission
        if(integer < 25){
            for(var i=1; i<=integer; i++){    
            }
            output.innerText += ("*".repeat(integer) + "x".repeat(integer) + "*".repeat(integer) +"\n").repeat(integer);
            output.innerText += ("\xa0\xa0".repeat(integer) + "x".repeat(integer) + "x".repeat(integer) + "\n").repeat(integer);
            output.innerText += ("*".repeat(integer) + "\xa0\xa0".repeat(integer) + "*".repeat(integer) + "\n").repeat(integer);
        }else{
            output.innerText = "Please enter valid positive integer";
        }
        
        // used .repeat to repeat anything for a particular number or time.
        // used \xa0\xa0 to provide space in the pattern.
        return false;
    }
    
}