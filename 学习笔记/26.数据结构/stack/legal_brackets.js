const Stack = require('./mystack.js');

//判断字符串里的括号是否合法
function is_leagel_brackets(string) {
    var stack = new Stack.Stack();

    for (var i=0; i<string.length; i++){
        var item = string[i];
        // 遇到左括号入栈
        if (item == '('){
            stack.push(item);
        } else if (item == ")"){
            //遇到右括号，判断栈是否为空
            if (stack.isEmpty()){
                return false;
            } else {
                stack.pop(); //弹出左括号
            }
        }
    }
    //如果栈为空，说明字符串括号合法
    return stack.isEmpty();

};

console.log(is_leagel_brackets("adf(ds(ew(we)rw)rwqq)qwewe"));
console.log(is_leagel_brackets("()()sd()(sd()fw))("));
