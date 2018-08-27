// JavaScript Document

function $( v ){ 
	if( typeof v === 'function' ){
		window.onload = v;
	} else if ( typeof v === 'string' ) {
		return document.getElementById(v);
	} else if ( typeof v === 'object' ) {
		return v;
	}
}

function getStyle( obj, attr ){  //获取对象的属性
	return (obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle( obj )[attr]);
}

//让对象动起来
function doMove ( obj, attr, dir, target, endFn ) { 
	
	dir = parseInt(getStyle( obj, attr )) < target ? dir : -dir;
	
	clearInterval( obj.doMove );
	
	obj.doMove = setInterval(function () {
		
		var speed = parseInt(getStyle( obj, attr )) + dir;			// 步长
		
		if ( speed > target && dir > 0 ||  speed < target && dir < 0  ) {
			speed = target;
		}
		
		obj.style[attr] = speed + 'px';
		
		if ( speed == target ) {
			clearInterval( obj.doMove );
			
			/*
			if ( endFn ) {
				endFn();
			}
			*/
			endFn && endFn();
			
		}
		
	}, 100);
}

function shake ( obj, attr,dir,endFn ) { //对象抖动
	if(!obj.onoff){
		var pos = parseInt( getStyle(obj, attr) );
		var arr = [];// 20, -20, 18, -18 ..... 0
		var timer = null;
		var num = 0;
		if (!dir) {
			var dir = 20;
		}
		for ( var i=dir; i>0; i-=2 ) {
			arr.push( i, -i );
		}
		arr.push(0);
			
		clearInterval( obj.shake );
		obj.shake = setInterval(function (){
			obj.style[attr] = pos + arr[num] + 'px';
			num++;
			if ( num === arr.length ) {
				clearInterval( obj.shake );
				endFn && endFn();
				obj.onoff = false;
			}
		}, 50);
		obj.onoff = true;
	}
}

function opacity(obj, dir, target, endFn){ //对象透明度变化
		dir = (getStyle( obj, 'opacity' )*100) < target ? dir : -dir;

		clearInterval( obj.opacity );
		obj.opacity = setInterval(function () {
			
			var speed = (getStyle( obj, 'opacity' )*100) + dir;			// 步长
			
			if ( speed > target && dir > 0 ||  speed < target && dir < 0  ) {
				speed = target;
			}
			
			obj.style.opacity = parseFloat(speed/100);
			
			if ( speed == target ) {
				clearInterval( obj.opacity );
				
				endFn && endFn();
				
			}
			
		}, 100);
	}

function backgroundColorRGBA(obj, dir, target, endFn){ //对象背景颜色的变化
		var str = getStyle(obj,'backgroundColor') + '';
		var patt1 = /([1-9]\d*\.\d*)|(0\.\d*)|([0-9]\d*)/g;
		arr = str.match(patt1);
		var r =parseInt(arr[0]);
		var g =parseInt(arr[1]);
		var b =parseInt(arr[2]);
		if (arr[3]) {
			var a =parseInt(arr[3]*100);
		}else{
			var a = 100;
		}
		dir = a < target ? dir : -dir;

		clearInterval( obj.bgrgba );
		obj.bgrgba = setInterval(function () {
			str = getStyle(obj,'backgroundColor') + '';
			patt1 = /([1-9]\d*\.\d*)|(0\.\d*)|([0-9]\d*)/g;
			arr = str.match(patt1);
			if (arr[3]) {
				var a =parseInt(arr[3]*100);
			}else{
				var a = 100;
			}
			
			var speed = a + dir;			// 步长
			if ( speed > target && dir > 0 ||  speed < target && dir < 0  ) {
				speed = target;
			}

			obj.style.backgroundColor = 'rgba('+r+','+g+','+b+','+speed/100+')';
			
			if ( speed == target ) {
				clearInterval( obj.bgrgba );
				
				endFn && endFn();
				
			}
			
		}, 100);
	}

function detectNum ( str ) { //检测是否全是数字
	var n = 0;
	for ( var i=0; i<str.length; i++ ) {
		n = str.charCodeAt(i);
		if ( n<48 || n>57 )return false;
	}
	return true;
}

function indexOfArray(arr, str){  //数组的indexOf()方法
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] === str) return i;
		if (i === arr.length-1) return -1;
	}
}


// 碰撞检测，碰到就返回true，没有就返回false
function getRect(obj){
	return obj.getBoundingClientRect();
}
function collision(obj1,obj2){
	var obj1Rect = 	getRect(obj1);
	var obj2Rect = 	getRect(obj2);

	//如果obj1碰上了哦obj2返回true，否则放回false
	var obj1Left = obj1Rect.left;
	var obj1Right = obj1Rect.right;
	var obj1Top = obj1Rect.top;
	var obj1Bottom = obj1Rect.bottom;

	var obj2Left = obj2Rect.left;
	var obj2Right = obj2Rect.right;
	var obj2Top = obj2Rect.top;
	var obj2Bottom = obj2Rect.bottom;

	if( obj1Right < obj2Left || obj1Left > obj2Right || obj1Bottom < obj2Top || obj1Top > obj2Bottom ){
		return false;
	}else{
		return true;
	}
}

// 绑定事件
function bind(obj, evname, fn) {
	if (obj.addEventListener) {  //标准浏览器
		obj.addEventListener(evname, fn, false);
	} else {   //ie下
		obj.attachEvent('on' + evname, function() {
			fn.call(obj);  ////兼容ie下this指向window
		});
	}
}

// 拖拽
function drag(obj) {
	
	obj.onmousedown = function(ev) {
		var ev = ev || event;
		
		var disX = ev.clientX - this.offsetLeft;
		var disY = ev.clientY - this.offsetTop;
		
		if ( obj.setCapture ) {
			obj.setCapture();
		}
		
		document.onmousemove = function(ev) {
			var ev = ev || event;
			
			obj.style.left = ev.clientX - disX + 'px';
			obj.style.top = ev.clientY - disY + 'px';
		}
		
		document.onmouseup = function() {
			document.onmousemove = document.onmouseup = null;
			//释放全局捕获 releaseCapture();
			if ( obj.releaseCapture ) {
				obj.releaseCapture();
			}
		}
		
		return false;
		
	}
	
}

// 设置cookie
function setCookie(key, value, t) {
	var oDate = new Date();
	oDate.setDate( oDate.getDate() + t );
	document.cookie = key + '=' + value + ';expires=' + oDate.toGMTString();
}
// 获取cookie
function getCookie(key) {
	var arr1 = document.cookie.split('; ');
	for (var i=0; i<arr1.length; i++) {
		var arr2 = arr1[i].split('=');
		if ( arr2[0] == key ) {
			return decodeURI(arr2[1]);
		}
	}
}
// 删除cookie
function removeCookie(key) {
	setCookie(key, '', -1);
}

