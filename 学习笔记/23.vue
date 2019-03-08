1.
    # 全局安装 vue-cli
    $ npm install -g vue-cli
    # 创建一个基于 "webpack" 模板的新项目
    $ vue init webpack my-project
    # 安装依赖
    $ cd my-project
    $ npm install
    $ npm run dev

2.
    new一个vue对象的时候你可以设置它的属性，其中最重要的包括三个，分别是data，methods，watch。
    其中data代表vue对象的数据，methods代表vue对象的方法，watch设置了对象监听的方法。
    Vue对象里的设置通过html指令进行关联。
    重要的指令包括
        v-text 渲染数据
        v-if 控制显示
        v-on 绑定事件
        v-for 循环渲染

3.如何划分组件
    功能模块 - select，pagenation...
    页面区域 - header，footer，sidebar...

4.Vuejs组件之间的调用-另外一个重要选项-components
App.vue
footer.vue
header.vue

    import Header from './header'
    import Footer from './footer'
    new Vue({
        data: {
            isShow: true
        },
        components: [
        Header,Footer
        ]
            
    })

用components注册才能使用
<header></header>
<footer></footer>

5.Vuejs组件之间的通信-props

    //this is header.vue
    new Vue({
        data: {
            username: 'xxx'
        },
        props: ['msg'],
        methods: {
            doThis: function (){
                console.log(this.msg)
            }
        }
    })


    <!--this is app.vue-->
    <header msg='something interesting'></header>
    <footer></footer>

6.父向子组件传参
    使用$on() 监听事件；
        //this is App.vue
        <template>
          <div id="app">
            <component-a msgfromfather='you die!'></component-a>
          </div>
        </template>
        <script>
            import ComponentA from './components/componentA'
            export default {
              data: function() {
                return {
                }
              }
            }
        </script>

        //this is componentA.vue
        <template>
          <div class="hello">
            <h1>{{ msg }}</h1>
            <h1>{{ msgfromfather }}</h1>
            <button v-on:click="onClickMe">Click!</button>
          </div>
        </template>

        <script>
        export default {
          data: function() {
            return {
              msg: 'hello from component a!'
            }
          },
          props: ['msgfromfather'],
          methods: {
            onClickMe: function () {
               console.log(this.msgfromfather)
            }
          }
        }
        </script>

7.自定义事件
    vue实例实现了一个自定义事件接口，用于在组件树中通信。这个事件系统独立于原生DOM事件，用法也不同。
    每个Vue实例都是一个事件触发器：
        使用$on() 监听事件；
        使用$emit() 在它上面触发事件；

        $dispatch 和 $broadcast 已经被弃用。
        使用$dispatch() 派发事件，事件沿着父链冒泡；
        使用$broadcast() 广播事件，事件向下传导给所有的后代。

    不同于DOM事件，Vue事件在冒泡过程中第一次触发回调之后自动停止冒泡，除非回调明确返回true。

8.子向父组件传参
    使用$emit() 在它上面触发事件；
        //this is App.vue
        <template>
          <div id="app">
            <p>child tells me:{{ childWords}}</p>
            <component-a v-on:child-tell-me-something='listenToMyBoy'></component-a>
          </div>
        </template>

        <script>
          import ComponentA from './components/componentA'
        export default {
          data: function () {
            return {
              childWords: ''
            }
          },
          components: { ComponentA},
          methods:{
            listenToMyBoy: function (msg) {
              this.childWords = msg;
            }

          }
        }
        </script>

        //this is componentA.vue
        <template>
          <div class="hello">
            <h1>{{ msg }}</h1>
            <button v-on:click="onClickMe">open mouse!</button>
          </div>
        </template>

        <script>
        export default {
          data: function() {
            return {
              msg: 'hello from component a!'
            }
          },
          methods: {
            onClickMe: function () {
              this.$emit('child-tell-me-something', this.msg);
            }
          }
        }
        </script>


9.v-bind缩写
   完整语法
   <a v-bind:href="url">...</a>

   缩写
   <a :href="url">...</a>

10.v-on缩写
  完整语法
  <a v-on:click="doSomething">...</a>

  缩写
  <a @click="doSomething">...</a>

11.class与Style绑定

