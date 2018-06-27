/* 
* @Author: kong
* @Date:   2018-04-10 14:06:34
* @Last Modified by:   anchen
* @Last Modified time: 2018-06-21 23:42:06
*/


(function(window){
    
    var document = window.document,
    navigator = window.navigator,
    location = window.location;
    function GlobalTools(){
        return new GlobalTools.prototype.init();
    }
    GlobalTools.fn=GlobalTools.prototype={
        constructor: GlobalTools,
        init:function(){
        },
        // 互换对象对应属性值
        exchangeValue:function(origin,target){
            var newObj=$.extend(true,{},origin)
            for(var prop in target){
                if(target.hasOwnProperty(prop)){
                    var firstVal=newObj[prop];
                    newObj[prop]=newObj[target[prop]];
                    newObj[target[prop]]=firstVal;
                }
            }
            return newObj;
        },
        // 数组集合转成层级关系 parentId参数由用户带入，如果没有默认用 'parentId'
        array2tree:function(origin,parentId){
            var parentId=parentId || 'parentId'
            var copyOriginArr=$.extend(true, [],origin);
            var top = [], sub = [], arrObj = {};  
            copyOriginArr.forEach(function (item) {  
                if (item[parentId] === 0 || item[parentId] === null) {  
                    top.push(item);  
                } else {  
                    sub.push(item);  
                }  
                item.children = [];  
                arrObj[item.id] = item;  
            });  
          
            sub.forEach(function (item) {  
                var parent = arrObj[item[parentId]] || {'children': []};  
                parent.children.push(item);  
            });  
          
            return top;

        },
        // arr2tree2:function(data,num,id){
        //     var self=this;
        //     var newArr=[];
        //     var id=id || '';
        //     num--;
        //     if(num==2){
        //         var arr=self.arrayGroup(data,'reserved1');
        //         $.each(arr,function(index,item){
        //             var obj={};
        //             obj.text=item[0].reserved2;
        //             obj.id=id+item[0].reserved1;
        //             obj.children=self.arr2tree2(item,2);
        //             newArr.push(obj);
        //         })
        //     }else if(num==1){
        //         var arr=self.arrayGroup(data,'busi_code');
        //         $.each(arr,function(index,item){
        //             var obj={};
        //             obj.text=item[0].busi_name;
        //             obj.id=id+item[0].busi_code;
        //             obj.children=self.arr2tree2(item,1);
        //             newArr.push(obj);
        //         })
        //     }else if(num==0){
        //         $.each(data,function(index,item){
        //             var obj=$.extend({},item);
        //             obj.text=item.tr_name;
        //             obj.id=id+item.tr_code;
        //             if(item.checked==='1'){
        //                obj.checked=true;
        //             }else{
        //                obj.checked=false;
        //             }
                      
        //             newArr.push(obj);
        //         })
        //     }
        //     return newArr;
        // },
        // 数组分组
        arrayGroup:function(data,key){
            var id=key || 'id';
            var obj={};
            var data=$.extend(true,[],data);
            var newArr=[];
            $.each(data,function(index,item){
                var prop=item[id];
                if(!obj[prop]){
                    obj[prop]=[];
                    newArr.push(obj[prop])
                };
                obj[prop].push(item);
            });
            return newArr;
        }









    }
    GlobalTools.fn.init.prototype = GlobalTools.fn;
    window.GlobalTools=GlobalTools;
})(window)
    