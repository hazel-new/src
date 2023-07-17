import React from "react"
import ReactDOM from "react-dom"
import App from './01-base/05-事件绑定-1'

// ReactDOM里有一个render方法，功能就是把组件渲染并且构造DOM树，然后插入到页面上某个特定元素上，比如root.
ReactDOM.render(<App></App>,document.getElementById("root"))

// ReactDOM.render(<div>
//     <b>Hello React</b>
//     <ul>
//         <li>1111111</li>
//     </ul>
//     </div>, document.getElementById("root"))

// ReactDOM.render(React.createElement("div",{
//     id:"aaa",
//     class:"bbb"
// },"11111"),document.getElementById("root"))


