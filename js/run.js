function getStyle(obj,attr) { 

	//IE
	if(obj.currentStyle){ 
		return obj.currentStyle[attr];
	}else{ //非IE
		return getComputedStyle(obj,false)[attr];
	}

}

var timer = null;

function run(obj,json,func) { 

	clearInterval(obj.timer);

	obj.timer = setInterval(function() {

		var flag = true;
		for(var attr in json){

			var current = 0;
			if(attr == 'opacity'){
				current = parseFloat(getStyle(obj,attr))*100;
			}else{
				current = parseInt(getStyle(obj,attr));
			}

			var speed = (json[attr] - current)/8;
			speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);

			if(current != json[attr]){
				flag = false;
			}

			if(attr == 'opacity'){
					obj.style.fliter = 'alpha(opacity=' + (current + speed)+')';
					obj.style.opacity = (current + speed)/100;
			}else{
					obj.style[attr] = current + speed + 'px';
			}

		}

		if(flag){
			clearInterval(obj.timer);
			if(func !== undefined){
				func();
			}
		}


	},30);

}


