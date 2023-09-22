import React, { Component } from 'react'

export default class App extends Component {
    state = {
        myname:"kerwin"
    }
    componentWillMount(){
        console.log("第一次will mount",this.state.myname,document.getElementById("myname"))

        // 第一次上树前的最后一次修改状态的机会
        this.setState({
            myname:"Hazel"
        })
    }
    componentDidMount(){
        console.log("第一次did mount.",document.getElementById("myname"))
    }
  render() {
    console.log("render.")
    return (
      <div>
        <span id="myname">{this.state.myname}</span>
      </div>
    )
  }
}
