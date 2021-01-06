1.架构概览
  -模块
  -组件
  -模板、指令和数据绑定
  -服务与依赖注入
  -路由

2.模块NgModule
  每个 Angular 应用都至少有一个 NgModule 类，也就是根模块，它习惯上命名为 AppModule，并位于一个名叫 app.module.ts 的文件中。引导这个根模块就可以启动你的应用。

  虽然小型的应用可能只有一个 NgModule，不过大多数应用都会有很多特性模块。应用的根模块之所以叫根模块，是因为它可以包含任意深度的层次化子模块。

  -@NgMOdule元数据
    NgModule 是一个带有 @NgModule() 装饰器的类。@NgModule() 装饰器是一个函数，它接受一个元数据对象，该对象的属性用来描述这个模块。其中最重要的属性如下。

      --declarations（可声明对象表） —— 那些属于本 NgModule 的组件、指令、管道。

      --exports（导出表） —— 那些能在其它模块的组件模板中使用的可声明对象的子集。

      --imports（导入表） —— 那些导出了本模块中的组件模板所需的类的其它模块。

      --providers —— 本模块向全局服务中贡献的那些服务的创建器。 这些服务能被本应用中的任何部分使用。（你也可以在组件级别指定服务提供商，这通常是首选方式。）

      --bootstrap —— 应用的主视图，称为根组件。它是应用中所有其它视图的宿主。只有根模块才应该设置这个 bootstrap 属性。

      src/app/app.module.ts
        content_copy
        import { NgModule }      from '@angular/core';
        import { BrowserModule } from '@angular/platform-browser';
        @NgModule({
          imports:      [ BrowserModule ],
          providers:    [ Logger ],
          declarations: [ AppComponent ],
          exports:      [ AppComponent ],
          bootstrap:    [ AppComponent ]
        })
        export class AppModule { }

      *注意：把 AppComponent 放到 exports 中是为了演示导出的语法，这在本例子中实际上是没必要的。 根模块没有任何理由导出任何东西，因为其它模块永远不需要导入根模块。

 3.NgModule和组件
        NgModule为其中的组件提供了一个编译上下文环境。根模块总会有一个根组件，并在引导期间创建它。但是，任何模块都能包含任意数量的其它组件，这些组件可以通过路由器加载，也可以通过模板创建。那些属于这个NgModule的组件会共享同一个编译上下文环境。
        组件及其模板共同定义视图。组件还可以包含视图层次结构，它能让你定义任意复杂的屏幕区域，可以将其作为一个整体进行创建、修改和销毁。一个视图层次结构中可以混合使用由不同NgModule中组件定义的视图。这种情况很常见，特别是对一些UI库来说。

4.NgModule和JavaScript的模块
  NgModule系统与JavaScript(ES2015)用来管理JavaScript对象的模块系统不同，而且也没有直接关联。这两种模块系统不同但互补。

  JavaScript中，每个文件是一个模块，文件中定义的所有对象都从属于哪个模块。通过export关键字，模块可以把它的某些对象声明为公共的。其它JavaScript模块可以使用import语句来访问这些公共对象。
  import { NgModule } from '@angular/core';
  import { AppComponent } from './app.component';

  export class AppModule {}

5.Angular自带的库
  Angular会作为一组JavaScript模块进行加载，你可以把它们看成库模块。每个Angular库的名称都带有@angular前缀。使用npm包管理器安装Angular的库，并使用JavaScript的import语句导入其中的各个部分。

    从 @angular/core 库中导入Angular的Component装饰器

    import { Component } from '@angular/core';

    还可以使用 JavaScript 的导入语句从 Angular 库中导入 Angular 模块。 比如，下列代码从 platform-browser 库中导入了 BrowserModule 这个 NgModule。
    import { BrowserModule } from '@angular/platform-browser';

    在上面这个简单的根模块范例中，应用的根模块需要来自 BrowserModule 中的素材。要访问这些素材，就要把它加入 @NgModule 元数据的 imports 中，代码如下：
    imports:      [ BrowserModule ],

