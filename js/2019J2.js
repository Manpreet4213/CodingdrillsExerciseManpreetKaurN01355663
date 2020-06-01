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
        // I am not sure how to write this to ensure scalability. But, i have made changes in the else part of the problem.
        var output = document.getElementById("result");
        
        //now, if the one or more of numbers is not entered or is 
        //not an number then print the error message
        // if all are good, then give the result after the form submission
        if(!one || !two || !three || !four || !five || isNaN(one) || isNaN(two) || isNaN(three) || isNaN(four) || isNaN(five)){ 
           output.innerText = "Please enter all valid postive intgers.";
           
        } 
        else{
           output.innerText += "+".repeat(two) +"\n" + 
                               "-".repeat(three) +"\n" +
                               "A".repeat(four) +"\n" +
                               "X".repeat(five) +"\n"; 
        } 
        // I have made changes in this part for saclabilty.
        // used .repeat to repeat anything for a particular number or time.
        return false;
    }  
}

