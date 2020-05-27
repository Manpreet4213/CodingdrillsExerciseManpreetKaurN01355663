window.onload = function() {
	var formHandle = document.forms.time_form;
	formHandle.onsubmit = processForm ;
    
    //form handler
    
    //using the function processForm - do whatever we want to get after
    //the form is submitted.
    function processForm() {
        //getting all the integers after the form is being submitted
        var one = parseInt(document.forms[0].firstInteger.value);
        var two = parseInt(document.forms[0].secondInteger.value);
        var three = parseInt(document.forms[0].thirdInteger.value);
        var four = parseInt(document.forms[0].fourthInteger.value);
        var five = parseInt(document.forms[0].fivthInteger.value);
        //to convert string to integer used parseInt
        
        var output = document.getElementById("result");
        
        //now, if the one or more of numbers is not entered or is 
        //not an number then print the error message
        // if all are good, then give the result after the form submission
        if(!one || !two || !three || !four || !five || isNaN(one) || isNaN(two) || isNaN(three) || isNaN(four) || isNaN(five)){ 
           output.innerText = "Please enter all valid postive intgers.";
           
        } 
        else{
           output.innerText += "+".repeat(two) +"\n";
           output.innerText += "-".repeat(three) +"\n";
           output.innerText += "A".repeat(four) +"\n";
           output.innerText += "X".repeat(five) +"\n";  
        } 
        // used .repeat to repeat anything for a particular number or time.
        return false;
    }  
}

