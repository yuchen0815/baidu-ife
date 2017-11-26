window.onload = function(){
  var root = document.getElementById("root");
  var remove = document.getElementById("remove");
  root.onclick=function(ev){
    var ev = ev||window.event;
    var target = ev.target||ev.srcElement;
    if(target.nodeName.toLowerCase()=="div"){
      var targetNode = target.innerHTML;
      target.style.background = "#34ddcf";
    }
  }
  remove.onclick = function(ev){
    var ev = ev||window.event;s
    var target = ev.target||ev.srcElement;
    if(target.nodeName.toLowerCase()=="div"){
      target.parentNode.removeChild(targetNode);
    }
  }
}