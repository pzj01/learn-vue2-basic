# Vue2.0
* MVVM模型(Model View ViewModel)
    - Model(模型):对应data中的数据,也可以指一般的JS对象
    - View(视图):对应Vue模板,也可以指DOM
    - ViewModel(视图模型):对应Vue实例
* Vue细节
    - Vue实例和容器的关系是一对一,一个容器只能被一个实例接管,相同的一个实例只能查找第一个符合添加的容器
    - 当data发生改变时,Vue会重新解析模板,使用methods的方法会重新调用,如果是computed属性会检查现在的所依赖的数据是否发生变化,没变的话就直接使用缓存,变了的话就重新计算
    - 给style标签加上scoped(局部)就会给元素随机生成属性,并使用属性选择器,这样就可以使同名的选择器不会发生冲突
* 模板
    - 插值语法:可以插入实例的data和JS表达式
        - 可以使用Vue实例中的方法和属性,以及它的原型上的方法和属性,最终data也会添加到Vue实例中
        - 功能:用于解析标签体内容
        - 语法:{{data|express}}
    - 指令语法:就是Vue的指令
        - 功能:用于解析标签(标签属性,标签体内容,绑定事件)
        - v-bind(单向数据绑定) 
            - 数据只能从data流向页面
            - 语法:v-bind:attribute = "data" 简写 :attribute = "data"
        - v-model(双向数据绑定) 
            - 数据不仅能从data流向页面,还能从页面流向data
            - v-model指令只能应用在表单类元素上
            - 语法:v-model:attribute = "data" 简写 v-model.修饰符 = "data"
            - 修饰符:
                1. .number:将内容中的字符串数字转为number类型,建议和类型为number的输入框使用
                2. .lazy:在表单控件失去焦点的时候再获取数据并更新,建议配合textarea标签使用
                3. trim:去除内容两边的所有空格,但是不会去除中间的,建议使用正则表达式替换空格
        - v-on:xxx 或者 @xxx 事件管理
            - 语法:v-on:事件类型="方法/方法(参数)" 或者 @事件类型="方法/方法(参数)"
        - v-text(文本渲染) 
            - 可以向所在节点渲染文本内容
            - 与插值语法的区别:v-text会替换节点中的所有文本内容,插值语法则不会
            - 语法:v-text="data"
        - v-html(HTML渲染)
            - 向指定节点中渲染包含html结构的内容
            - 语法:v-html="data|html"
            - 与插值语法的区别:
                1. v-htm1会替换掉节点中所有的内容
                2. v-html可以识别html结构
            - 严重注意：v-html有安全性问题！！！！
                1. 在网站上动态渲染任意HTML是非常危险的，容易导致XSS(跨站脚本攻击)攻击。
                2. 一定要在可信的内容上使用v-htm1,永不要用在用户提交的内容上！
            - 可以通过所在htmlOnly设置为只允许http请求读取
        - v-cloak
            - 本质是一个特殊属性,因为它没有值,Vue实例创建完毕并接管容器后,会删掉v-c1oak属性。
            - 使用css配合v-c1oak可以解决网速慢时页面展示出未解析模板的问题。 
            - 语法:v-cloak
        - v-once:
            - v-once所在节点在初次动态渲染后,就视为静态内容了。
            - 以后数据的改变不会引起v-once所在结构的更新,可以用于优化性能。
            - 语法:v-once
        - v-pre
            - 跳过这个元素和它的子元素的编译过程
            - 跳过大量没有指令和插值语法的节点会加快编译。
            - 语法:v-pre
    - 事件修饰符
        1. .prevent:阻止默认事件（常用）；
        2. .stop:阻止事件冒泡（常用）：
        3. .once:事件只触发一次（常用）
        4. .capture:使用事件的捕获模式：
        5. .se1f:只有event.target是当前操作的元素是才触发事件：
        6. .native:把事件当做JS原生事件调用
        7. .passive:事件的默认行为立即执行，无需等待事件回调执行完毕：
        - 如果要有多个需求可以链式调用@xxx.stop.prevent 是按照书写顺序调用(包括键盘事件,不过只能两个键)
        - 键盘事件
            1. Vue中常用的按键别名：
                回车=>enter
                删除=>delete(捕获“删除”和“退格”键)
                退出=>esc
                空格=>space
                换行=>tab(必须配合keydown使用)
                上=>up
                下=>down
                左=>left
                右=>right
            2. Vue未提供别名的按键，可以使用按键原始的key值去绑定，但注意要转为kebab-case(短横线命名)
            3. 系统修饰键（用法特殊）：ctrl、alt、shift、meta
                (1).配合kyup使用：按下修饰键的同时，再按下其他键，随后释放其他键，事件才被触发。
                (2).配合keydown使用：正常触发事件。
            4. 也可以使用keyCode去指定具体的按键（不推荐）
            5. Vue.config.keyCodes.自定义键名=键码，可以去定制按键别名
* config(配置):
    - productionTip(生产提示)
        - 语法:Vue.config.productionTip = true(默认值);
    - configOptions(配置对象)
        el(元素):指定当前Vue实例为哪个容器服务,值通常为css选择器字符串
        - 语法:el:string | Dom;
        data(数据):该实例使用的数据
        - 使用组件是必须使用函数式写法
        - data的属性值必须是原始数据类型
        - 语法:
            1. 对象式:data:{属性名:属性值}
            2. 函数式:data() {//不能写箭头函数
                    可以做一个处理
                return {
                    数据...
                }
            }
        - methods(方法):事件回调器,存储需要使用的函数
            - 必须是一个对象,然后存放方法,方法不能使用箭头函数,必须使用普通函数,不然会丢失this
            - methods配置的方法,this指向Vue实例对象或者组件实例对象
            - methods中的方法最终都会挂载到Vue实例或者组件实例上
        - mixin(混入)
            - 选项接收一个混入对象的数组。这些混入对象可以像正常的实例对象一样包含实例选项,这些选项将会被合并到最终的选项中
            - Mixin 钩子按照传入顺序依次调用，并在调用组件自身的钩子之前被调用
            - 如果mixin和data起冲突,则以data的数据为准
            - 混入分为:
                1. 局部混入
                    语法: mixin:[混入项,...]
                2. 全局混入
                    语法: Vue.mixin(混入项,混入项);
