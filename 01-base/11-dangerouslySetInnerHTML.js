import React, { Component } from 'react'

export default class App extends Component {
// 如何在页面中显示富文本，比如todolist输入框里输入富文本<b>dddd</b>,页面会显示带html格式的文本。不直接显示是防止脚本攻击

// 非常信任后端代码的情况下使用
state = {
    myhtml:`后端代码`
}

  render() {
    return (
      <div>
        <div dangerouslySetInnerHTML={
            {
                __html:this.state.myhtml
            }
        }></div>
      </div>
    )
  }
}
 