12.条件渲染
  v-if
  v-show

  v-if 是“真正”的条件渲染，因为它会确保在切换过程中条件块内的事件监听器和子组件适当地被销毁和重建。

  v-if 也是惰性的：如果在初始渲染时条件为假，则什么也不做——直到条件第一次变为真时，才会开始渲染条件块。

  相比之下，v-show 就简单得多——不管初始条件是什么，元素总是会被渲染，并且只是简单地基于 CSS 进行切换。

  一般来说，v-if 有更高的切换开销，而 v-show 有更高的初始渲染开销。因此，如果需要非常频繁地切换，则使用 v-show 较好；如果在运行时条件很少改变，则使用 v-if 较好。

13.列表渲染
  v-for
  v-for指令需要使用item in items形式的特殊语法，items是源数据数组并且item是数组元素迭代的别名。

  <ul id="example-1">
    <li v-for="item in items">
      {{ item.message }}
    </li>
  </ul>


  var example1 = new Vue({
    el: '#example-1',
    data: {
      items: [
        { message: 'Foo' },
        { message: 'Bar' }
      ]
    }
  })


  在v-for块中，我们拥有对父作用域属性的完全访问权限。v-for还支持一个可选的第二个参数为当前项的索引。
  <ul id="example-2">
    <li v-for="(item, index) in items">
      {{ parentMessage }} - {{ index }} - {{ item.message }}
    </li>
  </ul>

  var example2 = new Vue({
    el: '#example-2',
    data: {
      parentMessage: 'Parent',
      items: [
        { message: 'Foo' },
        { message: 'Bar' }
      ]
    }
  })

  也可以用of替代in作为分隔符，因为它是最接近JavaScript迭代器的语法：
  <div v-for="item of items"></div>

  一个对象的v-for
    也可以用v-for通过一个对象的属性来迭代。
    <ul id="v-for-object" class="demo">
      <li v-for="value in object">
        {{ value }}
      </li>
    </ul>

    new Vue({
      el: '#v-for-object',
      data: {
        object: {
          firstName: 'John',
          lastName: 'Doe',
          age: 30
        }
      }
    })
    
    也可以提供第二个的参数为键名：
    <div v-for="{value,key} in object">
      {{ key }}: {{ value }}
    </div>

    第三个参数为索引：
    <div v-for="{value,key,index} in object">
      {{ index }}. {{ key }}: {{ value }}
    </div>

    注意：在遍历对象时，是按 Object.keys() 的结果遍历，但是不能保证它的结果在不同的 JavaScript 引擎下是一致的。