6.组件 
  组件控制屏幕上被称为视图的一小片区域。比如，教程中的下列视图都是由一个个组件所定义和控制的：
    -带有导航链接的应用根组件。
    -英雄列表。
    -英雄编辑器。
    在类中定义组件的应用逻辑，为视图提供支持。组件通过一些由属性和方法组成的API与视图交互。
    当用户在应用中穿行时，Angular就会创建、更新、销毁一些组件。你的应用可以通过一些可选的生命周期钩子（比如ngOnInit()）来在每个特定的时机采取行动。

7.组件的元数据
  @Component 装饰器会指出紧随其后的那个类是个组件类，并为其指定元数据。
  src/app/hero-list.component.ts (metadata)
    content_copy
    @Component({
      selector:    'app-hero-list',
      templateUrl: './hero-list.component.html',
      providers:  [ HeroService ]
    })
    export class HeroListComponent implements OnInit {
    /* . . . */
    }

    这个例子展示了一些最常用的 @Component 配置选项：

      selector：是一个 CSS 选择器，它会告诉 Angular，一旦在模板 HTML 中找到了这个选择器对应的标签，就创建并插入该组件的一个实例。 比如，如果应用的 HTML 中包含 <app-hero-list></app-hero-list>，Angular 就会在这些标签中插入一个 HeroListComponent 实例的视图。

      templateUrl：该组件的 HTML 模板文件相对于这个组件文件的地址。 另外，你还可以用 template 属性的值来提供内联的 HTML 模板。 这个模板定义了该组件的宿主视图。

      providers：当前组件所需的服务提供商的一个数组。在这个例子中，它告诉 Angular 该如何提供一个 HeroService 实例，以获取要显示的英雄列表。

8.模板与视图
  你要通过组件的配套模板来定义其视图。模板就是一种HTML，它会告诉Angular如何渲染该组件。
  视图通常会分层次进行组织，让你能以UI分区或页面为单位进行修改、显示或隐藏。与组件直接关联的模板会自定义该组件的宿主视图。该组件还可以定义一个带层次结构的视图，它包含一些内嵌的视图作为其它组件的宿主。
  带层次结构的视图可以包含同一模块（NgModule）中组件的视图。也可以(而且经常会)包含其它模块中定义的组件的视图。

9.模板语法
  模板很像标准的HTML，但是它还包含Angular的模板语法，这些模板语法可以根据你的应用逻辑、应用状态和DOM数据来修改这些HTML。你的模板可以使用数据绑定来协调应用和DOM中的数据，使用管道在显示出来之前对其进行转换，使用指令来把程序逻辑应用到要显示的内容上。
  src/app/hero-list.component.html
    
      <h2>Hero List</h2>

      <p><i>Pick a hero from the list</i></p>
      <ul>
        <li *ngFor="let hero of heroes" (click)="selectHero(hero)">
          {{hero.name}}
        </li>
      </ul>

      <app-hero-detail *ngIf="selectedHero" [hero]="selectedHero"></app-hero-detail>
      这个模板使用了典型的 HTML 元素，比如 <h2> 和 <p>，还包括一些 Angular 的模板语法元素，如 *ngFor，{{hero.name}}，click、[hero] 和 <app-hero-detail>。这些模板语法元素告诉 Angular 该如何根据程序逻辑和数据在屏幕上渲染 HTML。

      *ngFor 指令告诉 Angular 在一个列表上进行迭代。

      {{hero.name}}、(click) 和 [hero] 把程序数据绑定到及绑定回 DOM，以响应用户的输入。更多内容参见稍后的数据绑定部分。

      模板中的 <app-hero-detail> 标签是一个代表新组件 HeroDetailComponent 的元素。 HeroDetailComponent（代码略）定义了 HeroListComponent 的英雄详情子视图。 注意观察像这样的自定义组件是如何与原生 HTML 元素无缝的混合在一起的。

