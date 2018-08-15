1. 希望把某个元素移除你的视线
	display:none;    // 显示为无
	Visibility：hidden； //隐藏
	width \ height
	透明度
	left \ top
	拿一个白色div盖住它
	margin负值

2. JS中如何获取元素
	通过ID名称来获取元素
		document.getElementById('link');

3. 事件：鼠标事件、键盘事件、系统事件、表单事件、自定义事件.....
	onclick
	onmouseover
	onmouseout
	onmousedown
	onmouseup
	onmousemove

	onload  //加载完以后执行......
		window.onload = 事件;
		img.onload
		body.onload 


4. 如何添加事件：
	元素.onmousemove

5. 函数：可以理解为命令
	1.
	function function_name(argument) { 
		// body...
	}

	函数调用方法：
		直接调用：function_name();
		事件调用：元素.事件 = 函数名 oDiv.onclick = function_name；

	例如：鼠标移入显示，鼠标移出隐藏
	window.onload = abc;
	function abc(){
		var li =document.getElementById('link');
		var ul =document.getElementById('ul1');
		var a =document.getElementById('a');

		li.onmouseover =show;
		li.onmouseout =hide;
			function show() {
				ul.style.display = 'block';
				a.style.background = 'yellow';
			}
			function hide() {
				ul.style.display = 'none';
				a.style.background = '#f1f1f1';
			}
		}


	2.匿名函数的方式
	window.onload = function (){
		var li =document.getElementById('lis');
		var ul =document.getElementById('ul1');
		var a =document.getElementById('a');

		li.onmouseover = function () {
				ul.style.display = 'block';
				a.style.background = 'yellow';
			};
		li.onmouseout = function () {
				ul.style.display = 'none';
				a.style.background = '#f1f1f1';
			};	
		} ;

6. 获取元素的第二种方法
#list {}	var oUl = document.getElementById('list');	//静态方法

li {}			document.getElementsByTagName('li'); //动态方法
#list li {} var aLi = oUl.getElementsByTagName('li');
				// aLi => [ li, li, li ]	 元素的集合
				aLi.length								3
				aLi[0]  // 在用 TagNasme 的时候，必须要加上：[]

7. for 循环
	 for (var i = 0; i < Things.length; i++) {
	 		Things[i]
	 	}	

8. this
	fn1();			this => window
	oDiv.onclick = fn1;			this => oDiv
	
	oDiv.onclick = function (){
		fn1();					fn1() 里的this => window
	};

	//<div onclick="    this     fn1();      "></div>     fn1(); 里的 this 指的是 window
	
	alert( this );   	=>  object window

	window 是 JS “老大”
	window.alert( this );

9. 初始化
	window.onload = function () {
			
		}

10. 按钮只按一次的问题
思路：
		1、按钮找麻烦 （用户体验不太好）
		2、先清空，再生成
		3、判断
		例：
		oBtn.disabled = true;
		oBtn.style.display = 'none';
		
		oUl.innerHTML = '';
		
		onOff = false;				no!!!!

11. 选中就添加active
思路一：全部清空，当前添加
			for( var i=0; i<aLi.length; i++ ){
				aLi[i].className = '';
			}
			this.className = 'active';
			
	
思路二：清空上个，当前添加
oldLi.className = '';
oldLi = this;
this.className = 'active';

12. JS数据类型
ECMAScript：标准、核心
HTML 标签类型：block、inline、inline-block、table……
JS中的数据类型：数字（NaN）、字符串、布尔、函数、对象(obj、[]、{}、null)、未定义

typeof 判断数据类型

13. JS数据类型转换
显式类型转换（强制类型转换）：
Number()
parseInt()
parseFloat()

隐式类型转换：
/* 
	+								200 + '3'		变成字符串
	- * / %				           '200' - 3     变成数字
	++ --						变成数字
	> < 						数字的比较 、字符串的比较
	!	取反					把右边的数据类型转成布尔值
	==
*/

