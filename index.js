/*
 * @FilePath: index.js
 * @Author: Hazel
 * @Date: 2023-07-28 20:25:42
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-08-09 21:52:14
 * Copyright: 2023 xxxTech CO.,LTD. All Rights Reserved.
 */
import React from "react"
import { createRoot } from "react-dom/client"
import App from './01-base/09-循环渲染'
// import App from './03-hooks/01-useState'
// import App from './my_demo/mytable2'



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
