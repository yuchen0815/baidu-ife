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
