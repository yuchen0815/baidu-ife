function validate(){
	var inText = document.getElementById("inText").value;
	var length = 0;
	for(var i =0;i<inText.length;i++){
		if(inText[i].charCodeAt()>255||inText[i].charCodeAt()<0){
			length += 2;
		}else{
			length++;
		}
	}
	var result = document.getElementById("result");
	if(length<4||length>16){
		result.innerHTML = "长度必须大于4且小于16"
		result.style.color = "red"
	}else{
		result.innerHTML = "通过！"
		result.style.color = "green"
	}
}
document.getElementById("validate_inText").onclick = function(){validate()}
