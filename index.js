// console.log("hello world hairong")
// 从 react 的包当中引入了 React。只要你要写 React.js 组件就必须引入React, 因为react里有一种语法叫JSX，稍后会讲到JSX，要写JSX，就必须引入React
import React from "react"
//  ReactDOM 可以帮助我们把 React 组件渲染到页面上去，没有其它的作用了。它是从 react-dom 中引入的，而不是从 react 引入。
// import ReactDOM from "react-dom"
// createRoot() 是React 18 引入的一个新的根 API； 它启用了新的并发渲染器，允许使用并发功能；
// ES6 import方法{xx}
import { createRoot } from "react-dom/client"
import App from './01-base/01-class_component'



/* // ReactDOM.render(<div>
//     <b>Hello React18</b>
//     <ul>
//         <li>1111111</li>
//         <li>1111111</li>
//         <li>1111111</li>
//     </ul>
//     </div>, document.getElementById("root"))

// ReactDOM.render(React.createElement("div",{
//     id:"aaa",
//     class:"bbb"
// },"11111"),document.getElementById("root")) */


// ReactDOM里有一个render方法，功能就是把组件渲染并且构造DOM树，然后插入到页面上某个特定元素上，比如root.
// ReactDOM.render(<App></App>,document.getElementById("root"))

// react18写法
const root = createRoot(document.getElementById("root"))

// 组件类可以直接当标签用，单标签双标签都可以,必须大写开头
// root.render(<div>react18</div>)
// root.render(<App></App>) //双标签
root.render(<App/>)  //单标签
