import React, { Component } from 'react'

// ref: 引用，保证拿到输入框的值
// React 支持一种非常特殊的属性 Ref ，你可以用来绑定到 render() 输出的任何组件上。
export default class App extends Component {
    a = 100
    myref = React.createRef()
  render() {
    return (
      <div>
        {/* <input ref="mytext"/>       
        <button onClick={ ()=>{
            // 划线表示这种用法要被弃用了
            console.log("click1",this.refs.mytext.value)          
        } }>add1</button> */}

        
         <input ref={this.myref}/>
         <button onClick={ ()=>{
            // 推荐这种，注意下this和current是固定写法
            console.log("click", this.myref.current.value)
         } }>add1</button>
      </div>
      
    )
  }
}