key 
  当 Vue.js 用 v-for 正在更新已渲染过的元素列表时，它默认用“就地复用”策略。如果数据项的顺序被改变，Vue 将不会移动 DOM 元素来匹配数据项的顺序， 而是简单复用此处每个元素，并且确保它在特定索引下显示已被渲染过的每个元素。这个类似 Vue 1.x 的 track-by="$index" 。

  这个默认的模式是高效的，但是只适用于不依赖子组件状态或临时 DOM 状态 (例如：表单输入值) 的列表渲染输出。

  为了给 Vue 一个提示，以便它能跟踪每个节点的身份，从而重用和重新排序现有元素，你需要为每项提供一个唯一 key 属性。理想的 key 值是每项都有的唯一 id。这个特殊的属性相当于 Vue 1.x 的 track-by ，但它的工作方式类似于一个属性，所以你需要用 v-bind 来绑定动态值 (在这里使用简写)：

  <div v-for="item in items" :key="item.id">
    <!-- 内容 -->
  </div>

  建议尽可能在使用 v-for 时提供 key，除非遍历输出的 DOM 内容非常简单，或者是刻意依赖默认行为以获取性能上的提升。

  因为它是 Vue 识别节点的一个通用机制，key 并不与 v-for 特别关联，key 还具有其他用途，我们将在后面的指南中看到其他用途。
  
  注意：不要使用对象或数组之类的非原始类型值作为 v-for 的 key。用字符串或数类型的值取而代之。


  数组更新检测
    变异方法：
      push()
      pop()
      shift()
      unshift()
      splice()
      sort()
      reverse()

  替换数组
    变异方法 (mutation method)，顾名思义，会改变被这些方法调用的原始数组。相比之下，也有非变异 (non-mutating method) 方法，例如：filter(), concat() 和 slice() 。这些不会改变原始数组，但总是返回一个新数组。当使用非变异方法时，可以用新数组替换旧数组：

    example1.items = example1.items.filter(function (item) {
      return item.message.match(/Foo/)
    })
    你可能认为这将导致 Vue 丢弃现有 DOM 并重新渲染整个列表。幸运的是，事实并非如此。Vue 为了使得 DOM 元素得到最大范围的重用而实现了一些智能的、启发式的方法，所以用一个含有相同元素的数组去替换原来的数组是非常高效的操作。
  
  注意事项
    由于 JavaScript 的限制，Vue 不能检测以下变动的数组：

    当你利用索引直接设置一个项时，例如：vm.items[indexOfItem] = newValue
    当你修改数组的长度时，例如：vm.items.length = newLength
    举个例子：

    var vm = new Vue({
      data: {
        items: ['a', 'b', 'c']
      }
    })
    vm.items[1] = 'x' // 不是响应性的
    vm.items.length = 2 // 不是响应性的
    为了解决第一类问题，以下两种方式都可以实现和 vm.items[indexOfItem] = newValue 相同的效果，同时也将触发状态更新：

    // Vue.set
    Vue.set(vm.items, indexOfItem, newValue)

    // Array.prototype.splice
    vm.items.splice(indexOfItem, 1, newValue)
    你也可以使用 vm.$set 实例方法，该方法是全局方法 Vue.set 的一个别名：

    vm.$set(vm.items, indexOfItem, newValue)
    为了解决第二类问题，你可以使用 splice：

    vm.items.splice(newLength)

  v-for with v-if
    当它们处于同一节点，v-for 的优先级比 v-if 更高，这意味着 v-if 将分别重复运行于每个 v-for 循环中。当你想为仅有的一些项渲染节点时，这种优先级的机制会十分有用，如下：

    <li v-for="todo in todos" v-if="!todo.isComplete">
      {{ todo }}
    </li>
    上面的代码只传递了未完成的 todos。

    而如果你的目的是有条件地跳过循环的执行，那么可以将 v-if 置于外层元素 (或 <template>)上。如：

    <ul v-if="todos.length">
      <li v-for="todo in todos">
        {{ todo }}
      </li>
    </ul>
    <p v-else>No todos left!</p>


