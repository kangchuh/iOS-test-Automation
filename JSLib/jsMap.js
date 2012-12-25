/*
 * @created by dylan
 * 
 */
	function Map() {
	    this.elements = new Array(); 
	    //获取MAP元素个数
	    this.size = function() {
	        return this.elements.length;
	    };
	 
	    //判断MAP是否为空
	    this.isEmpty = function() {
	        return (this.elements.length < 1);
	    };
	 
	    //删除MAP所有元素
	    this.remaveAll = function() {
	        this.elements = new Array();
	    };
	 
	    //向MAP中增加元素（key, value)
	    this.put = function(_key, _value) {
	        this.elements.push( {
	            key : _key,
	            value : _value
	        });
	    };
	 
	    //删除指定KEY的元素，成功返回True，失败返回False
	    this.remove = function(_key) {
	        var flag = false;
	        try {
            for (var i = 0; i < this.elements.length; i++) {
	                if (this.elements[i].key == _key) {
	                    this.elements.splice(i, 1);
	                    flag = true;
	                    return flag;
	                }
	            }
	        } catch (e) {
	            flag = false;
	        }
	        return flag;
	    };
	 
	    //获取指定KEY的元素值VALUE，失败返回NULL
	    this.getValueFromKey = function(_key) {
	        try {
	            for (var i = 0; i < this.elements.length; i++) {
	                if (this.elements[i].key == _key) {
	                    return this.elements[i].value;
	                }
	            }
	        } catch (e) {
	            return null;
        }
	    };
	    //验证VALUE是否为object类型。
	    this.assertValueType = function(_key){
	    	var valueType = this.getValueFromKey(_key);
	    	var flag = false;
	    	if((valueType !== null)&&((typeof valueType)==="object")){
	    		flag = true;
	    		return flag;
	    	}
	    	return flag;
	    };
	    //获取指定索引的元素（使用element.key，element.value获取KEY和VALUE），失败返回NULL
	    this.element = function(_index) {
	        if (_index < 0 || _index >= this.elements.length) {
	            return null;
	        }
	        return this.elements[_index];
	    };
	    //判断MAP中是否含有指定KEY的元素
	    this.containsKey = function(_key) {
	        var flag = false;
	        try {
	            for (var i = 0; i < this.elements.length; i++) {
	                if (this.elements[i].key == _key) {
	                    flag = true;
	                }
	            }
	        } catch (e) {
	            flag = false;
	        }
	        return flag;
	    };
	 
	    //判断MAP中是否含有指定VALUE的元素
	    this.containsValue = function(_value) {
	        var flag = false;
	        try {
	            for (var i = 0; i < this.elements.length; i++) {
	                if (this.elements[i].value == _value) {
	                    flag = true;
	                }
            }
	        } catch (e) {
	            flag = false;
	        }
	        return flag;
	    };
	 
	    //获取MAP中所有VALUE的数组（ARRAY）
	    this.values = function() {
	        var arr = new Array();
	        for (var i = 0; i < this.elements.length; i++) {
	            arr.push(this.elements[i].value);
        }
	        return arr;
	    };
	 
	    //获取MAP中所有KEY的数组（ARRAY）
	    this.keys = function() {
        var arr = new Array();
	        for (var i = 0; i < this.elements.length; i++) {
	            arr.push(this.elements[i].key);
	        }
	        return arr;
	    };
	};
	
Object.prototype.getName=function(){
        for(var a in window){
            if(window[a]==this){
            return a.toString();
            };
        }
};