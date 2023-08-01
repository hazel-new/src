import React from "react"
import { createRoot } from "react-dom/client"
import App from './01-base/12-案例-卖座选项卡'


// mooc课程
// import App from './imooc-code/Welcome'
import 'bootstrap/dist/css/bootstrap.min.css'
// import App from "./imooc-code/App"

// react18写法
const root = createRoot(document.getElementById("root"))

// react里面组件类App可以直接当标签用，单标签双标签都可以,但必须大写开头
// root.render(<div>react18</div>)
// root.render(<App></App>) //双标签
root.render(<App/>)  //单标签
