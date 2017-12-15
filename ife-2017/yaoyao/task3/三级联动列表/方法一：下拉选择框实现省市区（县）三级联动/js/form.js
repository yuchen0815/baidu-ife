function $(str){
    return document.getElementById(str);
}
var addrShow = $("addr-show");
var btn = document.getElementsByClassName("met1")[0];
var prov = $("prov");
var city = $("city");
var country = $("country")

/*用于保存当前所选的省和市*/
var current = {
    prov:'',
    city:'',
    country:''
};

/*自动获取省份列表*/
(function showProv(){
		btn.disabled = true;
		for(var i =0;i<provice.length;i++){
			var provOpt = document.createElement("option");
			provOpt.innerText = provice[i].name;
			provOpt.value = i;
			prov.appendChild(provOpt)
		}
})();

/*根据所选的省份来显示城市列表*/
function showCity(obj){
	var val = obj.options[obj.selectedIndex].value;//采用options的属性来选择当前下拉选项的索引值
	if(val!=current.prov){
		current.prov = val;
		addrShow.value = "";
		btn.disabled = true;
	}
	if(val!=null){
		city.length = 1;
		var cityLen = provice[val].city.length;
		for(var j=0;j<cityLen;j++){
			var cityOpt = document.createElement("option");
			cityOpt.innerText = provice[val].city[j].name;
			cityOpt.value = j;
			city.appendChild(cityOpt);
		}
	}
}

/*根据所选的城市来显示县区列表*/
function showCountry(obj){
	var val = obj.options[obj.selectedIndex].value;
	current.city = val;
	if(val!==null){
		country.length = 1;
		var countryLen = provice[current.prov].city[val].districtAndCounty.length;
		if(countryLen == 0){
			addrShow.value = provice[current.prov].name+'-'+provice[current.prov].city[current.city].name;
			return;
		}
		for(var n=0;n<countryLen;n++){
			var countryOpt = document.createElement("option");
			countryOpt.innerText = provice[current.prov].city[val].districtAndCounty[n];
			countryOpt.value = n;
			country.appendChild(countryOpt);
		}
	}
}
/*选取县区之后的处理函数*/
function selecCountry(obj){
	current.country = obj.options[obj.selectedIndex].value;
	if(current.city!=null && current.country!=null){
		btn.disabled = false;
	}
}

/*点击确认按钮显示用户所选的地址*/
function showAddr(){
	addrShow.value = provice[current.prov].name + '-'+provice[current.prov].city[current.city].name + "-" + provice[current.prov].city[current.city].districtAndCounty[current.city];
}