10.数据绑定
  如果没有框架，你就要自己负责把数据值推送到 HTML 控件中，并把来自用户的响应转换成动作和对值的更新。 手动写这种数据推拉逻辑会很枯燥、容易出错，难以阅读 —— 用过 jQuery 的程序员一定深有体会。

  Angular 支持双向数据绑定，这是一种对模板中的各个部件与组件中的各个部件进行协调的机制。 往模板 HTML 中添加绑定标记可以告诉 Angular 该如何连接它们。

  下图显示了数据绑定标记的四种形式。每种形式都有一个方向 —— 从组件到 DOM、从 DOM 到组件或双向。
  这个来自 HeroListComponent 模板中的例子使用了其中的三种形式：

    src/app/hero-list.component.html (binding)

    <li>{{hero.name}}</li>
    <app-hero-detail [hero]="selectedHero"></app-hero-detail>
    <li (click)="selectHero(hero)"></li>

    -{{hero.name}}插值表达式在 <li> 标签中显示组件的 hero.name 属性的值。

    -[hero]属性绑定把父组件 HeroListComponent 的 selectedHero 的值传到子组件 HeroDetailComponent 的 hero 属性中。

    -当用户点击某个英雄的名字时，(click) 事件绑定会调用组件的 selectHero 方法。

    双向数据绑定（主要用于模板驱动表单中），它会把属性绑定和事件绑定组合成一种单独的写法。下面这个来自 HeroDetailComponent 模板中的例子通过 ngModel 指令使用了双向数据绑定：

    src/app/hero-detail.component.html (ngModel)

    <input [(ngModel)]="hero.name">
    在双向绑定中，数据属性值通过属性绑定从组件流到输入框。用户的修改通过事件绑定流回组件，把属性值设置为最新的值。

    Angular 在每个 JavaScript 事件循环中处理所有的数据绑定，它会从组件树的根部开始，递归处理全部子组件。

    数据绑定在模板及其组件之间的通讯中扮演了非常重要的角色，它对于父组件和子组件之间的通讯也同样重要。

11.管道
      Angular 的管道可以让你在模板中声明显示值的转换逻辑。 带有 @Pipe 装饰器的类中会定义一个转换函数，用来把输入值转换成供视图显示用的输出值。

      Angular 自带了很多管道，比如 date 管道和 currency 管道，完整的列表参见 Pipes API 列表。你也可以自己定义一些新管道。

      要在 HTML 模板中指定值的转换方式，请使用 管道操作符 (|)。

      {{interpolated_value | pipe_name}}

      你可以把管道串联起来，把一个管道函数的输出送给另一个管道函数进行转换。 管道还能接收一些参数，来控制它该如何进行转换。比如，你可以把要使用的日期格式传给 date 管道：

      <!-- Default format: output 'Jun 15, 2015'-->

       <p>Today is {{today | date}}</p>

      <!-- fullDate format: output 'Monday, June 15, 2015'-->

      <p>The date is {{today | date:'fullDate'}}</p>

       <!-- shortTime format: output '9:43 AM'-->

       <p>The time is {{today | date:'shortTime'}}</p>

12.指令 
    Angular 的模板是动态的。当 Angular 渲染它们的时候，会根据指令给出的指示对 DOM 进行转换。 指令就是一个带有 @Directive() 装饰器的类。

    组件从技术角度上说就是一个指令，但是由于组件对 Angular 应用来说非常独特、非常重要，因此 Angular 专门定义了 @Component() 装饰器，它使用一些面向模板的特性扩展了 @Directive() 装饰器。

    除组件外，还有两种指令：结构型指令和属性型指令。 Angular 本身定义了一系列这两种类型的指令，你也可以使用 @Directive() 装饰器来定义自己的指令。

    像组件一样，指令的元数据把它所装饰的指令类和一个 selector 关联起来，selector 用来把该指令插入到 HTML 中。 在模板中，指令通常作为属性出现在元素标签上，可能仅仅作为名字出现，也可能作为赋值目标或绑定目标出现。

13.结构型指令
    结构型指令通过添加、移除或替换 DOM 元素来修改布局。 这个范例模板使用了两个内置的结构型指令来为要渲染的视图添加程序逻辑：

    src/app/hero-list.component.html (structural)

    <li *ngFor="let hero of heroes"></li>
    <app-hero-detail *ngIf="selectedHero"></app-hero-detail>

    *ngFor 是一个迭代器，它要求 Angular 为 heroes 列表中的每个英雄渲染出一个 <li>。

    *ngIf 是个条件语句，只有当选中的英雄存在时，它才会包含 HeroDetail 组件。

