window.onload = function() {
	var formHandle = document.forms.score_form;
	formHandle.onsubmit = processForm ;

    function processForm() {
        
        var small = document.getElementById('treatSmall').value;
        
        var medium = document.getElementById('treatMedium').value;
        
        var large = document.getElementById('treatLarge').value;
        
        
        
        var happinessScore = (parseInt(1*small) + parseInt(2*medium) + parseInt(3*large));
        console.log(happinessScore);
        
        
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
    




