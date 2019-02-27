/*JavaScript原生封装的运动*/

/*
弹性公式
弹性:
	速度 += (目标点 - 当前值)/系数;  //6 , 7 , 8
	速度 *= 摩擦系数;   // 0.7 0.75
缓冲:
	var 速度 = (目标点 - 当前值)/系数;
	速度取整*/

var move = (function() {
	var moveObj = {
		css: function(obj, attr) {
			if (obj.currentStyle) {
				return obj.currentStyle[attr];
			} else {
				return getComputedStyle(obj, false)[attr];
			}
		},

		/*运动框架加入缓冲
		调用方式：
		startMove(this, {
			width : 200
		}, function() {
			startMove(this, {
				height : 200
			});
		});
		
		startMove(this, {
			width : 200,
			height : 200
		});
		*/
		startMove: function(obj, json, fn) {
			clearInterval(obj.iTimer);
			var iCur = 0;
			var iSpeed = 0;
			obj.iTimer = setInterval(function() {
				var iBtn = true;

				for (var in json) {
					var iTarget = json[attr];

					if (attr == 'opacity') {
						iCur = Math.round(css(obj, 'opacity') * 100);
					} else {
						iCur = parseInt(css(obj, attr));
					}

					iSpeed = (iTarget - iCur) / 8;
					iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);

					if (iCur != iTarget) {
						iBtn = false;
						if (attr == 'opacity') {
							obj.style.opacity = (iCur + iSpeed) / 100;
							obj.style.filter = 'alpha(opacity=' + (iCur + iSpeed) + ')';
						} else {
							obj.style[attr] = iCur + iSpeed + 'px';
						}
					}
				}

				if (iBtn) {
					clearInterval(obj.iTimer);
					fn && fn.call(obj);
				}
			}, 30);
		},

	}
});