14.事件处理
  监听事件
    v-on 
  事件处理方法
    v-on 还可以接收一个需要调用的方法名称
  内联处理器中的方法
    除了直接绑定到一个方法，也可以在内联 JavaScript 语句中调用方法
  事件修饰符
    修饰符是由点开头的指令后缀来表示。
    .stop 
    .prevent
    .capture
    .self
    .once 
    .passive

   阻止单击事件继续传播
  <a v-on:click.stop="doThis"></a>

  提交事件不再重载页面
  <from v-on:submit.prevent="onSubmit"></from>

  修饰符可以串联
  <a v-on:click.stop.prevent="doThat"></a>

  只有修饰符
  <from v-on:submit.prevent></from>

  添加事件监听器时使用事件捕获模式
  即元素自身触发的事件先在此处理，然后才交由内部元素进行处理
  <div v-on:click.capture="doThis">...</div>

  只当在event.target 是在当前元素自身时触发处理函数
  即事件不是从内部元素触发的
  <div v-on:click.self="doThat">...</div>

  注意：使用修饰符时，顺序很重要；相应的代码会以同样的顺序产生。因此，用v-on：click.prevent.self会阻止所有的点击，而v-on：click.self.prevent只会阻止对元素自身的点击。

  2.1.4新增
  点击事件将只会触发一次
  <a v-on:click.once="doThis"></a>
  注意：不像其它只能对原生的 DOM 事件起作用的修饰符，.once 修饰符还能被用到自定义的组件事件上。

  2.3.0新增
  Vue还对应addEventListener中的passive选项提供了 .passive 修饰符。 
  <!--滚动事件的默认行为（即滚动行为）将会立即触发 -->
  <!-- 而不会等待 'onScroll' 完成-->
  <!--这其中包含'event.preventDefault()'的情况 -->
  <div v-on:scroll.passive="onScroll">...</div>

  这个.passive 修饰符尤其能够提升移动端的性能。

  注意：不要把.passive 和 .prevent一起使用，因为.prevent将会被忽略，同时浏览器可能会向你展示一个警告。请记住，.passive会告诉浏览器你不想阻止事件的默认行为。

  按键修饰符
    在监听键盘事件时，我们经常需要检查详细的按键。Vue允许为v-on在监听键盘事件时添加按键修饰符；

    <!-- 只有在'key' 是'Enter'时调用 `vm.submit()`-->
    <input v-on:keyup.enter="submit">

    可以直接将KeyboardEvent.key暴露的任意有效按键名转换为kebab-case来作为修饰符。
    <input v-on:keyup.page-down="onPageDown">


  按键码
    注意：keyCode的事件用法已经被废弃了并可能不会被最新的浏览器支持。

  使用keyCode特性也是允许的
  <input v-on:keyup.13="submit">

  为了在必要的情况下支持旧浏览器，Vue提供了绝大多数常用的按键码的别名：
    .enter 
    .tab 
    .delete (捕获"删除"和"退格"键)
    .esc
    .space
    .up 
    .down
    .left
    .right
    注意：有一些按键（.esc 以及所有的方向键）在IE9中有不同的key值，如果你想支持IE9，这些内置的别名应该是首选。

    还可以通过全局config.keyCode对象自定义按键修饰符别名。
    //可以使用`v-on:keyup.f1`
    Vue.config.keyCodes.f1 = 112

    可以用如下修饰符来实现仅在按下相应按键时才触发鼠标或键盘事件的监听器。
    .ctrl
    .alt 
    .shift
    .meta
    <!-- Alt + C -->
    <input @keyup.alt.67="clear">

    <!-- Ctrl + Click -->
    <div @click.ctrl="doSomething">Do something</div>

    注意：请注意修饰键与常规按键不同，在和 keyup 事件一起用时，事件触发时修饰键必须处于按下状态。换句话说，只有在按住 ctrl 的情况下释放其它按键，才能触发 keyup.ctrl。而单单释放 ctrl 也不会触发事件。如果你想要这样的行为，请为 ctrl 换用 keyCode：keyup.17。

  .exact 修饰符 
    .exact修饰符允许你控制由精确的系统修饰符组合触发的事件。
    <!-- 即使Alt 或 Shift 被一同按下时也会触发-->
    <button @click.ctrl = "onClick"> A </button>

    <!--有且只有Ctrl被按下的时候才触发 -->
    <button @click.ctrl.exact="onCtrlClick">A</button>

    <!-- 没有任何系统修饰符被按下的时候才触发 -->
    <button @click.exact="onClick">A</button>

  鼠标按钮修饰符
    .left
    .right
    .middle
    这些修饰符会限制处理函数仅响应特定的鼠标按钮。

