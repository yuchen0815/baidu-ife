var inputText = document.getElementById("inputText");
var inputPw1 = document.getElementById("inputPw1");
var inputPw2 = document.getElementById("inputPw2");
var inputEmail = document.getElementById("inputEmail");
var inputPhone = document.getElementById("inputPhone");
var infoText = document.getElementById("infoText");
var infoPw1 = document.getElementById("infoPw1");
var infoPw2 = document.getElementById("infoPw2");
var infoEmail = document.getElementById("infoEmail");
var infoPhone = document.getElementById("infoPhone");
var button = document.getElementById("submit");

var f1,f2,f3,f4,f5;
button.onclick = function(){
	if(f1&&f2&&f3&&f4&&f5){
		alert("输入成功");
	}else{
		alert("输入有误，请检查");
	}
}

inputText.onfocus = function(){
	infoText.style.opacity = "1";
}
inputText.onblur = function(){
	var inputTextValue = inputText.value;
	if(countLength(inputTextValue)==0){
		infoText.innerHTML = "姓名不能为空";
		infoText.style.color = "red";
		inputText.style.border = "red solid 2px"
	}else if(countLength(inputTextValue)>=4&&countLength(inputTextValue)<=16){
		infoText.innerHTML = "输入正确";
		infoText.style.color = "green";
		inputText.style.border = "green solid 2px";
		f1 = true
	}else{
		infoText.innerHTML = "输入格式错误,请输入4-16个字符";
		infoText.style.color = "red";
		inputText.style.border = "red solid 2px"
	}
}

inputPw1.onfocus = function(){
	infoPw1.style.opacity = "1"
}
inputPw1.onblur = function(){
	var inputPw1Value = inputPw1.value;
	if(countLength(inputPw1Value)==0){
		infoPw1.innerHTML = "请输入密码";
		infoPw1.style.color = "red";
		inputPw1.style.border = "red solid 2px"
	}else if(countLength(inputPw1Value)>=4&&countLength(inputPw1Value)<=16){
		infoPw1.innerHTML = "输入正确";
		infoPw1.style.color = "green";
		inputPw1.style.border = "green solid 2px";
		f2 = true;
	}else{
		infoPw1.innerHTML = "请输入正确格式";
		infoPw1.style.color = "red";
		inputPw1.style.border = "red solid 2px"
	}
}

inputPw2.onfocus = function(){
	infoPw2.style.opacity = "1"
}
inputPw2.onblur = function(){
	var inputPw2Value = inputPw2.value;
	var inputPw1Value = inputPw1.value;
	if(inputPw2Value===inputPw1Value){
		infoPw2.style.color = "green";
		infoPw2.innerHTML = "输入正确";
		inputPw2.style.border = "green solid";
		f3 = true
	}else{
		infoPw2.innerHTML = "输入错误,请输入相同的密码";
		infoPw2.style.color = "red";
		inputPw2.style.border = "red solid 2px"
	}
}
inputEmail.onfocus = function(){
	infoEmail.style.opacity = "1"
}
inputEmail.onblur = function(){
	var e = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+\.[a-zA-Z0-9_-]+$/,
	inputEmailValue = inputEmail.value;
	if(e.test(inputEmailValue)){
		infoEmail.innerHTML = "输入正确";
		infoEmail.style.color = "green";
		inputEmail.style.border = "green solid 2px";
		f4 = true;
	}else{
		infoEmail.innerHTML = "输入错误，请输入正确的邮箱地址";
		infoEmail.style.color = "red";
		inputEmail.style.border = "red solid 2px"
	}
}
inputPhone.onfocus = function(){
	infoPhone.style.opacity = "1";
}
inputPhone.onblur = function(){
	var p = /^1(3|4|5|7|8)\d{9}$/;
	var inputPhoneValue = inputPhone.value;
	if(p.test(inputPhoneValue)){
		infoPhone.innerHTML = "输入正确";
		infoPhone.style.color = "green";
		inputPhone.style.border = "green solid 2px";
		f5 = true
	}else{
		infoPhone.innerHTML = "输入错误,请输入11位手机号码";
		infoPhone.style.color = "red";
		inputPhone.style.border = "red solid 2px"
	}
}


function countLength(str){
	var length = 0;
	for(var i=0;i<str.length;i++){
		if(str[i].charCodeAt()>255||str[i].charCodeAt()<0){
			length+=2;
		}else{
			length++;
		}
	}return length;
}