import React, { Component } from 'react'
// 举例：点击按钮，拿到输入框的输入值/默认值。默认用ref实现。
// 如果还有另一个子组件也想拿到这个输入框的值，怎么实现？

// 表单中实现受控组件和非受控组件，其实就是可以把input看成子组件
// 非受控组件：可以使用 ref 来从 DOM 节点中获取表单数据，就是非受控组件

export default class App extends Component {
    myusername = React.createRef()
  render() {
    return (
      <div>
        <h1>Login page</h1>
        {/* 输入框显示默认值 */}
        {/*用value属性不合适，input会被固定value限制，不能再输入了,要用defaultValue
         <input type="text" ref = {this.myusername} value = "ddd"/> */}
        <input type="text" ref = {this.myusername} defaultValue = "ddd"/>
        
        <button onClick={()=>{
            console.log(this.myusername.current.value)
        }}>login</button>

        <button onClick={()=>{
            this.myusername.current.value = ""
        }}>reset</button>

        {/* 非受控不能实现给别的组件使用，下面的写法不能实现，要用受控写法 */}
        {/* <child myvalue = {this.myusername.current.value}/> */}
      </div>
    )
  }
}
