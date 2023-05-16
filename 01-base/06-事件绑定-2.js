import React, { Component } from 'react'

export default class App extends Component {
    a =100
    
  render() {
    return (
      <div>
        <input />
        {/* 写法1：逻辑简单，推荐；如果处理逻辑过多，不推荐这种写法 */}
        <button onClick={ ()=>{
            console.log("click1",this.a)
        }}>add1</button>

        {/* 写法2/3： this后面方法没有小括号，要注意this指向 */}
        {/* 写法2：不推荐，onMouseOver */}
        {/* 写法3：推荐 */}
        <button onClick={ this.handleClick2.bind(this) }>add2</button>    
        <button onClick={ this.handleClick3 }>add3</button>  
          {/* 写法4：this后面方法有小括号，比较推荐,尤其传参情景 */}
        <button onClick={ ()=>{
            this.handleClick4()  
        } }>Madd4</button>    
      </div>
    )
  }

  handleClick2(){
    console.log("click2",this.a)
  }

  handleClick3 = ()=>{
    console.log("click3",this.a)
  }

  handleClick4 (){
    console.log("click4",this.a)
  }
}


// react并不会真正的绑定事件到每一个具体的元素上，而是采用事件代理的模式。