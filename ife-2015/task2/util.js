
//判断arr是否为一个数组，返回boolean值
function isArray(arr){
  return Array.isArray(arr);
}

//利用递归实现深度克隆
function deepClone(obj){
  if(typeof obj !== "object" && typeof obj !== "function"){
    return obj;         //原始类型直接返回
  }
  var o = isArray(obj)?[]:{};
  for(var i in obj){
    if(obj.hasOwnProperty(i)){
      o[i] = typeof obj[i] === "object"? deepClone(obj[i]) : obj[i]
    }
  }
  return o;
}

//此深度克隆的的对象类型限制为:数字、字符串、布尔、日期、数组、Object对象,不包含函数，正则对象等