* Vue实例的方法
    - $mount() 
        - 绑定一个容器
        - 语法:vm.$mount(string | Dom);
    - $set()
        - 向响应式对象中添加一个 property，并确保这个新 property 同样是响应式的，且触发视图更新
        - 注意对象不能是 Vue 实例，或者 Vue 实例的根数据对象。
        - 语法: Vue.set(target,key,value); 或者 vm.$set();
    - $destroy()
        - 完全销毁一个实例。清理它与其它实例的连接，解绑它的全部指令及自定义事件监听器。
        - 触发 beforeDestroy 和 destroyed 的钩子。
        - 在大多数场景中你不应该调用这个方法。最好使用 v-if 和 v-for 指令以数据驱动的方式控制子组件的生命周期。
        - 语法: vm.$destroy
* Vue的属性
    - ref 
        - 被用来给元素或子组件注册引用信息。
        - 引用信息将会注册在父组件的 $refs 对象上。
        - 如果在普通的 DOM 元素上使用，引用指向的就是 DOM 元素；如果用在子组件上，引用就指向组件实例
        - 语法: ref="名字"
* Vue的数据代理
    1. Vue中的数据代理：通过vm对象来代理data对象中属性的操作（读/写）
    2. Vue中数据代理的好处：更加方便的操作data中的数据
    3. 基本原理：通过Object.defineProperty()把data对象中所有属性添加到vm上。
        为每一个添加到vm上的属性，都指定一个getter/setter。
        在getter,/setter内部去操作（读/写）data中对应的属性。
* Vue的computed(计算属性)
    - 需要通过大量计算的值推荐使用计算属性,计算属性和methods的不同是基于它们的响应式依赖进行缓存的,只在相关响应式依赖发生改变时它们才会重新求值。这就意味着只要数据还没有发生改变，多次访问计算属性会立即返回之前的计算结果，而不必再次执行函数
    - 与method相比,计算属性内部有缓存机制,效率更高,调试方便
    - tips:不能使用箭头函数
    - 计算属性在什么时候调用:
        1. 初次读取调用 
        2. 所依赖的数据数据发生变化时调用
    - 关于计算属性
        1. 计算属性适合用在单个属性的计算；
        2. 计算属性只能在单个vue实例中使用；
        3. 计算属性不能接收参数，只能使用data中定义的变量进行计算；
        4. 计算属性有缓存机制，可减少调用次数；
        5. 计算属性相当于定义一个变量
    - 语法:
        computed:{
            属性名:{
                //getter 读取属性时自动调用
                get() {
                    //一些计算
                    return 值 //该值会作为这个属性的值
                },
                //setter 修改属性自动调用
                set(value) {
                    //一些判断
                    this.属性 = value;
                }
            },
            //或者 默认为该属性的get方法
            属性名() {
                //一些计算
                return 值 //该值会作为这个属性的值
            }
        },
* watch(侦听器)
    - 当需要在数据变化时执行异步或开销较大的操作时，这个方式是最有用的。
    1. 当被监视的属性变化时，回调函数自动调用，进行相关操作
    2. 监视的属性必须存在，才能进行监视！！
    3. 侦听器可以监听,data和computed
    4. 监视的两种写法：
        (1).new Vuel时传入watch配置,不需要配置的时候可以简写,把配置对象改为回调方法
        (2).通过vm.$watch监视,,不需要配置的时候可以简写,把配置对象改为回调方法
    - 深度监视
        (1).Vue中的watch默认不监测引用类型数据内部值的改变（一层）。
        (2).配置deep:true;watch就可以监测引用类型数据内部值改变（多层）。
        备注：
        (1).Vue自身可以监测data内部所有数据类型的改变，但Vue提供的watch默认不可以！
        (2).使用watch时根据数据的具体结构，决定是否采用深度监视。
* computed和watch之间的区别：
    1. computedi能完成的功能，watch都可以完成(但是更麻烦)。
    2. watch能完成的功能，computed不一定能完成，例如：watch可以进行异步操作。
* class和style绑定
    - 绑定class类名
        1. 字符串写法:适用于样式的类名不确定,需要动态指定
            - 语法: :class="data|表达式|字符串类名"
        2. 数组写法:适用于样式的类名不确定以及数量也不确定,需要动态指定
            - 语法: :class="数组|[data,data]|['类名','类名']"
            - 数组:js中写法['类名','类名']
        3. 对象写法:适用于样式的类名确定以及数量确定,但是否应用不确定,需要动态指定
            - 语法: :class="对象|{类名:变量|布尔值}|"
            - 对象:js中写法{类名:布尔值}
    - 绑定内联style
        1. 对象写法
            - 语法: :style="对象|{属性名(必须使用小驼峰命名法):"属性值"}"
            - 对象:js中写法{属性名(必须使用小驼峰命名法):"属性值"}
        2. 数组写法
            - 语法: :style="数组|[{属性名(必须使用小驼峰命名法):"属性值"}]"
            - 数组:js中写法[内联对象,内联对象]
* 条件渲染
    - v-show
        - 通过display属性来控制显示或者不显示,推荐切换频率较高的情况使用,因为这是修改display属性,所以性能消耗较少
        - 语法:v-show="变量|表达式|布尔值"
    - v-if|v-else-if|v-else
        - 通过操控DOM节点来控制添加或者删除,推荐切换频率不高的情况使用,因为添加和删除dom节点更耗费性能
        - v-else-if和JS中的一样,只要if达成就不会去执行其他的else-if,else是所以条件都不通过的是展示
        - v-if和v-else-if以及v-else,的HTML结构必须是连在一起的,如果中间插入一个元素,则该元素后面的判断不生效
        - 语法:v-if|v-else-if="变量|表达式|布尔值"  v-else 
    - 使用v-if的时,元素可能无法获取到,因为DOM元素被删除,而使用v-show一定可以获取到,因为只是修改了display属性
