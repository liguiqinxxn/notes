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

13.条件渲染
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
    