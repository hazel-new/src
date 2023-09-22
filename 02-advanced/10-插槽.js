import React, { Component } from 'react'

// 用途：
// 1.为了复用
// 2.一定程度减少父子通信
class Child extends Component{
    render(){
        return <div>
            child
            {/* 插槽 vue slot，具名插槽,固定写法*/}
             {this.props.children[2]}
             {this.props.children[1]}
             {this.props.children[0]}
        </div>
    }
}
export default class App extends Component {
  render() {
    return (
      <div>
        <Child>
            <div>11111111111</div>
            <div>22222222222</div>
            <div>33333333333</div>
            {
                // children
            }
        </Child>
      </div>
    )
  }
}
