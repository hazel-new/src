import React, { Component } from 'react'

// react中尽量减少dom操作，因为react以及在做dom操作了
// 状态就是组件描述某种显示情况的数据，由组件自己设置和更改，也就是说由组件自己维护，使用状态的目的就是为了在不同的状态下使组件的显示不同(自己管理)
// 比如“收藏”按钮，点之前跟点之后状态就不一样
export default class App extends Component {
    a = 1
    /* state写法1：state是固定写法，mytext任意取名
    // state = {
    //     // mytext:"收藏",
    //     myshow:true
    // } */

    // state写法2,构造器写法，固定写法
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
            // this.state.mytext = "取消" //react不会像vue一样自动渲染，会报“不要直接修改”错误，要间接修改状态
            // setState是修改状态的唯一方法
            this.setState({
                // mytext:"取消收藏",
                myshow:!this.state.myshow, //跟条件选择语句一起实现“收藏”连续点击的变化
                myname:"xiaoming"
            }) 

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
