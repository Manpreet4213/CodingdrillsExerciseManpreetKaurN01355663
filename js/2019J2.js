window.onload = function() {
	var formHandle = document.forms.time_form;
	formHandle.onsubmit = processForm ;

    function processForm() {
        var one = parseInt(document.forms[0].firstInteger.value);
        var two = parseInt(document.forms[0].secondInteger.value);
        var three = parseInt(document.forms[0].thirdInteger.value);
        var four = parseInt(document.forms[0].fourthInteger.value);
        var five = parseInt(document.forms[0].fivthInteger.value);
        
        var output = document.getElementById("result");
        
        
        if(!one || !two || !three || !four || !five || isNaN(one) || isNaN(two) || isNaN(three) || isNaN(four) || isNaN(five)){ 
           output.innerText = "Please enter all valid postive intgers.";
           
        } 
        else{
           output.innerText += "+".repeat(two) +"\n";
           output.innerText += "-".repeat(three) +"\n";
           output.innerText += "A".repeat(four) +"\n";
           output.innerText += "X".repeat(five) +"\n";  
        } 
        
        return false;
    }  
}

