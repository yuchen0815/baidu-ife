var validate_inText = document.getElementById("validate_inText");
validate_inText.onclick = function(){
	function validate_inText(){
		var inText = document.getElementById("inText");
		var intext = new RegExp("[a-zA-Z]");
		if(intext.length>=4||intext.length<=16){
			alert(intext);
		}
	}
}
