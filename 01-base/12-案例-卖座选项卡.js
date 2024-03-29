// 影院app需求1：显示3个选项卡，点击会改变对应颜色，且显示对应内容

import React, { Component } from 'react'
import './css/02-maizuo.css'
import Film from './maizuocomponent/Film.js' // .js可以省略
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
    console.log(index)

    this.setState({
      current:index
    })
  }

  render() {
    return (
      <div>
        {/* {
          this.state.current ===0 && <Film></Film>
        }
        {
          this.state.current ===1 && <Cinema></Cinema>
        }
        {
          this.state.current ===2 && <Center></Center>
        } */}
        {
          // 表达式==支持函数表达式
          //处理函数
          this.which()
        }
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
 
}
