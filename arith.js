/**
 * 模块名称：arith
 * 模块描述：数值计算
 * 作者：shaozc
 * 时间：2018-08-28
 */
const arith = new Object
arith.data = new Array
arith._int = function(){
    let i,flag=true,arr=[],c=0
    for(i=0;i<this.data.length;i++){
        let num = this.data[i].toString().replace(/\ +/g,'');
        num = num.replace(/,/g,'');
        if(isNaN(Number(num))){
            flag = false;
            return false;
        }
        arr.push(Number(num));
        let d;
        try{
            d = this.data[i].toString().split('.')[1].length;
        }catch(e){
            d = 0;
        }
        c = Math.max(c,d);
    }
    if(flag){
        arr.max = c;
        return arr;
    }else{
        return false;
    }
}
// 加法
arith.sum = function(arithArr){
    if(Array.isArray(arithArr)){
        this.data = arithArr;
    }else{
        throw{
            name:'arith error',
            msg:''
        }
    }    
    if(this._int()){
        let data = this._int();
        var i,result=0;
        for(i=0;i<data.length;i++){
            var d;
            try{
                d = data[i].toString().split('.')[1].length;
            }catch(e){
                d = 0;
            }
            result += Number(data[i].toString().replace('.',''))*Math.pow(10,data.max - d);
        }
        return result/Math.pow(10,data.max);
    }else{
        throw{
            name:'Error',
            msg:'The arguments of function arith.sum is not Number'
        }
    }
}
// 减法
arith.exc = function(arithArr){
    if(Array.isArray(arithArr)){
        this.data = arithArr;
    }else{
        throw{
            name:'arith error',
            msg:''
        }
    } 
    if(this._int()){
        let data = this._int();
        let i,result = 'begain';
        for(i=0;i<data.length;i++){
            let d;
            try{
                d = data[i].toString().split('.')[1].length;
            }catch(e){
                d = 0;
            }
            if(result == 'begain'){
                result = Number(data[i].toString().replace('.',''))*Math.pow(10,data.max - d);
            }else{
                result += -Number(data[i].toString().replace('.',''))*Math.pow(10,data.max - d);
            }
        }
        return result/Math.pow(10,data.max);
    }else{
        throw{
            name:'Error',
            msg:'The arguments of function arith.exc is not Number'
        }
    }
}

// 乘法
arith.mul = function(arithArr){
    if(Array.isArray(arithArr)){
        this.data = arithArr;
    }else{
        throw{
            name:'arith error',
            msg:''
        }
    } 
    if(this._int()){
        let data = this._int();
        let i,result='begain',s=0;
        for(i=0;i<data.length;i++){
            let d;
            try{
                d = data[i].toString().split('.')[1].length;
            }catch(e){
                d = 0;
            }
            s += d;
            if(result == 'begain'){
                result = Number(data[i].toString().replace('.',''));
            }else{
                result = result*Number(data[i].toString().replace('.',''));
            }
        }
        return result/Math.pow(10,s);
    }else{
        throw{
            name:'Error',
            msg:'The arguments of function arith.mul is not Number'
        }
    }
}

arith.div = function(arithArr){
    if(Array.isArray(arithArr)){
        this.data = arithArr;
    }else{
        throw{
            name:'arith error',
            msg:''
        }
    } 
    if(this._int()){
        let data = this._int();
        let i,result='begain',s=0,m=0;
        for(i=0;i<data.length;i++){
            let d;
            try{
                d = data[i].toString().split('.')[1].length;
            }catch(e){
                d = 0;
            }                
            if(result == 'begain'){
                s = d;
                result = Number(data[i].toString().replace('.',''));
            }else{
                m += d;
                result = result/Number(data[i].toString().replace('.',''));
            }
        }
        return result*Math.pow(10,m-s);
    }else{
        throw{
            name:'Error',
            msg:'The arguments of function arith.div is not Number'
        }
    }
}
export default arith
