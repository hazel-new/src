import React, { Component } from 'react'
import Navbar from './Navbar/index' // 导入自定义组件，文件夹里只有index.js文件的话，/index可以省略不写

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar>

        </Navbar>
      </div>
    )
  }
}
