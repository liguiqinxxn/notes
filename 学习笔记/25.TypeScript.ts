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

20.数组
    数组解构
        把数组元素赋值给变量
        var arr:number[] = [12,13]
        var[x,y] = arr //将数组的两个元素赋值给变量x和y
        console.log(x);
        console.log(y);

    数组迭代
        使用for语句来循环输出数组的各个元素：
        var j:any;
        var nums:number[] = [1001,1002,1003,1004]

        for(j in nums) {
            console.log(nums[j])
        }


    多维数组
        一个数组的元素可以是另外一个数组，这样就构成了多维数组。
        最简单的多维数组是二维数组，定义方式如下：
        var arr_name:datatype[][] = [ [val1,val2,val3],[v1,v2,v3] ]

    数组在函数中的使用
        1、作为参数专递给函数
        2、作为函数的返回值

    数组方法：
        1、concat() 连接两个或更多的数组，并返回结果
        2、every() 检测数组元素的每个元素是否都符合条件。
        3、filter() 检测数组元素，并返回符合条件所有元素的数组。
        4、forEach() 数组每个元素都执行一次回调函数。
        5、indexOf() 搜索数组中的元素，并返回它所在的位置。
        6、join() 把数组的所有元素放入一个字符串。
        7、lastIndexOf() 返回一个指定的字符串值最后出现的位置，在一个字符串中的指定位置从后向前搜索。
        8、map() 通过指定函数处理数组的每个元素，并返回处理后的数组。
        9、pop() 删除数组的最后一个元素并返回删除的元素。
        10、push() 向数组的末尾添加一个或更多元素，并返回新的长度。
        11、reduce() 将数组元素计算为一个值(从左到右)
        12、reduceRight() 将数组元素计算为一个值(从右到左)
        13、reverse() 反转数组的元素顺序
        14、shift() 删除并返回数组的第一个元素
        15、slice() 选取数组的一部分，并返回一个新数组
        16、some() 检测数组元素中是否有元素符合指定条件
        17、sort() 对数组的元素进行排序
        18、splice() 从数组中添加或删除元素
        19、toString() 把数组转换为字符串，并返回结果
        20、unshift() 向数组的开头添加一个或更多元素，并返回新的长度。

21.TypeScript元组
    数组中元素的数据类型都是相同的，如果存储的元素数据类型不同。则需要使用元组。元组中允许存储不同类型的元素，元组可以作为参数传递给函数。
    创建元组的语法格式如下：
        var tuple_name = [value1,value2,value3,...value n]

    var mytuple = [10,'Runoob'];
    或
    var mytuple = [];
    mytuple[0] = 120
    mytuple[1] = 234

    访问元组
        元组中元素使用索引来访问，第一个元素的索引值为0，第二个为1，以此类推第n个为n-1，语法格式如下：
        tuple_name[index]

    元组运算
        使用以下两个函数向元组添加新元素或者删除元素
            push() 向元组添加元素，添加在最后面。
            pop() 从元组中移除元素(最后一个)，并返回移除的元素。

    更新元组
        元组是可变的，这意味着我们可以对元组进行更新操作

        var mytuple = [10, "Runoob", "Taobao", "Google"]; // 创建一个元组
        console.log("元组的第一个元素为：" + mytuple[0]) 
         
        // 更新元组元素
        mytuple[0] = 121     
        console.log("元组中的第一个元素更新为："+ mytuple[0])

    解构元组
        可以把元组赋值给变量

        var a = [10, "Runoob"]
        var [b,c] = a
        console.log( b )
        console.log( c )

