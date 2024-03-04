import { oneAnimation } from './oneAnimation.js';
export var animation=(function(animation){
	animation.Animation=function(obj,json,fu){
		this.obj=obj||{}
		this.json=json||{}
		this.fu=fu||null
	}
	animation.Animation.prototype.oneAnimation=oneAnimation
	return animation;
})(window.animation || {})