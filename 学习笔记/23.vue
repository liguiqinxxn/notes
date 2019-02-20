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

9.



