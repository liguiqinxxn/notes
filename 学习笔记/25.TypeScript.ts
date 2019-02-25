1.tsc 常用编译参数如下表所示：
  
    --help             显示帮助信息

    --module           载入扩展模块

    --target           设置 ECMA 版本

    --declaration      额外生成一个 .d.ts 扩展名的文件。

    tsc ts-hw.ts --declaration    以上命令会生成 ts-hw.d.ts、ts-hw.js 两个文件。

    --removeComments   删除文件的注释

    --out              编译多个文件并合并到一个输出的文件  

    --sourcemap        生成一个 sourcemap (.map) 文件。sourcemap 是一个存储源代码与编译代码对应位置映射的信息文件。

    --module noImplicitAny        在表达式和声明上有隐含的 any 类型时报错

    --watch        在监视模式下运行编译器。会监视输出文件，在它们改变时重新编译。

2.TypeScript 保留关键字如下表所示：

    break   as  any switch
    case    if  throw   else
    var number  string  get
    module  type    instanceof  typeof
    public  private enum    export
    finally for while   void
    null    super   this    new
    in  return  true    false
    any extends static  let
    package implements  interface   function
    new try yield   const
    continue    do  catch

3.空白和换行
    TypeScript 会忽略程序中出现的空格、制表符和换行符。
    空格、制表符通常用来缩进代码，使代码易于阅读和理解。

4.TypeScript 区分大小写
    TypeScript 区分大写和小写字符。

5.分号是可选的
    每行指令都是一段语句，你可以使用分号或不使用， 分号在 TypeScript 中是可选的，建议使用。

    如果语句写在同一行则一定需要使用分号来分隔，否则会报错

6.TypeScript 与面向对象
    面向对象是一种对现实世界理解和抽象的方法。

    TypeScript 是一种面向对象的编程语言。

    面向对象主要有两个概念：对象和类。

        对象：对象是类的一个实例（对象不是找个女朋友），有状态和行为。例如，一条狗是一个对象，它的状态有：颜色、名字、品种；行为有：摇尾巴、叫、吃等。
        类：类是一个模板，它描述一类对象的行为和状态。
        方法：方法是类的操作的实现步骤。

    TypeScript 面向对象编程实例：
    class Site { 
       name():void { 
          console.log("Runoob") 
       } 
    } 
    var obj = new Site(); 
    obj.name();

    以上实例定义了一个类 Site，该类有一个方法 name()，该方法在终端上输出字符串 Runoob。
    new 关键字创建类的对象，该对象调用方法 name()。

    编译后生成的 JavaScript 代码如下：
    var Site = /** @class */ (function () {
        function Site() {
        }
        Site.prototype.name = function () {
            console.log("Runoob");
        };
        return Site;
    }());
    var obj = new Site();
    obj.name();

7.TypeScript基本类型
    数据类型    关键字
    1、任意类型  any
    2、数据类型 number
    3、字符串类型 string
    4、布尔类型  boolean
    5、数组类型  无
    6、元组   无   
    7、枚举  enum
    8、void  void
    9、null  null
    10、undefined undefined
    11、never  never

    注意：TypeScript和JavaScript没有整数类型

    never 类型
        never 是其它类型（包括 null 和 undefined）的子类型，代表从不会出现的值。这意味着声明为 never 类型的变量只能被 never 类型所赋值，在函数中它通常表现为抛出异常或无法执行到终止点（例如无线循环），示例代码如下：

        let x: never;
        let y: number;

        // 运行错误，数字类型不能转为 never 类型
        x = 123;

        // 运行正确，never 类型可以赋值给 never类型
        x = (()=>{ throw new Error('exception')})();

        // 运行正确，never 类型可以赋值给 数字类型
        y = (()=>{ throw new Error('exception')})();

        // 返回值为 never 的函数可以是抛出异常的情况
        function error(message: string): never {
            throw new Error(message);
        }

        // 返回值为 never 的函数可以是无法被执行到的终止点的情况
        function loop(): never {
            while (true) {}
        }


8.TypeScript 变量声明

    TypeScript 变量的命名规则：
        变量名称可以包含数字和字母。
        除了下划线 _ 和美元 $ 符号外，不能包含其他特殊字符，包括空格。
        变量名不能以数字开头。
        变量使用前必须先声明，我们可以使用 var 来声明变量。

    var uname:string = "Runoob"; 
    var score1:number = 50;
    var score2:number = 42.50
    var sum = score1 + score2 
    console.log("名字: "+uname) 
    console.log("第一个科目成绩: "+score1) 
    console.log("第二个科目成绩: "+score2) 
    console.log("总成绩: "+sum)

9.类型断言
    类型断言可以用来手动指定一个值的类型，即允许变量从一种类型更改为另一种类型。


10.类型推断
    当类型没有给出时，TypeScript 编译器利用类型推断来推断类型。

    如果由于缺乏声明而不能推断出类型，那么它的类型被视作默认的动态 any 类型。

    var num = 2;    // 类型推断为 number
    console.log("num 变量的值为 "+num); 
    num = "12";    // 编译错误
    console.log(num);