* 列表渲染
    - v-for
        - 使用场景:用于展示列表数据
        - 可遍历:数组,对象,字符串,或者指定次数的数据
        - in 和 of 的效果一样,只不过of更符合JS语法,在JS中for...in代表遍历键,for...of代表遍历值,推荐数组使用of,对象使用in
        - 语法: v-for="(value,index) in|of items(遍历源数据)"
    - :key
        - 为每个遍历设置唯一标识符,在更新和替换数据的时候用于查找对应的数据位置
        - 语法: :key="标识符"
        - key的作用:
            - 在虚拟DOM中起唯一标识符的作用
            - 如果数据发生变化时,会根据数据生成新的虚拟DOM,然后去和上一次虚拟DOM进行diff算法比较差异
                1. 先会比较key的值
                    1. key如果一样就比较元素节点和文本节点是否一样,如果不一样就生成新的虚拟DOM,然后替换之前的虚拟DOM,
                    如果元素节点和文本节点一样,就会直接使用之前的虚拟DOM
                    2. key如果不一样,就直接生成新的虚拟DOM,然后渲染到界面
            - 用index作为key可能会引发的问题:
                1. 若对数据进行：逆序添加、逆序删除等破坏顺序操作：
                    会产生没有必要的真实DOM更新 ==> 界面效果没问题，但效率低。
                2. 如果结构中还包含输入类的DOM:
                    会产生错误DOM更新 ==> 界面有问题。
                3. 如果不指定key,Vue默认使用index作为key。
            - 开发中如何选择key?
                1. 最好使用每条数据的唯一标识作为key,比如id、手机号、身份证号、学号等唯一值。
                2. 如果不存在对数据的逆序添加、逆序刚除等破坏顺序操作，仅用于渲染列表用于展示，
                    使用index作为key是没有问题的。
* filters(过滤器)
    - 不过在Vue3.0中移除,推荐使用计算属性代替,使用计算属性返回一个函数,然后接受参数进行计算
    - 过滤器分为局部和全局
    - 关于过滤器
        1. 过滤器适合多个同样计算方法的属性的计算
        2. 过滤器可以定义为全局过滤器，在多个vue实例中使用
        3. 过滤器可以接收多个参数进行计算,过滤器的前一个变量的值会作为第一个参数传入
        4. 过滤器没有缓存机制，每调用一次都会计算一次
        5. 过滤器相当于定义一个特殊的方法       
        6. 过滤器可以链式调用
    - 语法: {{data | 过滤器 | 过滤器 | ...}} 或者 :属性="data | 过滤器 | ..."
* 自定义指令
    - 我们可以自定义一些指令,实现一些其他的功能
    - 自定义指令分为局部和全局
        - 局部定义:在Vue实例中的directives中定义
        - 全局定义:使用Vue.directive("指令名",funcion|object)
        - 在定义指令时不要使用大写字母,多个单词可以使用-分隔(Vue官方推荐写法),但是directive对象中的方法名就使用字符串"xxx-yyy",或者使用小驼峰命名法也行(不推荐使用),不过模板上要在大写字母前加-,而且大写字母要变小写,它们统一在模板使用v-xxx-yyy
    - 函数式自定义指令在什么时候调用? 
        1. 在指令和元素成功绑定初始化时调用(bind) 
        2. 指令所在模板重新解析时调用(update)
    - 对象式自定义指令在什么时候调用? 
        - 自定义阶段调用
        - 可以设置为以下几种阶段(钩子函数):
            1. bind:只调用一次,指令第一次绑定到元素时调用。在这里可以进行一次性的初始化设置
            2. inserted:指令所在元素被插入页面时调用
            3. update:指令所在模板被重新解析时调用
            4. componentUpdated:指令所在组件的 VNode(虚拟DOM) 及其子 VNode 全部更新后调用。
            5. unbind:只调用一次,指令与元素解绑时调用。
            - 关于钩子函数的参数
                - el:指令所绑定的元素,可以用来直接操作DOM元素。
                - binding:一个绑定元素的信息对象,以下是该对象的property
                    - name:指令名,不包括 v- 前缀。
                    - value:指令的绑定值,例如：v-my-directive="1 + 1" 中,绑定值为 2。
                    - oldValue:指令绑定的前一个值,仅在 update 和 componentUpdated 钩子中可用。无论值是否改变都可用。
                    - expression:字符串形式的指令表达式。例如 v-my-directive="1 + 1" 中,表达式为 "1 + 1"。
                    - arg:传给指令的参数,可选。例如 v-my-directive:foo 中，参数为 "foo"。
                    - modifiers(修饰符):一个包含修饰符的对象。例如：v-my-directive.foo.bar 中，修饰符对象为 { foo: true, bar: true }。
                    - vnode:Vue 编译生成的虚拟节点。
                    - oldVnode:上一个虚拟节点,仅在 update 和 componentUpdated 钩子中可用。
    - 自定义指令的this指向window全局对象
    - 自定义指令有两种写法:
        1. 函数式:
            - 特点:写起来简单
            - 语法:
                指令名(element,binding) {
                    //element代表当前使用指令的DOM元素
                    //binding表示与DOM元素的绑定对象,它里面的value属性是指令绑定表达式的值
                    //指令的操作...
                }
        2. 对象式
            - 特点:功能全面,细节
            - 语法: 
                指令名:{//接收的参数和函数式一样
                    bind(el,bind) {
                        //指令的操作...
                    },
                    inserted() {
                        //指令的操作...
                    },
                    update() {
                        //指令的操作...
                    }
                }
    - 注意事项:在HTML5中规定属性名不能使用大写,所以自定义指令出现大写字母会报错
