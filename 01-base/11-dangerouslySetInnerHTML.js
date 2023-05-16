import React, { Component } from 'react'

export default class App extends Component {

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
