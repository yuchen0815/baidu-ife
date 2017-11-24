var root = document.getElementById("root");
var btnPreOrder = document.getElementById("preOrder");
var btnPostOrder = document.getElementById("postOrder");
var btnSearch = document.getElementById("btnSearch");
var timer = 0;
var inAnimation = false; 
var orderQueue = [];
function preOrder(root){
	orderQueue.push(root);
	for(var i = 0;i<root.childElementCount;i++){
		if(root.children[i]!==null){
			preOrder(root.children[i])
		}
	}
}
function postOrder(root){
	for(var j=0;j<root.childElementCount;j++){
		if(root.children[j]!==null){
			postOrder(root.children[j])
		}
	}
	orderQueue.push(root)
}

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


btnPreOrder.addEventListener("click",function(){
    preOrder(root);
    timer = 0;
},false)

btnPostOrder.addEventListener("click",function(){
    postOrder(root);
    timer = 0
},false)

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