22.联合类型
    联合类型可以通过管道(|)将变量设置多种类型，赋值时可以根据设置的类型来赋值。
    注意：只能赋值指定的类型，如果赋值其它类型就会报错。

    var val：string|number
    val = 12
    console.log("数字为：" + val)
    val = "Runoob"
    console.log("字符串为" + val)

    也可以将联合类型作为函数参数使用：
    function disp(name:string|string[]) { 
            if(typeof name == "string") { 
                    console.log(name) 
            } else { 
                    var i; 
                    for(i = 0;i<name.length;i++) { 
                    console.log(name[i])
                    } 
            } 
    } 
    disp("Runoob") 
    console.log("输出数组....") 
    disp(["Runoob","Google","Taobao","Facebook"]

    联合类型数组
        也可以将数组声明为联合类型
        var arr:number[]|string[]; 
        var i:number; 
        arr = [1,2,4] 
        console.log("**数字数组**")  
         
        for(i = 0;i<arr.length;i++) { 
           console.log(arr[i]) 
        }  
         
        arr = ["Runoob","Google","Taobao"] 
        console.log("**字符串数字**")  
         
        for(i = 0;i<arr.length;i++) { 
           console.log(arr[i]) 
        }

23.TypeScript接口
    接口是一系列抽象方法的声明，是一些方法特征的集合，这些方法都应该是抽象的，需要由具体的类去实现，然后第三方就可以通过这组抽象方法调用，让具体的类执行具体的方法。
    TypeScript接口定义如下：
    interface interface_name {
    }

    以下实例中，我们定义了一个接口 IPerson，接着定义了一个变量 customer，它的类型是 IPerson。
    customer 实现了接口 IPerson 的属性和方法。
        interface IPerson { 
            firstName:string, 
            lastName:string, 
            sayHi: ()=>string 
        } 
         
        var customer:IPerson = { 
            firstName:"Tom",
            lastName:"Hanks", 
            sayHi: ():string =>{return "Hi there"} 
        } 
         
        console.log("Customer 对象 ") 
        console.log(customer.firstName) 
        console.log(customer.lastName) 
        console.log(customer.sayHi())  
         
        var employee:IPerson = { 
            firstName:"Jim",
            lastName:"Blakes", 
            sayHi: ():string =>{return "Hello!!!"} 
        } 
         
        console.log("Employee  对象 ") 
        console.log(employee.firstName) 
        console.log(employee.lastName)

    联合类型和接口
    interface RunOptions { 
        program:string; 
        commandline:string[]|string|(()=>string); 
    } 
     
    // commandline 是字符串
    var options:RunOptions = {program:"test1",commandline:"Hello"}; 
    console.log(options.commandline)  
     
    // commandline 是字符串数组
    options = {program:"test1",commandline:["Hello","World"]}; 
    console.log(options.commandline[0]); 
    console.log(options.commandline[1]);  
     
    // commandline 是一个函数表达式
    options = {program:"test1",commandline:()=>{return "**Hello World**";}}; 
     
    var fn:any = options.commandline; 
    console.log(fn());

    接口和数组
        接口中我们可以将数组的索引值和元素设置为不同类型，索引值可以是数字或字符串。
        interface namelist {
            [index:number]:string
        }
        var list2:namelist = ["John",1,"Bran"]  //错误 元素1不是string类型

        interface ages {
            [index:string]:number
        }
        var agelist:ages;
        agelist["John"] = 15  //正确
        agelist[2] = "nine"  //错误

    接口继承
        接口继承就是说接口可以通过其他接口来扩展自己。
        TypeScript允许接口继承多个接口
        继承使用关键字extends。
        单接口继承语法格式：
            Child_interface_name extends super_interface_name
        多接口继承语法格式：
            Child_interface_name extends super_interface1_name,super_interface2_name…,super_interfaceN_name
        继承的各个接口使用逗号，分割。

    单继承实例：
        interface Person {
            age：number
        }

        interface Musician extends Person {
            instrument：string
        }

        var drummer = <Musician>{};
        drummer.age = 27;
        drummer.instrument = "Drums";
        console.log("年龄: " +drummer.age);
        console.log("喜欢的乐器： " +drummer。instrument)；

    多继承实例：
        interface Iparent1 {
            v1:number
        }
        interface Iparent2 {
            v2:number
        }

        interface Child extends IParent1, IParent2 {}
        var Iobj:Child = { v1:12, v2:23}
        console.log("value 1: " +Iobj.v1 + "value 2: " + Iobj.v2)

24.TypeScript类
    TypeScript是面向对象的JavaScript。
    类描述了所创建的对象共同的属性和方法。
    TypeScript支持面向对象的所有特性，比如类、接口等。
    TypeScript类定义方式如下：
        class class_name {
            //类作用域
        }

    定义类的关键字为class，后面紧跟类名，类可以包含以下几个模块（类的数据成员）：
        字段-字段是类里面声明的变量。字段表示对象的有关数据。
        构造函数-类实例化时调用，可以为类的对象分配内存。
        方法-方法为对象要执行的操作。

    创建类的数据成员
        class Car {
            //字段
            engine:string;

            //构造函数
            constructor(engine:string){
                this.engine = engine
            }

            //方法
            disp():void {
                console.log("发动机为： " +this.engine)
            }
        }

    创建实例化对象
        使用new关键字来实例化类的对象，语法格式如下：
            var object_name = new class_name([ arguments ])
        类实例化时会调用构造函数，例如：
            var obj = new Car("Engine 1")
        类中字段属性和方法可以使用.号来访问：
            //访问属性
            obj.field_name
            //访问方法
            obj.function_name()

    例：
    class Car {
        //字段
        engine:string;

        //构造函数
        constructor(engine:string) {
            this.engine = engine
        }

        //方法
        disp():void {
            console.log("函数中显示发动机型号 ： " +this.engine)
        }
    }

    //创建一个对象
    var obj = new Car("XXSY1")

    //访问字段
    console.log("读取发动机型号 ："+obj.engine)

    //访问方法
    obj.disp()

    类的继承
        TypeScript支持继承类，即我们可以在创建类的时候继承一个已存在的类，这个已存在的类称为父类，继承它的类称为子类。
        类继承使用关键字extends，子类除了不能继承父类的私有成员(方法和属性)和构造函数，其他的都可以继承。
        TypeScript一次只能继承一个类，不支持继承多个类，但TypeScript支持多重继承（A继承B，B继承C)。
        语法格式如下：
            class child_class_name extends parent_class_name
        例：
        class Shape {
            Area:number

            constructor(a:number){
                this.Area = a
            }
        }

        class Circle extends Shape {
            disp():void {
                console.log("圆的面积： " +this.Area)
            }
        }

        var obj = new Circle(223);
        obj.disp()

    注意：子类只能继承一个分类，TypeScript不支持继承多个类，但支持多重继承
    class Root {
        str:string;
    }

    class Child extends Root {}
    class Leaf extends Child {} //多重继承，继承了Child和Root类

    var obj = new Leaf();
    obj.str = "hello"
    console.log(obj.str)

    继承类的方法重写
        类继承后，子类可以对父类的方法重新定义，这个过程称之为方法的重写。
        其中super关键字是对父类的直接引用，该关键字可以引用父类的属性和方法。

    class PrinterClass {
        doPrint():void {
            console.log("父类的 doPrint() 方法。")
        }
    }

    class StringPrinter extends PrinterClass {
        doPrint():void {
            super.doPrint() //调用父类的函数
            console.log("子类的 doPrint() 方法。")
        }
    }

    static 关键字
    atatic 关键字用于定义类的数据成员(属性和方法) 为静态的，静态成员可以直接通过类名调用。
    class StaticMem {
        static num:number;

        static disp():void {
            console.log("num值为 " +StaticMem.num)
        }
    }

    StaticMem.num = 12  //初始化静态变量
    StaticMem.disp()   //调用静态方法


    instanof运算符
        instanceof 运算符用于判断对象是否是指定的类型，如果是返回true，否则返回false。

    class Person{ }
    var obj = new Person()
    var isPerson = obj instanceof Person;
    console.log("obj 对象是Person 类实例化来的吗？ " + isPerson);

    访问控制修饰符
        TypeScript中，可以使用访问控制符来保护对类、变量、方法和构造方法的访问。Java支持3种不同的访问权限。
        public(默认) ：公有，可以在任何地方被访问。
        protected ：受保护，可以被其自身以及子类和父类访问。
        private：私有，只能被其定义所在的类访问。

    例：定义了两个变量 str1 和 str2，str1 为 public，str2 为 private，实例化后可以访问 str1，如果要访问 str2 则会编译错误。

    class Encapsulate {
        str1:string = "hello"
        private str2:string = "world"
    }

    var obj = new Encapsulate()
    console.log(obj.str1)  //可访问
    console.log(obj.str2)  //编译错误， str2是私有的

    类和接口
        类可以实现接口，使用关键字implements, 并将interest字段作为类的属性使用。
    interface ILoan {
        interest:number
    }

    class AgriLoan implements ILoan {
        interest:number
        rebate:number

        constructor(interest:number,rebate:number){
            this.interest = interest
            this.rebate = rebate
        }
    }

    var obj = new AgriLoan(10,1)
    console.log("利润为 ：" +obj.interest+ ",抽成为： " +obj.rebate )

