var root = document.getElementById("root");
var inAnimation = false; 
var orderQueue = [];

//前序遍历
function preOrder(root){
	orderQueue.push(root);
	for(var i = 0;i<root.childElementCount;i++){
		if(root.children[i]!==null){
			preOrder(root.children[i])
		}
	}
}

/*后序遍历
function postOrder(root){
	for(var j=0;j<root.childElementCount;j++){
		if(root.children[j]!==null){
			postOrder(root.children[j])
		}
	}
	orderQueue.push(root)
}
*/
//判断queueWord是否在orderQueue中
function render(queueWord){
	if(inAnimation){
		alert("in animation");
		return
	}
	inAnimation = true;
	var i = 0;
	orderQueue[i].style.backgroundColor = "#ddc434";
	var showContent = setInterval(function() {
		i++;
		if(i>=orderQueue.length){
			clearInterval(showContent);
			orderQueue[orderQueue.length-1].style.backgroundColor = "#fff";
			alert("未找到查询内容");
			inAnimation = false;
			return
		}
		orderQueue[i-1].style.backgroundColor = "#fff";
		orderQueue[i].style.backgroundColor = "#ddc434";
		if(orderQueue[i].childNodes[0].nodeValue.search(queueWord)!= -1){
			alert("找到查询内容");
			clearInterval(showContent);
			inAnimation = false;
			return
		}
	}, 500);
}

function resetBackgroundColor(){
	for(var i = 0;i<orderQueue.length;i++){
		orderQueue[i].style.backgroundColor = "#fff";
	}
}

function validateInput(){
	var input = document.getElementById("inText").value;
	if(input == ""){
		alert("输入为空")
	}
}

window.onload = function(){
	document.getElementById("btnSearch").onclick = function(){
		var input = document.getElementById("inText").value;
		resetBackgroundColor();

		preOrder(root);
		render(input)
	}
}