14.属性型指令
    属性型指令会修改现有元素的外观或行为。 在模板中，它们看起来就像普通的 HTML 属性一样，因此得名“属性型指令”。

    ngModel 指令就是属性型指令的一个例子，它实现了双向数据绑定。 ngModel 修改现有元素（一般是 <input>）的行为：设置其显示属性值，并响应 change 事件。
    src/app/hero-detail.component.html (ngModel)

    <input [(ngModel)]="hero.name">

    Angular 还有很多预定义指令既不修改布局结构（比如 ngSwitch），也不修改 DOM 元素和组件的样子（比如 ngStyle 和 ngClass）。

15.服务与依赖注入
    服务是一个广义的概念，它包括应用所需的任何值、函数或特性。狭义的服务是一个明确定义了用途的类。它应该做一些具体的事，并做好。

    Angular 把组件和服务区分开，以提高模块性和复用性。 通过把组件中和视图有关的功能与其他类型的处理分离开，你可以让组件类更加精简、高效。

    理想情况下，组件的工作只管用户体验，而不用顾及其它。 它应该提供用于数据绑定的属性和方法，以便作为视图（由模板渲染）和应用逻辑（通常包含一些模型的概念）的中介者。

    组件应该把诸如从服务器获取数据、验证用户输入或直接往控制台中写日志等工作委托给各种服务。通过把各种处理任务定义到可注入的服务类中，你可以让它被任何组件使用。 通过在不同的环境中注入同一种服务的不同提供商，你还可以让你的应用更具适应性。

    Angular 不会强迫你遵循这些原则。Angular 只会通过依赖注入来帮你更容易地将应用逻辑分解为服务，并让这些服务可用于各个组件中。

16.服务范例
  下面是一个服务类的范例，用于把日志记录到浏览器的控制台：

    src/app/logger.service.ts (class)

    export class Logger {
      log(msg: any)   { console.log(msg); }
      error(msg: any) { console.error(msg); }
      warn(msg: any)  { console.warn(msg); }
    }

    服务也可以依赖其它服务。比如，这里的 HeroService 就依赖于 Logger 服务，它还用 BackendService 来获取英雄数据。BackendService 还可能再转而依赖 HttpClient 服务来从服务器异步获取英雄列表。

    src/app/hero.service.ts (class)

    export class HeroService {
      private heroes: Hero[] = [];

      constructor(
        private backend: BackendService,
        private logger: Logger) { }

      getHeroes() {
        this.backend.getAll(Hero).then( (heroes: Hero[]) => {
          this.logger.log(`Fetched ${heroes.length} heroes.`);
          this.heroes.push(...heroes); // fill cache
        });
        return this.heroes;
      }
    }

17.依赖注入（dependency injection）
    DI 被融入 Angular 框架中，用于在任何地方给新建的组件提供服务或所需的其它东西。 组件是服务的消费者，也就是说，你可以把一个服务注入到组件中，让组件类得以访问该服务类。

    在 Angular 中，要把一个类定义为服务，就要用 @Injectable() 装饰器来提供元数据，以便让 Angular 可以把它作为依赖注入到组件中。 同样，也要使用 @Injectable() 装饰器来表明一个组件或其它类（比如另一个服务、管道或 NgModule）拥有一个依赖。

    注入器是主要的机制。Angular 会在启动过程中为你创建全应用级注入器以及所需的其它注入器。你不用自己创建注入器。

    该注入器会创建依赖、维护一个容器来管理这些依赖，并尽可能复用它们。

    提供商是一个对象，用来告诉注入器应该如何获取或创建依赖。

    你的应用中所需的任何依赖，都必须使用该应用的注入器来注册一个提供商，以便注入器可以使用这个提供商来创建新实例。 对于服务，该提供商通常就是服务类本身。

    当 Angular 创建组件类的新实例时，它会通过查看该组件类的构造函数，来决定该组件依赖哪些服务或其它依赖项。 比如 HeroListComponent 的构造函数中需要 HeroService：

    src/app/hero-list.component.ts (constructor)

    constructor(private service: HeroService) { }
    当 Angular 发现某个组件依赖某个服务时，它会首先检查是否该注入器中已经有了那个服务的任何现有实例。如果所请求的服务尚不存在，注入器就会使用以前注册的服务提供商来制作一个，并把它加入注入器中，然后把该服务返回给 Angular。

    当所有请求的服务已解析并返回时，Angular 可以用这些服务实例为参数，调用该组件的构造函数。

