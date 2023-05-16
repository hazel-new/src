import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <div>
        <input />
        {/* 写法1：如果处理逻辑过多，不推荐这种写法 */}
        <button onClick={ ()=>{
            console.log("click1")
        }}>add1</button>

        {/* 写法2/3： this后面方法没有小括号 */}
        {/* 写法2和3：要注意this指向 */}
        <button onMouseOver={ this.handleClick2 }>add2</button>    
        <button onClick={ this.handleClick3 }>add3</button>  
          {/* 写法4：this后面方法有小括号，比较推荐 */}
        <button onClick={ ()=>{
            this.handleClick4()  
        } }>add4</button>    
      </div>
    )
  }

  handleClick2(){
    console.log("click2")
  }

  handleClick3 = ()=>{
    console.log("click3")
  }

  handleClick4 = ()=>{
    console.log("click4")
  }
}