* 生命周期(lifeCycle)钩子
    - 又称生命周期函数,生命周期回调函数
    - 所有生命周期钩子的 this 上下文将自动绑定至Vue实例或组件实例对象，因此你可以访问 data、computed 和 methods。这意味着你不应该使用箭头函数来定义一个生命周期方法,因为箭头函数绑定了父级上下文,所以 this 不会指向预期的组件实例
    - 生命周期的阶段
        1. beforeCreate(创建之前):
            - 在实例初始化之后,进行数据侦听和事件/侦听器的配置之前同步调用
            - 在此阶段无法通过Vue实例访问data数据和methods方法
        2. created(创建完毕):
            - 在实例创建完成后被立即同步调用。
            - 在这一步中，实例已完成对选项的处理，意味着以下内容已被配置完毕:
                - 数据侦听、计算属性、方法、事件/侦听器的回调函数
                - 然而,挂载阶段还没开始,且 $el的property 目前尚不可用。
            - 在此阶段可以通过Vue实例访问data数据和methods方法
        3. beforeMount(挂载之前):
            - 在挂载开始之前被调用,相关的 render 函数首次被调用。
            - 在此时页面呈现的是未被Vue渲染的DOM结构
            - 操作DOM无效,因为会在挂载时被Vue生成的DOM所替换
            - 该钩子在服务器端渲染期间不被调用。
        4. mounted(挂载完毕)
            - Vue第一次完成模板的解析并把真实DOM挂载到页面后调用
            - 在之后的模板重新解析更新之后也不会调用,可以理解为初始化挂载之后调用
            - 在此阶段操作DOM均有效,至此初始化结束,一般在此阶段进行:
                1. 开启定时器
                2. 发送网络请求
                3. 订阅消息
                4. 绑定自定义事件
        5. beforeUpdate(更新之前):
            - 在数据发生改变后,DOM 被更新之前被调用。
            - 这里适合在现有 DOM 将要被更新之前访问它,比如移除手动添加的事件监听器。
            - 在更新之前,数据是最新的,但是页面还是旧的,即:页面和数据尚未保持同步
            - 该钩子在服务器端渲染期间不被调用，因为只有初次渲染会在服务器端进行。
        6. update(更新时):
            - 在数据更改导致的虚拟 DOM 重新渲染和更新完毕之后被调用。
            - 该钩子在服务器端渲染期间不被调用。
        7. beforeDestroy(销毁之前):
            - 实例销毁之前调用。在这一步,实例仍然完全可用。Vue实例中所有的:data,methods,directive等等,都处于可用状态
            - 而且对数据的修改仍然有效,但是不会再触发页面的更新了
            - 马上要执行销毁过程,一般在此阶段执行:关闭定时器,取消订阅消息,解绑自定义事件等收尾操作
            - 该钩子在服务器端渲染期间不被调用。
        8. destroyed(销毁完毕):
            - 实例销毁后调用。
            - 该钩子被调用后,对应 Vue 实例的所有指令都被解绑,所有的事件监听器被移除,所有的子实例也都被销毁。
            - 该钩子在服务器端渲染期间不被调用。
            - 销毁后自定义事件失效,但是原生的DOM事件依然有效
        - keep-alive的专属生命周期钩子:
            - 配合路由组件使用
            1. activated(激活):
                - 在缓存组件激活时调用
            3. deactivated(失活):
                - 在缓存组件失活时调用
* 组件
    - 实现应用中局部功能的代码和资源的集合,类似一个微型的Vue实例   
    - 组件的优势:
        1. 方便维护
        2. 代码复用性高
        3. 运行效率高     
    - 组件的分类:
        1. 非单文件组件
            描述:一个文件中包含n个组件
        2. 单文件组件
            描述:一个文件中只包含一个组件,例如.vue的文件就是一个组件
    - 关于组件的一些细节:
        - 组件一定不要写el配置项,因为最终所有组件都要被一个vm所管理,由vm决定为服务于哪个容器
        - 组件的配置对象中的data配置项,必须写成函数的形式,而且要返回一个对象,组件使用的数据在这个对象里,因为函数每次调用返回的对象的内存地址但是不一样的,所以对象的值不会互相干扰
        - 生成标签快捷键:标签名 + > + Tab键|enter键 
        - 注册组件是不能使用HTML已经拥有的标签名作为组件的标签名,HTML不区分大小写,<h1> === <H1>
    - 组件的配置项:
        - name:指定组件在开发者工具中呈现的名字。
        - data:组件使用的数据
        - methods:组件使用的方法
        - watch:侦听器
        - computed:计算属性
        - filters:过滤器
        - template:组件的HTML模板
        - directives:组件的自定义指令
    - 创建组件:
        - 语法:
            - const 组件名 = Vue.extend(options); 配置对象中不能出现el属性,因为这个是根实例的配置
            - const 组件名 = Vue.extend(options)可简写为：const 组件名 = options
    - 组件的注册:
        - 局部注册
            - 写在一个Vue实例配置对象的components配置项中
        - 全局注册
            - 使用Vue.component("组件名",options)注册
    - 组件的使用:
        - 使用方法:
            第一种写法:<xxx></xxx>
            第二种写法:<xxx/> [不用使用脚手架时,这种方法会导致后续组件不能渲染]
        - 组件命名规则:
            1. 单个单词:
                - 组件标签使用时和注册是可以全部小写,例如:"xxx" ===> <xxx>
                - 组件标签使用时和注册时可以首字母大写.例如:"School" ==> <School> [](官方推荐)
            2. 多个单词组成:
                - 组件标签使用时和注册时可以全部小写
                - 可以在单词之间加上-,组件标签使用时和注册时都是在单词之间加-,例如"xxx-yyy" ==> <xxx-yyy>
                - 可以把单词的首字母都大写,组件标签使用时和注册时都是一样,例如:"MySchool" ==> <MySchool> [这种方式只能在cli(脚手架)中使用]  [](官方推荐)
    - 组件之间的通信:
        - props(父传子)
            - 让组件接收外部传入的数据
            - props的优先级比data的优先级更高
            - props是只读的,如果修改Vue会发出警告,如果实在要修改,那就使用data拷贝一份使用,这样就不会修改props的值
            - 语法: 
                1. props:[string] //简单接收
                2. props:{  
                    name:String, //对接收的数据进行类型限制,参数为类型的规则函数
                    age:Number,
                    gender:Boolean
                }
                3. props:{//对接收的数据进行类型限制,以及必要性和默认值的设置
                    name:{
                        type:String, //类型限制
                        required:true, //必要属性指定
                    },
                    age:{
                        type:Number,
                        default:40 //默认值
                    }
                }
        - 子传父
            - 初级方法:
                1. 父组件可以把一个函数传给子组件,然后子组件调用时把数据作为函数的参数传入,父组件这里就可以对象这个参数进行操作 
                2. 使用自定义事件,给子组件绑定父组件的自定义事件,在子组件中使用this.$emit(eventName:string,param:any)方法,该方法会调用父组件的传入的事件,然后把数据传入
                3. 使用ref属性,获取子组件的实例对象,使用$on(eventName:string,callback)方法
        - 兄弟组件通信
            - 可以使用全局事件总线
            - 消息订阅与发布