25.TypeScript模块
    两个模块之间的关系是通过在文件级别上使用 import 和 export 建立的。

    模块使用模块加载器去导入其它的模块。 在运行时，模块加载器的作用是在执行此模块代码前去查找并执行这个模块的所有依赖。 大家最熟知的JavaScript模块加载器是服务于 Node.js 的 CommonJS 和服务于 Web 应用的 Require.js。

    模块导出使用关键字 export 关键字，语法格式如下：
    // 文件名 : SomeInterface.ts 
    export interface SomeInterface { 
       // 代码部分
    }

    要在另外一个文件使用该模块就需要使用 import 关键字来导入:
    import someInterfaceRef = require("./SomeInterface");

    实例

    IShape.ts 文件代码：
    /// <reference path = "IShape.ts" /> 
    export interface IShape { 
       draw(); 
    }

    Circle.ts 文件代码：
    import shape = require("./IShape"); 
    export class Circle implements shape.IShape { 
       public draw() { 
          console.log("Cirlce is drawn (external module)"); 
       } 
    }

    Triangle.ts 文件代码：
    import shape = require("./IShape"); 
    export class Triangle implements shape.IShape { 
       public draw() { 
          console.log("Triangle is drawn (external module)"); 
       } 
    }

    TestShape.ts 文件代码：
    import shape = require("./IShape"); 
    import circle = require("./Circle"); 
    import triangle = require("./Triangle");  
     
    function drawAllShapes(shapeToDraw: shape.IShape) {
       shapeToDraw.draw(); 
    } 
     
    drawAllShapes(new circle.Circle()); 
    drawAllShapes(new triangle.Triangle());

