window.onload = function() {
	var formHandle = document.forms.icon_form;
	formHandle.onsubmit = processForm ;

    function processForm() {
        var integer = parseInt(document.forms[0].integer.value);
        var output = document.getElementById("result");
         
        if(integer < 25){
            for(var i=1; i<=integer; i++){    
            }
            output.innerText += ("*".repeat(integer) + "x".repeat(integer) + "*".repeat(integer) +"\n").repeat(integer);
            output.innerText += ("\xa0\xa0".repeat(integer) + "x".repeat(integer) + "x".repeat(integer) + "\n").repeat(integer);
            output.innerText += ("*".repeat(integer) + "\xa0\xa0".repeat(integer) + "*".repeat(integer) + "\n").repeat(integer);
        }else{
            output.innerText = "Please enter valid positive integer";
        }
        
        return false;
    }
    
}