/*
 * @FilePath: 18-状态vs属性.js
 * @Author: Hazel
 * @Date: 2023-08-09 21:50:31
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-08-09 22:01:38
 * Copyright: 2023 xxxTech CO.,LTD. All Rights Reserved.
 */
import React, { Component } from 'react'

class Child extends Component{
    render(){
        return(
            <div>
                child-{this.props.text}

                <br/>

                {/* 子组件不能改属性，会报错，只能让父组件修改了再传给自组件
                <button onClick={()=>{
                    this.props.text = "33333333"
                }}>click-子</button> */}

            </div>
        )
    }
}

export default class App extends Component {
    state = {
        text: "111111"
    }
  render() {
    return (
      <div>
        <button onClick={()=>{
            this.setState({
                text:"22222"
            })
        }}>click-父</button>
        <Child text = {this.state.text}/>
      </div>
    )
  }
}