15.表单输入绑定
   基本语法
     可以用v-model指令在表单<input>、<textarea>及<select>元素上创建双向数据绑定。它会根据控件类型自动选取正确的方法来更新元素。尽管有些神奇，但v-model本质上不过是语法糖。它负责监听用户的输入事件以更新数据，并对一些极端场景进行一些特殊处理。

     注意： v-model 会忽略所有表单元素的value、checked、selected特性的初始值而总是将Vue实例的数据作为数据来源。你应该通过JavaScript在组件的data选项中声明初始值。

     v-model在内部使用不同的属性为不同的输入元素并抛出不同的事件：
       text和textarea元素使用value属性和input事件；
       checkbox和radio使用checked属性和change事件；
       select字段将value作为prop并将change作为事件。

      注意：对于需要使用输入法（如中文、日文、韩文等）的语言，你会发现v-model不会在输入法组合文字过程中得到更新。如果你也想处理这个过程，请使用input事件。

    文本
      <input v-model="message" placeholder="edit me">
      <p>Message is: {{ message }}</p>

    多行文本
      <span>Multiline message is:</span>
      <p style="white-space: pre-line;">{{ message }}</p>
      <br>
      <textarea v-model="message" placeholder"add multiple lines"></textarea>

      注意：在文本区域插值（<textarea></textarea>）并不会生效，应用v-model来代替。

    复选框
      单个复选框，绑定到布尔值：
        <input type="checkbox" id="checkbox" v-model="checked">
        <label for="checked">{{ checked }}</label>

      多个复选框，绑定到同一数组
        <div id="example-3">
          <input type="checkbox" id="jack" v-model="checkedNames">
          <label for="jack">Jack</label>
          <input type="checkbox" id="john" value="John" v-model="checkedNames">
          <label for="john">John</label>
          <input type="checkbox" id="mike" value="MIke" v-model="checkedNames">
          <br>
          <span>Checked names: {{ checkedNames }}</span>
        </div>

        new Vue({
          el: '#example-3',
          data:{
            checkedNames: []
          }
        })

    单选按钮
      <div id="example-4">
        <input type="radio" id="one" value="One" v-model="picked">
        <label for="one">One</label>
        <br>
        <input type="radio" id="two" value="Two" v-model="picked">
        <label for="two">Two</label>
        <br>
        <span>Picked: {{ picked }}</span>
      </div>

      new Vue({
        el: '#example-4',
        data: {
          picked: ''
        }
      })

    选择框
      单选时：
        <div id="example-5">
          <select v-model="selected">
            <option disabled value="">请选择</option>
            <option>A</option>
            <option>B</option>
            <option>C</option>
          </select>
          <span>Selected: {{ Selected }}</span>
        </div>

        new Vue({
            el: '...',
            data: {
              selected: ''
            }
        })

        如果v-model表达式的初始值末能匹配任何选项，<select>元素将被渲染为"未选中"状态。在iOS中，这会使用户无法选择第一选项。因为这样的情况下，iOS不会触发change事件。因此，更推荐像上面提供一个值为空的禁用选项。

      多选时(绑定到一个数组)：
        <div id="example-6">
          <select v-model="selected" multiple style="width: 50px;">
            <option>A</option>
            <option>B</option>
            <option>C</option>
          </select>
          <br>
          <span>Selected: {{ selected }}</span>
        </div>

        new Vue({
          el: '#example-6',
          data: {
            selected: []
          }
        })

      用v-for渲染的动态选项
        <select v-model="selected">
          <option v-for="option in options" v-bind:value="option.value">
          {{ option.text }}
          </option>
        </select>
        <span>Selected: {{ selected }}</span>

        new Vue({
          el: '...',
          data: {
            selected: 'A',
            options: [
            { text: 'One', value: 'A'},
            { text: 'Two', value: 'B'},
            { text: 'Three', value: 'C'}
            ]
          }
        })

      值绑定
        对于单选按钮，复选框及选择框的选项，v-model绑定的值通常是静态字符串(对于复选框也可以是布尔值)：

        <!-- 当选中时，`picked` 为字符串 "a" -->
        <input type="radio" v-model="picked" value="a">

        <!-- `toggle` 为true或false -->
        <input type="checkbox" v-model="toggle">

        <!-- 当选中第一个选项时，`selected` 为字符串"abc" -->
        <select v-model="selected">
          <option v-model="selected">ABC</option>
        </selecte>

        但是有时我们可能想把值绑定到Vue实例的一个动态属性上，这时可以用v-bind实现，并且这个属性的值可以不是字符串。

      复选框 
        <input
          type="checkbox"
          v-model="toggle"
          true-value="yes"
          false-value="no"
          >

          //当选中时
          vm.toggle === 'yes'
          //当没有选中时
          vm.toggle === 'no'

          注意：这里的true-value和false-value特性并不会影响输入控件的value特性，因为浏览器在提交表单时并不会包含未被选中的复选框。如果要确保表单中这两个值中的一个能够被提交，(比如"yes"或"no"),请换用单选按钮。

      单选按钮
        <input type="radio" v-model="pick" v-bind:value="a">

        //当选中时
        vm.pick === vm.a 

      选择框的选项
        <select v-model="selected">
          <!--内联对象字面量 -->
          <option v-bind:value="{ number:123 }"></option>
        </select>

        //当选中时
        typeof  vm.selected  // =》 'object'
        vm.selected.number   // => 123

      修饰符 
        .lazy  ；使用change事件进行同步
        .number ：自动将用户的输入值转换为数值类型
        .trim  :自动过滤用户输入的首尾空白字符

16.组件基础
    