18.提供服务
    对于要用到的任何服务，你必须至少注册一个提供商。服务可以在自己的元数据中把自己注册为提供商，这样可以让自己随处可用。或者，你也可以为特定的模块或组件注册提供商。要注册提供商，就要在服务的 @Injectable() 装饰器中提供它的元数据，或者在@NgModule() 或 @Component() 的元数据中。

    -默认情况下，Angular CLI 的 ng generate service 命令会在 @Injectable() 装饰器中提供元数据来把它注册到根注入器中。本教程就用这种方法注册了 HeroService 的提供商：

    @Injectable({
      providedIn: 'root',
    })

    -当你在根一级提供服务时，Angular 会为 HeroService 创建一个单一的共享实例，并且把它注入到任何想要它的类中。这种在 @Injectable 元数据中注册提供商的方式还让 Angular 能够通过移除那些从未被用过的服务来优化大小。

        当你使用特定的 NgModule 注册提供商时，该服务的同一个实例将会对该 NgModule 中的所有组件可用。要想在这一层注册，请用 @NgModule() 装饰器中的 providers 属性：
        @NgModule({
          providers: [
           BackendService,
           Logger
         ],
         ...
        })

        当你在组件级注册提供商时，你会为该组件的每一个新实例提供该服务的一个新实例。 要在组件级注册，就要在 @Component() 元数据的 providers 属性中注册服务提供商。

        src/app/hero-list.component.ts (component providers)
      
        @Component({
          selector:    'app-hero-list',
          templateUrl: './hero-list.component.html',
          providers:  [ HeroService ]
        })

19.响应式编程工具
    生命周期钩子：通过实现生命周期钩子接口，可以窃听组件生命周期中的一些关键时刻 —— 从创建到销毁。

    可观察对象（Observable）和事件处理：如何在组件和服务中使用可观察对象来发布和订阅任意类型的消息，比如用户交互事件和异步操作结果。

20.客户端与服务器的交互工具
      HTTP：用 HTTP 客户端与服务器通讯，以获取数据、保存数据或执行服务端动作。

      服务端渲染：Angular Universal 会通过服务端渲染（SSR）技术在服务器上生成静态的应用页面。 这让你可以在服务器上运行 Angular 应用，以提升性能并在手机或低功耗设备上快速显示首屏，并为 Web 爬虫提供帮助（SEO）。

      Service Worker：借助 Service Worker 来减轻对网络的依赖，你可以显著提升用户体验。

21.特定领域的库
      动画：使用 Angular 的动画库，你可以让组件支持动画行为，而不用深入了解动画技术或 CSS。

      Forms：通过基于 HTML 的验证和脏数据检查，来支持复杂的数据输入场景。

22.为开发周期提供支持
      编译：Angular 为开发环境提供了 JIT（即时）编译方式，为生产环境提供了 AOT（预先）编译方式。

      测试平台：对应用的各个部件运行单元测试，让它们好像在和 Angular 框架交互一样。

      国际化：Angular 的国际化工具可以帮助你让应用可用于多种语言中。

      安全指南：学习 Angular 对常见 Web 应用的弱点和工具（比如跨站脚本攻击）提供的内置防护措施。

23.环境搭建、构建与开发配置
      CLI 命令参考手册：Angular CLI 是一个命令行工具，你可以使用它来创建项目、生成应用及库代码，还能执行很多开发任务，比如测试、打包和发布。

      工作区与文件结构：理解 Angular 工作区与项目文件夹的结构。

      npm 包：Angular 框架、Angular CLI 和 Angular 应用中用到的组件都是用 npm 打包的，并通过 npm 注册服务器进行发布。Angular CLI 会创建一个默认的 package.json 文件，它会指定一组初始的包，它们可以一起使用，共同支持很多常见的应用场景。

      TypeScript 配置：TypeScript 是 Angular 应用开发的主要语言。

      浏览器支持：学习如何让你的应用能和各种浏览器兼容。

      构建与运行：学习为项目定义不同的构建和代理服务器设置的配置方式，比如开发、预生产和生产。

      部署：学习把你的 Angular 应用发布到远端服务器的技巧。
