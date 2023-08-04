// 影院app需求1：显示3个选项卡，点击会改变对应颜色，且显示对应内容
// 影院app需求2：数据查询功能。点击“影院”选项卡，在页面上显示影院名字和地址等内容。
    // 用axios实现
    // 改cinema.js文件和对应css文件
// 影院app需求3：搜索功能。
    // 输入框为空的时候，页面也为空，用条件渲染实现。输入框样式，业务逻辑。
    // 用ref实现获取输入框里面的值，每次输入框值改变的时候就重新获取并做过滤。
    // 改cinema.js文件和对应css文件

import React, { Component } from 'react'
import './css/02-maizuo.css'
import Film from './maizuocomponent/Film' 
import Cinema from './maizuocomponent/Cinema'
import Center from './maizuocomponent/Center' 


export default class App extends Component {
  state = {
    list:[
      {
        id:1,
        text:'电影'
      },
      {
        id:2,
        text:'影院'
      },
      {
        id:3,
        text:'我的'
      }
    ],
    current:0
  }

  which(){
    // return 1111
    switch (this.state.current){
      case 0:
        return <Film></Film>
      case 1:
        return <Cinema></Cinema>
      case 2:
        return <Center></Center>
      default:
        return null
    }
  }
  
  handleClick(index){
    // console.log(index)

    this.setState({
      current:index
    })
  }

  render() {
    return (
      <div>
        {
          this.which()
        }
        <ul>
          {
            this.state.list.map((item,index) =>
              <li key={item.id} className={this.state.current === index?'active':''} onClick={()=>this.handleClick(index)}>{item.text}</li>)
          }
        </ul>
      </div>
    )
  }
 
}
