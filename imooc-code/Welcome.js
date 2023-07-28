import React, { Component } from 'react'

export default class App extends Component {
  render() {
    const todoList = ['Learn React','Learn Redux']
    const isLogin = true
    return ( 
      <div>
        <h1>Hello React!</h1>
        {'hello'}
        <br/>
        {[1,2,3]}
        <br/>
        {10+20}
        <ul>
            {
            // 语法学习
            todoList.map(item =>
                <li>{item}</li>
                )
            }
        </ul>
        {isLogin ? <p>你已经登陆</p> : <p>请登录</p>}
      </div>
    )
  }
}
