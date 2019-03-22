
const Stack = require('./mystack.js');

function MinStack(){
    var data_stack = new Stack.Stack();   //存储数据
    var min_stack = new  Stack.Stack();   //存储最小值

    // push方法
    this.push = function (item) {
        data_stack.push(item);

        //min_stack为空或者栈顶元素大于item
        if (min_stack.isEmpty() || item < min_stack.top()){
            min_stack.push(item);
        } else {
            min_stack.push(min_stack.top());
        }
    };

    //弹出栈顶元素
    this.pop = function () {
        data_stack.pop();
        min_stack.pop();
    };

    //返回栈的最小值
    this.min = function () {
        return min_stack.top();
    };
};

minstack = new  MinStack();
minstack.push(3);
minstack.push(6);
minstack.push(8);
console.log(minstack.min());
minstack.push(2);
console.log(minstack.min());