import React, { Component } from 'react'
import Navbar from './Navbar/index' // 导入自定义组件，文件夹里只有index.js文件的话，/index可以省略不写

// 多个组件复用同一个navbar
export default class App extends Component {

  render() {
    //可能是上面父组件传来的一个对象
    var obj = {
        title : "测试",
        leftshow:false
    }

    return (
      <div>
        <div>
          <h2>首页</h2>
          <Navbar title="首页" leftshow={false}/>
        </div>

        <div>
          <h2>列表</h2>
          <Navbar title="列表" />
        </div>

        <div>
          <h2>购物车</h2>
          <Navbar title="购物车"/>
        </div>

        {/* <Navbar title={obj.title} leftshow={obj.leftshow}/> */}
        {/* 下面是上面这句的简写方式，父组件和孩子组件的属性正好一样的话，可以用...展开，是es6写法 */}
        <Navbar {...obj}/> 

      </div>



    )
  }
}
