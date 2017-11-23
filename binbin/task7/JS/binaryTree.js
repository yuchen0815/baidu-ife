
var root = document.getElementById("root");
var preOrderBtn = document.getElementById("preOrder");
var inOrderBtn = document.getElementById("inOrder");
var postOrderBtn = document.getElementById("postOrder");
var timer = 0;

function showNode(node){
    node.style.backgroundColor = "#fff";
    setTimeout(function() {
        node.style.backgroundColor = "#ece943";
    }, timer+=500);
    setTimeout(function() {
        node.style.backgroundColor = "#fff"
    }, timer+=500);
}
function preOrder(root){
    if(root){
        showNode(root);
        preOrder(root.children[0]);
        preOrder(root.children[1])
    }
}
function inOrder(root){
    if(root){
        inOrder(root.children[0]);
        showNode(root);
        inOrder(root.children[1])
    }
}
function postOrder(root){
    if(root){
        postOrder(root.children[0]);
        postOrder(root.children[1]);
        showNode(root)
    }
}
preOrderBtn.addEventListener("click",function(){
    preOrder(root);
    timer = 0
},false);
inOrderBtn.addEventListener("click",function(){
    inOrder(root);
    timer = 0
},false);
postOrderBtn.addEventListener("click",function(){
    postOrder(root);
    timer = 0
},false)