* 自定义事件
    - 绑定事件
        - 可以使用@或者v-on,或者
        - 也可以使用ref属性获取组件实例,使用$on("自定义事件名",callback)方法绑定    
        - 调用自定义事件,使用实例的$emit("自定义事件名",参数)方法 
    - 解绑事件   
        - 解绑自定义事件,使用$off("自定义事件名",callback)方法  
        - 使用$destroy()销毁组件实例之后,所有的自定义事件都被解绑
            - 语法:
                1. this.$off();//默认解绑所有自定义事件
                2. this.$off("a")//解绑单个自定义事件
                3. this.$off(["a","b"])//解绑多个自定义事件
* 插件
    - 插件通常用来为 Vue 添加全局功能。插件的功能范围没有严格的限制——一般有下面几种:
        1. 添加全局方法或者 property。如：vue-custom-element
        2. 添加全局资源：指令/过滤器/过渡等。如 vue-touch
        3. 通过全局混入来添加一些组件选项。如 vue-router
        4. 添加 Vue 实例方法，通过把它们添加到 Vue.prototype 上实现。
        5. 一个库，提供自己的 API，同时提供上面提到的一个或多个功能。如 vue-router
    - 必须包含一个install()方法,第一个参数为Vue构造函数,第二个参数为插件使用者传递的数据
    - 定义插件:
        对象.install(Vue,options) {
            //一些全局配置
        }
    - 使用插件:
        - 引入插件,然后Vue.use(插件),再创建插件;
* VueComponent原理
    - 关于VueComponent:
        1. 组件本质是一个名为VueComponent的构造函数，且不是程序员定义的，是Vue.extend生成的
        2. 我们只需要写<schoo1/>或<school></school>,Vue解析时会帮我们创建school组件的实例对象，
            即Vue帮我们执行的：new VueComponent(options)。
        3. 特别注意：每次调用Vue.extend,返回的都是一个全新的VueComponent!!!!
        4. 关于this指向：
            1. 组件配置中：
               - data函数、methods中的函数、watch中的函数、computed中的函数它们的this均是【VueComponent实例对象】
            2 .new Vue()配置中：
               - data函数、methods中的函数、watch中的函数、computed中的函数它们的this均是【Vue实例对象】。
        5. VueComponent的实例对象，以后简称vc(也可称之为：组件实例对象)。
            Vue的实例对象，以后简称vm。
        6. VueComponent的原型对象的原型对象是Vue的原型对象
* Vue-cli(命令行接口,又称脚手架)
    - 首先要有node.js的运行环境,然后使用包管理器下载,安装: npm install -g @vue/cli [or] yarn install -g @vue/cli
    - 使用方法:
        - 切换到项目所在目录,命令行运行 vue create xxxx,创建项目,然后运行 cd xxxx,最后运行 npm run serve,成功进入项目
        - 以上为development模式,生产模式使用npm run build构建
    - Vue脚手架隐藏了webpack的配置,若想要查看webpack的配置,请执行 vue inspect > output.js
* render(渲染)
    - 关于不同版本的Vue:
     1. vue.js与vue.runtime.xxx.js的区别：
        1. vue.js是完整版的Vue,包含：核心功能+模板解析器。
        2. vue,runtime,xxx.js是运行版的Vue,只包含：核心功能：没有模板解析器。
     2. 因为vue.runtime.xxx.js没有模板解析器，所以不能使用template配置项，需要使用
       render函数接收到的createElement函数去指定具体内容。
* 全局事件总线
    - 可以实现在任意组件间通信
    - 在vm中使用生命周期钩子beforeCreate,往Vue的原型上添加一个属性,这个属性就是当前的Vue实例(vm)
    - 接收数据使用$on方法
    - 发送数据使用$emit方法
* 消息订阅与发布
    - 可以使用publish-js库
    - const subId = subscrible(messageName,(messageName,data) => {}) 订阅消息
    - publish(messageName,data) 发布消息
    - unsubscrible(subId) 取消订阅
* $nextTick
    - 在下一次真实DOM更新结束后执行其指定的回调
    - 什么时候用：当改变数据后，要基于更新后的新DOM进行某些操作时，要在extTick所指定的回调函数中执行。
    - 语法: this.$nextTick(callback)
