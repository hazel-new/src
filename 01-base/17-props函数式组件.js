/*
 * @FilePath: 17-props函数式组件.js
 * @Author: Hazel
 * @Date: 2023-08-09 21:04:40
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-08-09 21:41:53
 * Copyright: 2023 xxxTech CO.,LTD. All Rights Reserved.
 */
import React, { Component } from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'


export default class App extends Component {
  render() {
    return (
      <div>
        {/* 类组件 */}
        <Navbar title="导航栏"></Navbar>

        {/*函数式组件*/}
        <Sidebar bg="red" position="left"></Sidebar>
      </div>
    )
  }
}
