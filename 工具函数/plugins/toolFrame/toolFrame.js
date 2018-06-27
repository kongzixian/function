/* 
* @Author: kong
* @Date:   2018-04-10 14:06:34
* @Last Modified by:   anchen
* @Last Modified time: 2018-06-17 15:04:10
*/
(function(window){
    
    var document = window.document,
    navigator = window.navigator,
    location = window.location;
    function ToolFrame(){
        return new ToolFrame.prototype.init();
    }
    ToolFrame.fn=ToolFrame.prototype={
        constructor: ToolFrame,
        init:function(){

        },
        // 浏览器滚动
        getScrollOffset:function(){
            if(window.pageXOffset){
                return {
                    x : window.pageXOffset,
                    y : window.pageYOffset
                }
            }else{
               return {
                    x : document.body.scrollLeft+document.documentElement.scrollLeft,
                    y : document.body.scrollTop+document.documentElement.scrollTop
                } 
            }
        },
        // 视图宽度长度
        getViewPortOffset:function(){
            if(window.innerWidth){
                return {
                    w : window.innerWidth,
                    h : window.innerHeight,
                }
            }else{
                if(document.compatMode==="BackCompat"){
                    return {//非严格模式ie
                        w : document.body.clientWidth,
                        h : document.body.clientHeight
                    } 
                }else{// 严格模式ie
                    return {
                        w : document.documentElement.clientWidth,
                        h : document.documentElement.clientHeight
                    } 
                }
            }
        },
        // 内部调用方法 浅拷贝
        simpleClone:function(origin,target){    
            target=target || {};
            for(var prop in origin){
                 if(origin.hasOwnProperty(prop)){
                    target[prop]=origin[prop]
                 }
            }
            return target;
        },
        // 内部调用方法 深拷贝
        deepClone:function(origin,target){
            var target=target || {};
            var toStr=Object.prototype.toString,
            arrStr="[object Array]";
            for(var prop in origin){
                if(origin.hasOwnProperty(prop)){
                    if(typeof(origin[prop])!==null && typeof(origin[prop])==="object"){
                        if(toStr.call(origin[prop])===arrStr){
                            target[prop]=[];
                        }else{
                            target[prop]={};
                        }
                        this.deepClone(origin[prop],target[prop])
                    }else{
                        target[prop]=origin[prop];
                    }
                }
            }
            return target;
        },
        // 外部调用方法 深浅拷贝 用法模拟jquery
        extend:function(){
            if(typeof arguments[0]=="boolean"){

                if(arguments[0]===true){
                    for(var i=0,length=arguments.length-2;i<length;i++){
                        this.deepClone(arguments[i+2],arguments[1])
                    }
                }else{
                   for(var i=0,length=arguments.length-2;i<length;i++){
                        this.simpleClone(arguments[i+2],arguments[1])
                    } 
                }
                return arguments[1]
            }else{
                for(var i=0,length=arguments.length-1;i<length;i++){
                    this.simpleClone(arguments[i+1],arguments[0])
                }
                return arguments[0]
            }
        },
        addEvent:function(el,type,handle){
            if(el.addEventListener){
                el.addEventListener(type,handle,false);
            }else if(el.attachEvent){
                el.attachEvent('on'+type,function(){
                    handle.call(el);
                })
            }else{
                el['on'+type]=handle;
            }
        }









    }
    ToolFrame.fn.init.prototype = ToolFrame.fn;
})(window)
    