* 动画和过渡
    - 使用transition标签,在该标签内的组件或者元素,可以使用Vue内置的css类名,该标签内只能有单个元素,如果要让多个元素产生效果就需要使用transition-group标签
        - transition标签属性:
            - appear(属性名):设置第一次是否立即播放动画,默认值:true
            - name(属性名):设置标签的动画样式前缀,默认值:v
            - enter-active-class(属性名):指定v-show显示的类名
            - leave-active-class(属性名):指定v-show隐藏的类名
    - v(name属性值)-enter-action(类名):指定v-show的显示的样式
    - v-leave-action(类名):指定v-show的隐藏的样式
    - v-enter:指定v-show显示的起点样式,类似from
    - v-enter-to:指定v-show显示的终点样式,类似to
    - v-leave:指定v-show隐藏的起点样式
    - v-leave-to:指定v-show隐藏的起点样式
* 配置代理
    - devServer中的proxy指定请求的服务器即可,这种方式的缺点就是只能指定单个代理
        - 语法:
            devServer:{
                proxy:"代理的请求服务器"
            }
    - 不过写成对象的形式就可以使用多个代理
        - 语法: 
            devServer:{
                "/api":{
                    target:"",
                    ws:true,
                    changeOrigin:true,
                },
                "/hello":{
                    target:"",
                    ws:true,
                    changeOrigin:true,
                }
            }
* slot(插槽)
    - slot标签可以实现在组件里添加别的标签,可以在组件复用的时候,添加与其他组件不一样的内容
    - 关于样式,可以在所有父组件定义,也可以在子组件定义
    - 可以给<slot name="具名"></slot>,然后在要插入的元素上添加,slot="具名",这样就可以插入指定位置,特别适用有多个插槽的情况,如果要插入多个元素,并且不想添加多余的结构也可以使用<template v-slot:具名></template>
    - 语法:
        在组件内放置标签,然后在组件内要出现的地方使用slot标签
        <slot>如果中没有放置标签,那么slot标签的内容就会出现</slot>
    - 作用域插槽:
        - 可以给特定插槽绑定数据,实现子传父
        - 可以给<slot :listData="data"></slot>绑定数据,然后在需要插入的元素外套一层<template scope|slot-scope="插槽绑定的数据,名字随便取,可以使用解构赋值,vue会套一层对象包裹">需要插入的元素</template>
* Vuex(状态管理模式)
    - Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式 + 库。它采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化。
    - 这个状态自管理应用包含以下几个部分：
        1. 状态:驱动应用的数据源；
        2. 视图:以声明方式将状态映射到视图；
        3. 操作:响应在视图上的用户输入导致的状态变化。
    - 在什么时候使用Vuex?
        1. 多个视图依赖于同一状态。
        2. 来自不同视图的行为需要变更同一状态。    
    - 使用:npm i vuex 安装,并且引入vuex,在store中,使用Vue.use(vuex),然后配置到Vue中
    - Vuex模块化
        - 使用多个文件封装不同的功能,方便后期维护和扩展
        - 在store中传入modules对象配置项,然后把模块引入并作为modules的属性使用
        - 语法:
            {
                namespaced:true,//开启命名空间,否则使用时传入命名空间无效
                actions:{},
                muattions:{},
                state:{},
                getters:{}
            }
    - Vuex辅助函数
        - mapState
            - 为组件创建计算属性以返回 Vuex store 中的状态。
            - 第一个参数是可选的，可以是一个命名空间字符串。
            - 对象形式的第二个参数的成员可以是一个函数。
            - 语法:
                //使用展开运算符,展开对象里的计算属性
                ...mapState("命名空间",{计算属性名:"数据源名"})//对象写法,用于计算属性名和数据源的名不一样
                ...mapState("命名空间",["计算属性名和数据源名一样"])//数组写法,用于计算属性名和数据源的名一样
        - mapGetters
            - 为组件创建计算属性以返回 getter 的返回值。
            - 第一个参数是可选的，可以是一个命名空间字符串。
            - 语法:和mapState一样
        - mapActions
            - 创建组件方法分发 action。
            - 第一个参数是可选的，可以是一个命名空间字符串。
            - 对象形式的第二个参数的成员可以是一个函数。
            - 语法:
                //在模板中使用时,如果要传参,需要使用方法名(参数)的写法
                ...mapActions("命名空间".{方法名:"行为名"})//对象写法,适合方法名和行为名不一样
                ...mapActions("命名空间",["方法名和行为名一样"])//(数组写法),适合方法名和行为名一样(推荐)
        - mapMutations
            - 创建组件方法提交 mutation。
            - 第一个参数是可选的，可以是一个命名空间字符串。
            - 对象形式的第二个参数的成员可以是一个函数。
            - 语法:
                //在模板中使用时,如果要传参,需要使用方法名(参数)的写法
                ...mapMutations("命名空间".{方法名,"操作名"})//对象写法,适合方法名和操作名不一样(推荐)
                ...mapMutations("命名空间",["方法名和操作名一样"])//数组写法,适合方法名和操作名一样
    - Vuex原理
        - Vue2.0使用的是vuex@3版本,Vue3.0使用的是vuex@4版本
        - 每一个 Vuex 应用的核心就是 store（仓库）。“store”基本上就是一个容器，它包含着你的应用中大部分的状态 (state)。Vuex 和单纯的全局对象有以下两点不同：
            - Vuex 的状态存储是响应式的。当 Vue 组件从 store 中读取状态的时候，若 store 中的状态发生变化，那么相应的组件也会相应地得到高效更新。    
            - 你不能直接改变 store 中的状态。改变 store 中的状态的唯一途径就是显式地提交 (commit) mutation。这样使得我们可以方便地跟踪每一个状态的变化，从而让我们能够实现一些工具帮助我们更好地了解我们的应用。
        - store(仓库)
            - 所有的每一个vuex操作都要有一个store
            - actions(行为)
                - 类型:对象
                - 保存行为,根据业务逻辑,提交需要的操作
                - 语法:
                    {
                        方法名[需要和dispatch中的方法名一样](context,value) {
                            //context是上下文对象,value是dispatch传入的数据
                        }
                    }
            - mutations(突变)
                - 类型:对象
                - 根据提交的行为,执行操作
                - 语法:
                    {
                        方法名[需要和commit中的方法名一样,并且推荐全部大写](state,value) {
                        //state是数据源,value是commit中传入的数据
                        }
                    }
            - state(状态)
                - 类型:对象
                - 数据源,类似于vm中的data
                - 语法:
                    {
                        属性名:数据
                    }
            - getters
                - 类型:对象
                - 加工的数据,类似于vm中的competed
                - 语法:
                    {
                        方法名(state) {
                            //state是数据源
                            return 加工的数据;
                        }
                    }
            - dispatch(派遣)  
                - 向actions派遣行为,适用于有复杂的业务逻辑的操作
                - 语法:
                    this.$store.dispatch("方法名",value);
            - commit(提交)
                - 绕过actions,向mutations提交操作,适用于简单没有什么业务逻辑的操作
                - 语法:
                    this.$store.commit("方法名",value);
        - 工作流程:
            Dispatch ==> Actions(Vuex) ==> Commit(Vuex) ==> Mutations(Vuex) ==> Mutate(Vuex) ==>
            State(Vuex) ==> Render
