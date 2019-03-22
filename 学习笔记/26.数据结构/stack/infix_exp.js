//中缀表达式转后缀表达式
const Stack = require('./mystack');

//符号的优先级
var priority_map = {
    "+": 1,
    "-": 1,
    "*": 2,
    "/": 2
};

//中缀表达式转后缀表达式
function infix_exp_2_postfix_exp(exp) {
    var stack = new Stack.Stack();

    var postfix_lst = [];
    for (var i = 0;i<exp.length;i++){
        var item = exp[i];
        // 如果是数字，直接放入到postfix_lst中
        if(!isNaN(item)){
            postfix_lst.push(item);
        }else if (item == "("){
            //遇到左括号入栈
            stack.push(item);
        } else if (item == ")"){
            //遇到右括号，把栈顶元素弹出，直到遇到左括号
            while(stack.top() != "("){
                postfix_lst.push(stack.pop());
            }
            stack.pop(); //左括号出栈
        } else{
            // 遇到运算符，把栈顶的运算符弹出，直到栈顶的运算符优先级小于当前运算符
            while (!stack.isEmpty() && ["+","-","*","/"].indexOf(stack.top()) >=0 && priority_map[stack.top()] >= priority_map[item])  {
            //    把弹出的运算符加入到postfix_lst
                postfix_lst.push(stack.pop());
            }
            //当前的运算符入栈
            stack.push(item);
        }
    }

    //for循环结束后，栈里可能还有元素，都弹出放入到postfix_lst中
    while(!stack.isEmpty()){
        postfix_lst.push(stack.pop())
    }

    return postfix_lst
};

// 12+3
console.log(infix_exp_2_postfix_exp(["12","+", "3"]));
// 2-3+2
console.log(infix_exp_2_postfix_exp(["2","-", "3", "+", "2"]));
// (1+(4+5+3)-3)+(9+8)
var exp1 = ["(","1","+","(","4","+","5","+","3",")","-","3",")","+","(","9","+","8",")"];
console.log(infix_exp_2_postfix_exp(exp1));

// (1+(4+5+3)/4-3)+(6+8)*3
var exp2 = ['(', '1', '+', '(', '4', '+', '5', '+', '3', ')', '/', '4', '-', '3', ')', '+', '(', '6', '+', '8', ')', '*', '3'];
console.log(infix_exp_2_postfix_exp(exp2));

console.log(infix_exp_2_postfix_exp(["12","+", "3","*", "5"]));
console.log(infix_exp_2_postfix_exp(["12","*", "3","+", "5"]));


