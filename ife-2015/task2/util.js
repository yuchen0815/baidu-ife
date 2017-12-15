function isArray(arr){
    return Array.isArray(arr);//判断是否为一个数组
}
//深度克隆
function cloneObject(src){
    if(typeof src!=="object"||typeof src!=="function"){
        return src;
    }
    var o = isArray(src)?[]:{};
    for(var i in src){
        if(src.hasOwnProperty(i)){
            o[i] = typeof obj[i] === "object"?cloneObject(src[i]):obj[i]
        }
        return o;
    }
}