* Vue-router(路由器)
    - vue-router@3在vue2.0中使用,vue-router@4在vue3.0中使用
    - route(路由)是一组key-value的关系,多个路由需要经过路由器的管理
    - 路由组件一般放在pages文件夹,一般组件放在components文件夹
    - Vue-router可以让SPA(单页面Web应用),变得轻而易举
    - 切换组件时,不展示的组件会销毁,要使用的时候再挂载
    - 每个路由组件都有一个$route属性保存自身的路由规则,以及$router整个应用的路由器,所有路由组件的路由器都是同一个router
    - 路由传参
        - 路由模式:
            - 由于历史记录是栈的结构,所以可以返回之前的页面
            - 默认是push模式,把新的记录压入栈中
            - replace(替换)模式:直接把当前栈顶替换,只针对设置了该属性的组件,不包括子路由组件
            - 语法:
                <router-link replace或者:replace="true"></router-link>
        - query写法: ?参数=值
        - params写法: /参数
            - 使用parmas参数对象写法必须使用name作为路由路径
            - 使用params参数需要占位,/路径/:参数名/:参数名
        - 字符串写法
            - 语法:
                <router-link :to="`/Home/News/Detail?参数=${值}`">{{item.name}}</router-link>
                <router-link :to="`/Home/News/Detail/${值}`">{{item.name}}</router-link>
        - 对象写法
            - 语法:
                <router-link class="NMRoute" :to="{
                path:'/Home/News/Detail',//路由路径或者路由名字
                query:{//参数列表
                    title:item.name
                }
            }">{{item.name}}</router-link>
                <router-link class="NMRoute" :to="{
                name:'路由name',
                parmas:{//参数列表
                    title:item.name
                }
            }">{{item.name}}</router-link>
        - props传参
            - 可以传递参数给指定的路由组件
            - 语法:
                //props的第一种写法,对象式,数据为key-value的形式传入,不过是死数据,使所以这种方式不推荐使用
                - props:{a:1,b:"hello"}
                //props第二种写法,布尔值,值如果为真,就会把该路由组件收到的params(不包括query)参数,作为props的形式传入,
                //这样就可以直接定义接收了,可以不用写$route.params
                - props:true,
                //props第三种写法,函数式,接收一个参数$route,返回一个对象,该路由组件使用props接收这个对象中的值
                - props($route) {
                    return {
                            title:$route.query.title
                        }
                    }
        - 接收参数:this.$route.query
    - 编程式路由导航
        - 这种方式可以不用使用router-link标签进行路由的跳转
        - 想要导航到不同的 URL，则使用 router.push 方法。这个方法会向 history 栈添加一个新的记录，所以，当用户点击浏览器后退按钮时，则回到之前的 URL。
        - 当你点击 <router-link> 时，这个方法会在内部调用，所以说，点击 <router-link :to="..."> 等同于调用 router.push(...)。
        - 跟 router.push 很像，唯一的不同就是，它不会向 history 添加新记录，而是跟它的方法名一样 —— 替换掉当前的 history 记录。
        - back后退方法,forward前进方法,go方法指定前进后退的步数
    - SPA(单页面Web应用)
        - 整个应用只有一个页面
        - 点击页面中的链接不会跳转,而是做页面的局部更新
        - 数据通过AJAX请求获取
    - 使用vue-router:
        1. 安装:npm i vue-router@3
        2. 创建router文件夹,然后创建在该文件夹创建index.js文件,引入vue-router
        3. 引入需要使用路由的组件
        4. export default new VueRouter({
            routes:[
                {//每一个对象都是一个路由
                    name:"路由的专属名字",
                    path:"路由路径",//使用params参数需要占位/路径/:参数名/:参数名
                    component:组件,
                    meta:{isAuth} //meta可以存放我们想放的自定义属性
                    children:[
                        //子级路由路径不需要"/"
                        {子级路由}
                    ]
                }
            ]
        })
        5. 在入口文件引入vue-router,使用use方法应用,在Vue配置中添加router配置项
    - router-link标签
        - 需要切换路由的需要使用这个标签
        - 语法:
            <router-link
                to="路由"
                active-class=""
            ></router-link>
    - router-view标签
        - 指定路由的组件在哪加载
        - 语法:
            <router-view></router-view>
    - keep-alive标签
        - 包裹动态组件时，会缓存不活动的组件实例，而不是销毁它们。
        - 语法:
            //默认缓存被包裹的标签所有的组件,include属性可以设置值缓存哪些组件,exclude属性是排除哪些组件,缓存剩下的组件
             <keep-alive include="Message"如果有多个可以使用绑定:include="['Message',....]">//该属性缓存的组件是根据组件的name来缓存的
                <router-view></router-view>
            </keep-alive>
    - 路由守卫
        - 全局前置路由守卫:
            - 所有路由初始化和每次切换之前的时候调用
            - 语法:
                //to代表要前往的路由,from代表to之前的所在路由,next()表示放行,就是可以切换路由
                router.beforeEach((to,from,next) => {//一些代码});
        - 全局后置路由守卫:
            - 所有路由初始化和每次切换之后的时候调用
            - 语法:
                //to代表要当前切换后的路由,from代表切换之前的所在路由
                router.afterEach((to,from) => {//一些代码});
        - 独享路由守卫
            - 可以为一个路由单独设置路由守卫
            - 独享路由守卫只有前置,可以后置,但是可以与全局后置路由守卫配合
            - 语法:
                在route配置中,添加beforeEnter配置项值为函数
                beforeEnter(to,from,next) {
                    //一些代码...  
                }
        - 组件内路由守卫
            - 在该组件的配置对象中添加的两个钩子
            - 语法:
                 //通过路由规则,进入该组件之前时调用
                beforeRouteEnter(to,from,next) {
                    //一些代码...
                },
                //通过路由规则,离开该组件之前时调用
                beforeRouteLeave(to,from,next) {
                    //一些代码...
                },      
        - 路由守卫执行流程:
            1. beforeEach(初始化)
            2. afterEach(初始化)
            3. 正常的生命周期(mounted,beforedestroy)
            [以下为进入一个新的路由组件流程]
            4. beforeEach(全局前置路由守卫)
            5. beforeRouteEnter
            6. afterEach(全局后置路由守卫)
            7. 正常初始化的生命周期(mounted)
            [以下为离开该路由组件的流程]
            8. beforeRouteLeave
            9. beforeEach(全局前置路由守卫)
           10. afterEach(全局后置路由守卫)
           11. 销毁流程(beforeDestory,destoryed)
    - 路由的工作模式
        - hash模式:
            - 使用 URL 的 hash 来模拟一个完整的 URL，于是当 URL 改变时，页面不会重新加载。
            - vue-router默认工作模式为hash模式,/#/之后的数据统称为hash
            - hash模式的特点是/#/,之后的hash不会作为http路径发送给服务器
            - 若以后将地址通过第三方手机app分享,若app校验严格,则地址会被标记为不合法
            - hash模式的兼容性比history模式好
            - 语法:在路由器配置中加上mode配置项,值改为"history"
        - history模式:
            - 如果不想要很丑的 hash,我们可以用路由的 history 模式,这种模式充分利用 history.pushState API 来完成 URL 跳转而无须重新加载页面。
            - 当你使用 history 模式时，URL 就像正常的 url,例如 http://yoursite.com/user/id
            - 不过想要使用这种模式,还需要后台配置的支持,因为history模式,在刷新的时候会把路由的路径发送到服务器,但是服务器如果没有这些文件以及参数,就会出现404的情况,可以使用nodeJS的中间件connect-history-api-fallback
            - 使用connect-history-api-fallback
                - 安装:npm i connect-history-api-fallback -save
                - 使用:
                    1. const history = require("connect-history-api-fallback");
                    2. 服务.use(history()); //必须在静态资源部署之前使用
            - history模式的兼容性比hash模式略差
* 组件库
    - element-ui
        - 按需引入插件安装:npm install babel-plugin-component -D
* 深入理解Vue内在
    - 数据代理
        - 使用Observer对象完成数据代理,Vue._data = new Observer(data),观察者实例劫持data数据,Vue._data就是该实例,然后进行数据代理,由vm(Vue实例)代理Vue._data里的数据,内部使用Object.defineProperty()方法为vm添加Vue._data里的属性实现代理,只要其中一个有变动就会将其他两个同步修改,修改之后重新解析模板,并渲染页面 
    - 数据劫持
        - 在修改或读取数据时,会先调用相应的getter和setter,它们劫持了数据,所以最终结果由它们决定
    - 观察者对象
        - 可以监视数据的改变,并执行一些行为,内部就使用了数据劫持
        - 每个实例都可以监视一组数据,观察者实例的属性被改变,被观察的对象的相应属性也会改变
    - Vue监视数据的原理：
        1. vue会监视data中所有层次的数据。
        2. 如何监测对象中的数据？
            通过setter实现监视，且要在new Vuel时就传入要监测的数据。
            1. 对象中后追加的属性，Vue默认不做响应式处理
            2. 如需给后添加的属性做响应式，请使用如下API:
                - Vue.set(target,propertyName/index,value)
                - vm.$set(target,propertyName/index,value)
        3. 如何监测数组中的数据？
            通过包裹数组更新元素的方法实现，本质就是做了两件事：
            1. 调用原生对应的方法对数组进行更新。
            2. 重新解析模板，进而更新页面。
        4. 在Vue修改数组中的某个元素一定要用如下方法：
            1. 使用这些API:push()、pop()、shift()、unshift()、splice()、sort()、reverse()
            2. Vue.set() 或者 vm.$set() 
* Vue配套插件
    - vetur:Vue2语法插件
    - volar:Vue3语法插件
    - Vue VSCode Snippets:Vue的VScode代码片段
    - Vue helper:Vue的代码提示插件
* 浏览器本地存储
    - localStorage(本地存储)
        - 浏览器关闭本地存储不会清除
        - window有一个localStorage属性,通过该属性操控本地缓存
            - setItem(key:string,value:string)方法 添加本地缓存
            - getItem(key:string)方法 获取本地缓存
                - 添加的本地缓存会绑定为该对象的一个属性,可以通过.的形式访问
            - removeItem(key:string)方法 移除本地缓存
            - clear(void)方法 清除所有本地缓存
    - sessionStorage(会话存储)
        - 浏览器关闭本地存储会清除
        - window有一个sessionStorage属性,通过该属性操控会话缓存
            - 它的方法和localStorage的一样

        
  


    



            
    

