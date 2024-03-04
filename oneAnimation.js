var speed=0
export function oneAnimation(obj,json,fu){
	clearInterval(obj.timer)
	 obj.timer=setInterval(function(){
		 var cur = 0;
		 var flag=true;
		for(var attr in json){
			switch (attr){
				case 'opacity':
					cur=Math.round(parseFloat(getStyle(obj,attr)*100))
					break;
				case 'scrollTop':
					cur=obj[attr]
					break;
				default:
					cur=parseInt(getStyle(obj,attr))
					break;
			}
			speed=(json[attr]-cur)/10
			speed=json[attr]>cur?Math.ceil(speed):Math.floor(speed)
			if(json[attr]!==cur){
				flag=false
			}
			switch (attr){
				case 'opacity':
					obj.style[attr]=`alpha(opacity: ${cur + speed})`
					obj.style[attr]=(cur+speed)/100
					break;
				case 'scrollTop':
					obj.style[attr]=cur+speed
					break;
				default:
					obj.style[attr]=cur+speed+'px'
					break;
			}
			if(flag){
				clearInterval(obj.timer)
				if(fu){
					fu();
				}
				return;
			}
		}
	},30)
}
function getStyle(obj,attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr]
	}else{
		return getComputedStyle(obj,null)[attr]
	}
}