14. NaN 
NaN：not a number 不是个 数字 的 数字类型
NaN 与自己都不相等！！
一旦写程序中出现：NaN  肯定进行了非法的运算操作
	//alert( '200px' -  100 );
NaN 是 false
	if( a ){
		 alert( '真' );
	}else{
		 alert( '假' );
	}

15. isNaN()
NaN：not a number 不是个 数字 的 数字类型
isNaN()：Is not a number 是不是不是一个数字（不是数字）

isNaN();					// true			false
// 判断某些值是不是数字
// 不喜欢数字、讨厌数字

16. 重用代码：
	1、尽量保证 HTML 代码结构一致，可以通过父级选取子元素
	2、把核心主程序实现，用函数包起来
	3、把每组里不同的值找出来，通过传参实现

17. 作用域：

	域：空间、范围、区域……
	作用：读、写

	script		全局变量、全局函数
		自上而下
	
	函数
		由里到外
	
	{}

	浏览器：
		“JS解析器”
			1）“找一些东西”	：var  function 参数
			
							a = ...
									所有的变量，在正式运行代码之前，都提前赋了一个值：未定义
							fn1 = function fn1(){ alert(2); }
									所有的函数，在正式运行代码之前，都是整个函数块

							JS 的预解析

						遇到重名的：只留一个
							变量和函数重名了，就只留下函数
									
			2）逐行解读代码：
						表达式：= + - * / % ++ -- ! 参数……
						
						表达式可以修改预解析的值！

18. return：返回值
		1) 函数名+括号：fn1()	==>  return 后面的值；
		2) 所有函数默认返回值：未定义；
		3) return 后面任何代码都不执行了；

19. arguments
当函数的参数个数无法确定的时候：用 arguments
alert( sum( 1,2,3 ) );				// 6
alert( sum( 1,2,3,4 ) );			// 10

20. 获取元素样式
	alert( getComputedStyle( $('div1') ).width );// IE6 7 8 不兼容
	alert( $('div1').currentStyle.width );		// 标准浏览器不兼容

	if( $('div1').currentStyle ){
				alert( $('div1').currentStyle.width );
			} else {
				alert( getComputedStyle( $('div1'), 250 ).width );
				// FF 4.0 之前
			}
	函数封装
	function getStyle( obj, attr ){
		return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle( obj )[attr];
	}

	/*获取到的是计算机（浏览器）计算后的样式
				
				background: url() red ……		复合样式（不要获取）
				backgroundColor									单一样式（不要用来做判断）
				
				不要有空格
				
				不要获取未设置后的样式：不兼容
	*/

21. 定时器：时间概念
		var timer = setInterval( 函数, 毫秒 );					重复执行（发动机）
		clearInterval( timer );		//清除
		
		var timer = setTimeout( 函数, 毫秒 );//执行一次（炸弹）
		clearTimeout( timer );

		for(var i=0; i<3; i++){ document.title = i; }			
		// 瞬间完成，没有时间根据

22. 系统时间对象
	new Date()
	getFullYear()
	getMonth()
	getDate()
	getDay()
	getHours()
	getMinutes()
	getSeconds()

23. 倒计时原理
	var iNow = new Date();
	// var iNew = new Date( 2013, 10, 27,  21,56,0  );
	var iNew = new Date( 'November 27,2013 22:3:0' );
	var t = Math.floor((iNew - iNow)/1000);
	// 毫秒 - 秒
	var time = Math.floor(t/86400)+'天'+Math.floor(t%86400/3600)+'时'+Math.floor(t%86400%3600/60)+'分'+t%60+'秒';
	alert( time );

	天：Math.floor(t/86400)
	时：Math.floor(t%86400/3600)
	分：Math.floor(t%86400%3600/60)
	秒：t%60

	数字形式：new Date( 2013,4,1,9,48,12 );
	字符串形式：new Date('June 10,2013 12:12:12');

	January、February、March、April、May、June、
	July、August、September、October、November、December

24. 