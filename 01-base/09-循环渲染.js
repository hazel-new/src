import React, { Component } from 'react'

// 把给定的数组渲染到页面中，数组变化页面自动跟着变
export default class App extends Component {
    

    state = {
        // list:["1111","2222","3333"]
        list:[
            {
                id:1,
                text:"1111"
            },
            {
                id:2,
                text:"2222" 
            },
            {
                id:3,
                text:"3333"
            }
        ]
    }

  render() {
    
    // 注意列表中必须要加key，因为虚拟dom概念 
    // 写法2：
    // var newlist = this.state.list.map(item=><li key={item}>{item}</li>)
    return (
      <div>
        <ul>
            {
                // 写法1：
                this.state.list.map((item)=>
                    <li key={item.id}>{item.text}</li>)

                //写法2
                // newlist  
                // // map函数的两个形参
                // this.state.list.map((item,index)=>
                // <li key={index}>{item.text}--{index}</li>)
            }
        </ul>
      </div>
    )
  }
}

/* // 方法2：原生js的map方法
var list = ["aa","bb","cc"]

// 注意`是左上角的，不是单引号
var newlist = list.map(item=>`<li>${item}</li>`)

console.log(newlist.join("")) */

/* 
    为了列表的复用和重排，设置key值，提高性能
    key值设置：理想key值是item.id，但不涉及到列表的增加删除，重排，设置成索引也没有问题
 */