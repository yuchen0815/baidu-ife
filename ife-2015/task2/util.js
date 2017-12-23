/*此篇为task2中“2. JavaScript数据类型及语言基础” 2.1里的练习*/

/*练习一:使用递归实现深层克隆*/
//判断arr是否为一个数组，返回boolean值
function isArray(arr) {
    return Array.isArray(arr);
}

//利用递归实现深度克隆
function deepClone(obj) {
    if (typeof obj !== "object" && typeof obj !== "function") {
        return obj;         //原始类型直接返回
    }
    var o = isArray(obj) ? [] : {};
    for (var i in obj) {
        if (obj.hasOwnProperty(i)) {
            o[i] = typeof obj[i] === "object" ? deepClone(obj[i]) : obj[i]
        }
    }
    return o;
}

//此深度克隆的的对象类型限制为:数字、字符串、布尔、日期、数组、Object对象,不包含函数，正则对象等
/*知识点可参考 "https://segmentfault.com/a/1190000004524505" */

/*练习二:数组去重*/
//使用双层循环实现数组去重

function uniqArray(arr){
    var res = [];
    for(var i =0;i<arr.length;i++){
        for(var j=0;j<res.length;j++){
            if(arr[i]===res[j]){
                break;
            }
        }
        if(j == res.length){
            res.push(arr[i]);
        }
    }
    return res;
}

//使用indexOf()方法去重
    function uniqArray(arr){
        var res = [];
        for(var i=0;i<arr.length;i++){
            var current = arr[i];
            if(res.indexOf(current)===-1){
                res.push(current);
            }
        }return res;
    }

function uniqArray(obj){
    var arr = [];
    for(var i=0;i<obj.length;i++){
        var current = obj[i];
        if(arr.indexOf(current)===-1){
            arr.push(current);
        }
        return arr;
    }
}


//获取element相对于浏览器窗口的位置
function getPosition(element){
    var position = {};
    position.x = element.getBoundingClientRect().left;
    position.y = element.getBoundingClientRect().top;
    return position;
}


/*事件*/


//给一个element绑定一个针对event事件的响应，响应函数为listener
function addEvent(element,event,listener){
    if(element.addEventListener){
        element.addEventListener(event,listener);
    }else{
        element.attachEvent("on"+event,listner);
    }
}

//移除element对象对于event事件发生时执行listener的响应
function removeEvent(element,event,listener){
    if(element.removeEventListner){
        element.removeEventListner(event,listener);
    }else{
        element.detachElement("on"+event,listener)
    }
}

// 实现对click事件的绑定
function addClickEvent(element,listener){
    if(element.addEventListener){
        element.addEventListener("click",listener)
    }else if (element.attachEvent) {
        element.attachEvent("onclick",listner)   
    }
}
//简化代码
function addClickEvent(element,listner){
    addEvent(element,"click",listener)
}

//实现对于按Enter键时的事件绑定
function addEnterEvent(element,listener){
    addEvnet(element,"keydown",function(event){
        if(event.keycode == 13){     //Enter键的keycode值为13,在发生keydown和keyup事件的时候,event对象的keycode上会包含有一个代码，与键盘上的一个特定的键对应
            listner();
        }
    })
}

//使用事件代理实现新的方法
function delegateEvnet(element,tag,eventName,listner){
    addEvnet(element,eventName,function(event){
        event = window.event||event;
        target = event.target||event.srcElement;
        if(target.tagName.toLowerCase() == tag.toLowerCase()){
            listener.call(target,event);
        }
    })
}


//Ajax
//封装一个Ajax
function ajax(url,options){
    
    var dataResult;  //处理数据

    if(typeof options.data == "object"){
        var str = "";
        for(var i in options.data){
            str = str + i + "=" + options.data[i] + "&";
        }
        dataResult = str.substring(0, str.length - 1);
    }

    //判断type
    options.type = options.type || "GET";

    //发送请求
    var xhr = windows.XMLHttpRequest?new XMLHttpRequest():new ActiveXObject("Microsoft.XMLHTTP");
    xhr.open(options.type,url,true);
    if(options.type == "GET"){
        xhr.send(null);
    }else{
        xhr.setRequestHeader("content-type","application/x-www-form-urlencoded");
        xhr.send(dataResult);
    }
    
    //判断当前的响应是否成功
    xhr.onreadystatechange = function(){
        if(xhr.readystate == 200 && xhr.status == 4){
            if(options.onsuccess){
                options.onsuccess(xhr.responseXML,xhr.responseText)
            }
        }else{
            if(options.onfail){
                options.onfail();
            }
        }
    }
}