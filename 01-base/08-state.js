import React, { Component } from 'react'

export default class App extends Component {
    a = 1
    /* state写法1：state是固定写法，mytext任意取名
    // state = {
    //     // mytext:"收藏",
    //     myshow:true
    // } */

    // state写法2
    constructor(){
        super()  //必须要写，继承之前的
        this.state = {
            mytext:"收藏",
            myshow:true,
            myname:"hairong"
        }
    }

  render() {
    // var text = "收藏"

    return (
      <div>
        <h1>欢迎来到react开发-{this.state.myname}</h1>

        <button onClick={()=>{
            // this.state.mytext = "取消" //react不会像vue一样自动渲染，会报“不要直接修改”错误
            this.setState({
                // mytext:"取消收藏",
                myshow:!this.state.myshow,
                myname:"xiaoming"
            }) // 间接修改状态

            if(this.state.myshow){
                console.log("收藏的逻辑")
            }else{
                console.log('取消收藏的逻辑')
            }

        }}>{this.state.myshow?'收藏':'取消收藏'}</button>
      </div>
    )
  }
}