26.TypeScript 声明文件
    TypeScript 作为 JavaScript 的超集，在开发过程中不可避免要引用其他第三方的 JavaScript 的库。虽然通过直接引用可以调用库的类和方法，但是却无法使用TypeScript 诸如类型检查等特性功能。为了解决这个问题，需要将这些库里的函数和方法体去掉后只保留导出类型声明，而产生了一个描述 JavaScript 库和模块信息的声明文件。通过引用这个声明文件，就可以借用 TypeScript 的各种特性来使用库文件了。

    假如我们想使用第三方库，比如 jQuery，我们通常这样获取一个 id 是 foo 的元素：

    $('#foo');
    // 或
    jQuery('#foo');

    但是在 TypeScript 中，我们并不知道 $ 或 jQuery 是什么东西：

    jQuery('#foo');

    // index.ts(1,1): error TS2304: Cannot find name 'jQuery'.
    这时，我们需要使用 declare 关键字来定义它的类型，帮助 TypeScript 判断我们传入的参数类型对不对：

    declare var jQuery: (selector: string) => any;

    jQuery('#foo');
    declare 定义的类型只会用于编译时的检查，编译结果中会被删除。

    上例的编译结果是：

    jQuery('#foo');

    声明文件
        声明文件以.d.ts为后缀
            runoob.d.ts
        声明文件或模块的语法格式如下：
            declare module Module_Name {}
        TypeScript 引入声明文件语法格式：
            /// <reference path = " runoob.d.ts" />

        当然，很多流行的第三方库的声明文件不需要我们定义了，比如 jQuery 已经有人帮我们定义好了：https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/jquery/index.d.ts

        