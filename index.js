import React from "react"
import { createRoot } from "react-dom/client"
import App from './01-base/09-循环渲染'
// import App from './imooc-code/Welcome'

// react18写法
const root = createRoot(document.getElementById("root"))

// react里面组件类App可以直接当标签用，单标签双标签都可以,但必须大写开头
// root.render(<div>react18</div>)
// root.render(<App></App>) //双标签
root.render(<App/>)  //单标签
