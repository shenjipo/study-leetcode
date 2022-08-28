# React的生命周期

## 初始化阶段

> 1. 设置组件的默认属性
> 2. 设置组件的初始状态，--执行构造函数
> 3. componentWillMount组件即将渲染到页面时触发，此时可以向服务器请求数据
> 4. render 组件渲染
> 5. componentDidMount()组件渲染结束后触发，此时页面中已经有了真正的dom元素

## 更新阶段

>1. componentWillReceiveProps props更新时会被触发，接收的参数时nextprops，在这里可以根据nextpros去setState，不会触发额外的render
>2. shouldcomponentUpdate, 返回true或者false，如果false，则到此为止，此次不会触发render
>
>一个React项目需要更新一个小组件时，很可能需要父组件更新自己的状态。而一个父组件的重新更新会造成它旗下所有的子组件重新执行render()方法，形成新的虚拟DOM，再用diff算法对新旧虚拟DOM进行结构和属性的比较，决定组件是否需要重新渲染
>
>简单总结就是，父组件只要setState必然引起所有子组件重新渲染，但是子组件未必使用到了父组件此时更新的数据，引发了不必要的渲染，因此可以在这个生命周期中进行判断，避免这种无效渲染
>
>此外，React官方给我们提供了一个`PureComponent`来做这样的事情，我们只需要去继承它就行了。
>
>案例参考
>
>https://segmentfault.com/a/1190000022474990
>
>3. componentWillUpdate()，主要用于服务端渲染，不了解
>4. componentDidUpdate() 组件被更新完成后触发。页面中产生了新的DOM的元素，可以进行DOM操作，例如输入框获取焦点

## 销毁阶段

>1.componentWillUnmount() 组件被销毁时触发。这里我们可以进行一些清理操作，例如清理定时器，取消Redux的订阅事件等等。

参考 https://juejin.cn/post/6844903510538977287



# State和props区别

> 相同点：
>
> - 两者都是用于保存信息
> - props 和 state 都能触发渲染更新
>
> 区别：
>
> - props 是外部传递给组件的，而 state 是在组件内被组件自己管理的，一般在 constructor 中初始化
> - props 在组件内部是不可修改的，但 state 在组件内部可以进行修改
> - state 是多变的、可以修改



# React的合成事件机制



# React的类组件与函数式组件



# React hooks理解

https://github.com/febobo/web-interview/issues/195