11.变量作用域
    变量作用域指定了变量定义的位置。

    程序中变量的可用性由变量作用域决定。

    TypeScript 有以下几种作用域：
        全局作用域 − 全局变量定义在程序结构的外部，它可以在你代码的任何位置使用。

        类作用域 − 这个变量也可以称为 字段。类变量声明在一个类里头，但在类的方法外面。 该变量可以通过类的对象来访问。类变量也可以是静态的，静态的变量可以通过类名直接访问。

        局部作用域 − 局部变量，局部变量只能在声明它的一个代码块（如：方法）中使用。

    以下实例说明了三种作用域的使用：

    var global_num = 12          // 全局变量
    class Numbers { 
       num_val = 13;             // 类变量
       static sval = 10;         // 静态变量
       
       storeNum():void { 
          var local_num = 14;    // 局部变量
       } 
    } 
    console.log("全局变量为: "+global_num)  
    console.log(Numbers.sval)   // 静态变量
    var obj = new Numbers(); 
    console.log("类变量: "+obj.num_val)


    以上代码使用 tsc 命令编译为 JavaScript 代码为：
    var global_num = 12; // 全局变量
    var Numbers = /** @class */ (function () {
        function Numbers() {
            this.num_val = 13; // 类变量
        }
        Numbers.prototype.storeNum = function () {
            var local_num = 14; // 局部变量
        };
        Numbers.sval = 10; // 静态变量
        return Numbers;
    }());
    console.log("全局变量为: " + global_num);
    console.log(Numbers.sval); // 静态变量
    var obj = new Numbers();
    console.log("类变量: " + obj.num_val);

12.TypeScript运算符
    TypeScript 主要包含以下几种运算：
        算术运算符
        逻辑运算符
        关系运算符
        按位运算符
        赋值运算符
        三元/条件运算符
        字符串运算符
        类型运算符

13.关系运算符
    var num1:number = 5;
    var num2:number = 9;
     
    console.log("num1 的值为: "+num1); 
    console.log("num2 的值为:"+num2);
     
    var res = num1>num2 
    console.log("num1 大于n num2: "+res)
     
    res = num1<num2 
    console.log("num1 小于 num2: "+res)  
     
    res = num1>=num2 
    console.log("num1 大于或等于  num2: "+res)
     
    res = num1<=num2
    console.log("num1 小于或等于 num2: "+res)  
     
    res = num1==num2 
    console.log("num1 等于 num2: "+res)  
     
    res = num1!=num2  
    console.log("num1 不等于 num2: "+res)

14.逻辑运算符
    &&  and
    ||  or  
    !   not

15.类型运算符
    typeof 运算符
    typeof 是一元运算符，返回操作数的数据类型。

    var num = 12 
    console.log(typeof num);   //输出结果: number

16.Lambda 函数
    Lambda 函数也称之为箭头函数。

    箭头函数表达式的语法比函数表达式更短。

    函数只有一行语句：

        ( [param1, parma2,…param n] )=>statement;

    实例
    以下实例声明了 lambda 表达式函数，函数返回两个数的和：
    
    var foo = (x:number)=>10 + x 
    console.log(foo(100))      //输出结果为 110

    编译以上代码，得到以下 JavaScript 代码：
    var foo = function (x) { return 10 + x; };
    console.log(foo(100)); //输出结果为 110


17.函数重载
    重载是方法名字相同，而参数不同，返回类型可以相同也可以不同。
    每个重载的方法（或者构造函数）都必须有一个独一无二的参数类型列表。

    参数类型不同：
    function disp(string):void; 
    function disp(number):void;

    参数数量不同：
    function disp(n1:number):void; 
    function disp(x:number,y:number):void;

    参数类型顺序不同：
    function disp(n1:number,s1:string):void; 
    function disp(s:string,n:number):void;
    如果参数类型不同，则参数类型应设置为 any。

    参数数量不同你可以将不同的参数设置为可选

18.TypeScript Number
    Number 对象属性
    下表列出了 Number 对象支持的属性：
    1.MAX_VALUE  可表示的最大的数
    2.MIN_VALUE  可表示的最小的数
    3.NaN   非数字值
    4.NEGATIVE_INFINITY  负无穷大，溢出时返回该值。
    5.POSITIVE_INFINITY   正无穷大，溢出时返回该值。
    6.prototype  Number 对象的静态属性。使您有能力向对象添加属性和方法。
    7.constructor  返回对创建此对象的 Number 函数的引用。

    console.log("TypeScript Number 属性: "); 
    console.log("最大值为: " + Number.MAX_VALUE); 
    console.log("最小值为: " + Number.MIN_VALUE); 
    console.log("负无穷大: " + Number.NEGATIVE_INFINITY); 
    console.log("正无穷大:" + Number.POSITIVE_INFINITY);

    输出结果为：
    TypeScript Number 属性:
    最大值为: 1.7976931348623157e+308
    最小值为: 5e-324
    负无穷大: -Infinity
    正无穷大:Infinity

    prototype 实例
    function employee(id:number,name:string) { 
        this.id = id 
        this.name = name 
    } 
     
    var emp = new employee(123,"admin") 
    employee.prototype.email = "admin@runoob.com" 
     
    console.log("员工号: "+emp.id) 
    console.log("员工姓名: "+emp.name) 
    console.log("员工邮箱: "+emp.email)

19.Number 对象方法
    1、toExponential()  把对象的值转换为指数计数法。
    2、toFixed()   把数字转换为字符串，并对小数点指定位数。
    3、toLocaleString()  把数字转换为字符串，使用本地数字格式顺序。
    4、toPrecision()  把数字格式化为指定的长度。
    5、toString()  把数字转换为字符串，使用指定的基数。数字的基数是 2 ~ 36 之间的整数。若省略该参数，则使用基数 10。
    6、valueOf()  返回一个 Number 对象的原始数字值。