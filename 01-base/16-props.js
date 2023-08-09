import React, { Component } from 'react'
import Navbar from './Navbar/index' // 导入自定义组件，文件夹里只有index.js文件的话，/index可以省略不写

// 多个组件复用同一个navbar
export default class App extends Component {

  render() {
    return (
      <div>
        <div>
          <h2>首页</h2>
          <Navbar title="首页" leftshow="false"/>
        </div>

        <div>
          <h2>列表</h2>
          <Navbar title="列表" leftshow="true"/>
        </div>

        <div>
          <h2>购物车</h2>
          <Navbar title="购物车" leftshow='false'/>
        </div>
      </div>



    )
  }
}
