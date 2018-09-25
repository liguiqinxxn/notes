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

24. 字符串获取
	charAt()        //获取字符串中字符
	charCodeAt()    //根据字符返回Unicode编码
	fromCharCode()  //根据数字返回字符

	alert( 'miaov'.charAt(2) );  //a
	alert( 'miaov'.charCodeAt(2) ); //97
	alert( String.fromCharCode(22937, 21619) ); //妙味

25. 查找字符串的位置
	indexOf()   //查找字符串的位置
	lastIndexOf()  //从右往左查找字符串的位置

	var str = '妙味课堂是一支独具特色的IT培训团队，妙味反对传统IT教育枯燥乏味的教学模式，妙味提供一种全新的快乐学习方法！';

	str.indexOf('妙味', 2);		// 从左往右找
	alert( str.lastIndexOf('妙味', 38) );  //从右往左找
	// 如果第2个值为负数，默认当成0来处理

26. 截取字符串
	substring()    //截取字符串
	slice()     //截取字符串

	var str = '妙味课堂是一支独具特色的IT培训团队';

	alert( str.substring(0,2) );
	alert( str.substring(2,0) );     // 可以检测两个数，大的往后扔，小的往前扔
	alert( str.substring(-3, 2) );   // -3 当成0处理
	alert( str.substring(2, -3) );	

	alert( str.slice( 2, 0 ) );		// 不交换位置
	alert( str.slice( -4, -2 ) );	// 负数从后面倒着往前数~

27. 大小写转换
	toUpperCase()  // 转成大写
	toLowerCase()  // 转成小写

	var str = 'www.MIAOV.com';
	alert( str.toUpperCase() );			// 转成大写
	alert( str.toLowerCase() );			// 转成小写

28. 分割字符串成数组
	split()   //分割字符串

	var str = 'www.miaov.com';
	alert( str.split('.') );	// [ 'www', 'miaov', 'com' ]

	var arr = str.split( '.' );  //根据.分割
	alert( arr[1] );

	var str1 = 'leo';
	alert( typeof str1.split() );	// [ 'leo' ]
	alert( str1.split('') );     // [ 'l', 'e', 'o' ]

	var str3 = '/www.miaov.com/';
	alert( str3.split('/').length );  // [ , www.miaov.com,  ]

	var str4 = '2013-11-29-23-07';
	alert( str4.split('-', 3) );  //[2013,11,29]

29. 将数组转化为字符串

	var arr = [ 'aa', 'bb', 'cc' ];

	alert( typeof arr.join() ); 	//'aa'+','+'bb'+','+'cc'
	alert( arr.join().length );
	alert( arr.join('') );        //'aa'+''+'bb'+''+'cc'
	alert( arr.join('-') );       //'aa'+'-'+'bb'+'-'+'cc'
 
30. 数组的添加方法
	push()   //往数组后面添加数据
	unshift()  //往数组开头添加数据

	var arr = [ 1,2,3 ];

	alert( arr.push( 'abc' ) ); //返回数组的长度
	alert( arr );
	alert( arr.unshift( 0 ) ); // IE 6  7 不支持 unshift 返回值  //返回数组的长度
	alert( arr );

31. 数组的删除方法
	pop()    //删除数组最后一个数据
	shift()  //删除数组第一个数据

	var arr = [ 'TM', '钟毅', '张森', '杜鹏', 'Leo' ];
	alert( arr.pop() ); //返回数组删除的数据
	alert( arr );
	alert( arr.shift() ); //返回数组删除的数据
	arr.shift();
	alert( arr );

	var arr = [ 'TM', '钟毅', '张森', '杜鹏', 'Leo' ];
	arr.unshift(arr.pop()); //将最后一个数据添加到第一个
	arr.push(arr.shift())  //将第一个数据添加到最后
	alert( arr );

