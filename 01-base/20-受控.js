import React, { Component } from 'react'
// 举例：点击按钮，拿到输入框的输入值/默认值。默认用ref实现。
// 如果还有另一个子组件也想拿到这个输入框的值，怎么实现？
// 受控组件写法：输入框输入值发生改变，导致状态发生改变，然后重新渲染input也发生改变。这样这个状态值给别的组件也一样跟着改。

export default class App extends Component {
    state = {
        username:"bbbb"
    }
    render() {
    return (
      <div>
        <h1>Login page</h1>
        {/* input在原生JS和react开发中有什么区别？可以value值受控，defaultvalue非受控；事件监听方面，onInput跟onChange（官方推荐）是同效的。原生JS则不然。 */}
        {/* 受控行为：每次输入框的值发生改变，用onChange拿到这个值，然后立即给状态set改变，状态改变让render重新渲染一遍，value再次传给input，这样input“组件”就跟输入框显示是一样了，否则打印会显示输入值，但是输入框不变。 */}
        <input type="text" value={this.state.username} 
        // evt是事件对象
        onChange ={(evt)=>{
            // console.log("onChange",evt.target.value)

            this.setState({
                username:evt.target.value
            })
        }}/>
        
        <button onClick={()=>{
            console.log(this.state.username)
        }}>login</button>

        <button onClick={()=>{
            this.setState({
                username:""
            })
        }}>reset</button>

      </div>
    )
  }
}
