/*
 * @FilePath: 12-案例-卖座选项卡.js
 * @Author: Hazel
 * @Date: 2023-07-31 22:00:48
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-08-01 22:42:18
 * Copyright: 2023 xxxTech CO.,LTD. All Rights Reserved.
 */

import React, { Component } from 'react'
import './css/02-maizuo.css'
// import Film from './maizuocomponent/Film.js' // .js可以省略
// import Cinema from './maizuocomponent/Cinema'
// import Center from './maizuocomponent/Center'


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
  render() {
    return (
      <div>
        {/* <Film></Film>
        <Cinema></Cinema>
        <Center></Center> */}
        <ul>
          {
            this.state.list.map((item,index) =>
              // 条件(当前点击的索引(状态)===index)?'active':''
              <li key={item.id} className={this.state.current === index?'active':''} onClick={()=>this.handleClick(index)}>{item.text}</li>)
          }
        </ul>
      </div>
    )
  }
  handleClick(index){
    console.log(index)

    this.setState({
      current:index
    })
  }
}
