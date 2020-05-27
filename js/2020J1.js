window.onload = function() {
	var formHandle = document.forms.score_form;
	formHandle.onsubmit = processForm ;
    //form handler
    
    //using the function processForm - do whatever we want to get after
    //the form is submitted.
    
    function processForm() {
        //getting all the cookies numbers of different types from the form //after the form is being submitted
        var small = document.getElementById('treatSmall').value;
        
        var medium = document.getElementById('treatMedium').value;
        
        var large = document.getElementById('treatLarge').value;
        
        
        //to calculate the happiness score
        //to convert string to integer used parseInt
        var happinessScore = (parseInt(1*small) + parseInt(2*medium) + parseInt(3*large));
        console.log(happinessScore);
        
        //now, if the one or more of cookies numbers is not entered or is //not an number print error message
        // if all are good, then give the result for Barley's mood.
        if(!small || !medium || !large || isNaN(small) || isNaN(medium) ||isNaN(large)){
            document.getElementById("error").innerHTML = "Please enter all valid postive intgers.";
        }else if(happinessScore < 10) {
            document.getElementById("result").innerHTML = "sad";
        }
        else{
            document.getElementById("result").innerHTML = "happy";
        }
        return false;
    }
}
    