32. splice方法
	var arr = [ 'TM', '钟毅', '张森', '杜鹏', 'Leo' ];
	// 删除、替换、添加
	arr.splice( 0 , 2);  //删除
	alert( arr.splice( 0 , 0, 'aaaaaa' ) ); //添加
	arr.splice( 0, 2, '莫涛 or 钟毅' );   //替换
	alert( arr.splice( 1, 0, '钟毅媳妇儿~', '钟毅媳妇们~' ) ); //添加
	alert( arr );

	注意：返回值只返回删除的数据

33. 数组去重
	var arr = [ 1,2,2,4,2 ];

	for ( var i=0; i<arr.length; i++ ) {
		for ( var j=i+1; j<arr.length; j++ ) {
			if ( arr[i] == arr[j] ) {
				arr.splice( j, 1 );
				j--;
			}
		}
	}
	alert( arr );

34. sort排序
	var arr = [ 'c', 'd', 'a', 'e' ];
	arr.sort();
	alert( arr );

	var arr2 = [ 4,3,5,5,76,2,0,8 ];
	arr2.sort();  //按照字符串的规则来排序
	alert( arr2 );

	arr2.sort(function ( a, b ) {
		return a - b;
	});
	alert( arr2 );

	var arrWidth = [ '345px', '23px', '10px', '1000px' ];
	arrWidth.sort(function ( a, b ) {
		return parseInt(a) - parseInt(b);
	});
	alert( arrWidth );

	排序方法：快速、希尔、谢尔、冒泡、归并、选择、插入

35. 随机排序
	var arr = [ 1,2,3,4,5,6,7,8 ];
	arr.sort(function ( a, b ) {
		return Math.random() - 0.5;
	});
	alert( arr );

36. 随机函数
	alert( Math.round(3.4) );  //四舍五入
	alert( Math.ceil(3.4) );  //向上取整
	0~1 : Math.round(Math.random());
	//0~10
	alert( Math.round(Math.random()*10) );
	//5~10
	alert( Math.round( Math.random()*5 + 5 ) );
	//10~20
	alert( Math.round( Math.random()*10 + 10 ) );
	//20~100
	alert( Math.round( Math.random()*80 + 20 ) );

	x ~ y
	var x = 3;
	var y = 49;
	alert( Math.round( Math.random()*(y-x) + x ) );
	//0~x
	alert( Math.round( Math.random()*x) );
	//1~x
	alert( Math.ceil( Math.random()*x) );

37. 数组的方法
	concat() //连接数组
	reverse() //数组取反

	var arr1 = [ 1,2,3 ];
	var arr2 = [ 4,5,6 ];
	var arr3 = [ 7,8,9 ];
	alert( arr1.concat( arr2, arr3 ) ); //连接数组

	var arr1 = [ 1,2,3,4,5,6 ];
	arr1.reverse();
	alert( arr1 );

	var str = 'abcdef';
	alert(str.split('').reverse().join('')); //字符串取反

38. classList的add和remove

	this.classList.add('box2');
	this.classList.remove('box2');

39. ()=>   //箭头函数

40. Math函数
	Math.min()  //返回一组数据中最小的一个
	Math.max()  //返回一组数据中最大的一个

41. &&
	// &&前面为真，就返回&&后面的
	num == 10 &&this.classList.add('up-disabled');

42. 获取元素的方法
	querySelector() 单个
	querySelectorAll() 一组
	(选择器写法)
	.class #id
	ie8以下不要用
	不是实时的

43. var 、let 、const
	var 支持作用域
        - 全局
        - 函数
    let 支持作用域
        - 全局
        - 函数
        - 块

44. every 、some
	every     --用于循环数组中的每一项，在指定的函数中做判断，如果全部符合返回true，有一项不符合就返回false
	some      --只要有其中一项符合，就返回true

45. 阻止冒泡
	document.onmousedown = function (ev){
	// 阻止冒泡
	ev.stopPropagation();
	}

46. 取消默认行为
	document.onmousemove = function(ev){
		//取消默认行为
		ev.preventDefault();
	}

47. 刷新页面
	window.location.reload();