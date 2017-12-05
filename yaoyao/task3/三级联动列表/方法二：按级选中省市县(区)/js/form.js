function $(str){
	return document.getElementById(str)
}

var inputText = $("inputText");
var choiceList = $("choiceList").getElementsByTagName('li');
var showList = $("showList");
var button = $("admit")

var current = {
	prov:"",
	city:"",
	country:"",
	provVal:"",
	cityVal:"",
	countryVal:""
}
//自动加载省份列表
window.onload = showProv();
function showProv(){
	showList.innerHTML = "";
	choiceList[0].className = "selected"
	var provLen = provice.length;
	for(var i=0;i<provLen;i++){
		var provLi = document.createElement("li");
		provLi.innerHTML = provice[i]['name'];
		provLi.index = i;
		showList.appendChild(provLi)
	}
}

//给动态生成的li绑定点击事件
showList.onclick = function(ev){
	var n;
	var ev = ev||window.event;
	var target =  ev.target||ev.srcElement;
	if(target.nodeName.toLowerCase()=="li"){
		for(var z=0;z<3;z++){
			if(choiceList[z].className == "selected");
				n = z;
		}
		switch(n){
			case 0:
				showCity(target.index);
				break;
			case 1:
				showCountry(target.index);
				break;
			case 2:
				selectCountry(target.index);
				break;
			default:
				showProv();
		}
	}
}

//显示在所选择的省份下的城市列表
function showCity(index){
	showList.innerHtml = "";
	choiceList[0].className = "";
	choiceList[1].className = "selected";
	current.prov = index;
	current.provVal = provice[index].name;
	var cityLen = prov[index]['city'].length;
	for(var j=0;j<cityLen;j++){
		var cityLi = document.createElement("li");
		cityLi.innerText = provice[index]['city'][j].name;
		cityLi.index = j;
		showList.appendChild(cityLi)
	}
}

//显示在所选城市下的县/区的列表
function showCountry(index){
	showList.innerHTML = "";
	choiceList[1].className = "";
	choiceList[2].className = "selected";
	current.city = index;
	current.cityVal = provice[current.prov]['city'][index].name;
	var countryLen = provice[current.prov]['city'][index].districtAndCounty.length;
	if(countryLen == 0){
		inputText.value = current.prov + "-" + current.city
	}
	for(var k=0;k<countryLen;k++){
		var countryLi = document.createElement("li");
		countryLi.innerText = provice[current.prov]['city'][index].districtAndCounty[k];
		countryLi.index = k;
		showList.appendChild(countryLi);
	}
}

//选中具体的县区
function selectCountry(index){
	current.country = index;
	current.countryVal = provice[current.prov].city[current.city].districtAndCounty[index];
}

//点击确定按钮之后,恢复初始状态,且将所选地点显示在输入框中
button.onclick = function(){
	inputText.value = current.provVal+"-"+current.cityVal+"-"+current.countryVal;
	showCity.value = ""
}

//设置分别点击省市区标题的处理函数
document.getElementById("choiceList").onclick = function(ev){
	var ev = ev||window.event;
	var target = ev.target||ev.srcElement;
	if(target.nodeName.toLowerCase()=="li"){
		for(var z=0;z<3;z++){
			choiceList[z].className = ""
		}
		target.className = "selected";
		if(target.value == '0'){
			showProv()
		}else if(target.value == "1"){
			showCity(current.prov);
		}else{
			showCountry(current.city)
		}
	}
}
