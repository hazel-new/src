import React, { Component } from 'react'


// react中尽量减少dom操作，因为react已经在做dom操作了
// 状态就是组件描述某种显示情况的数据，由组件自己设置和更改，也就是说由组件自己维护，使用状态的目的就是为了在不同的状态下使组件的显示不同(自己管理)
// 比如“收藏”按钮，点之前跟点之后状态就不一样
export default class App extends Component {
 /* //点击按钮，让“收藏”改变成“取消收藏”
  // // 错误写法：这种直接改变text内容的写法不生效。因为，vue中，data属性是利用 Object.defineProperty 处理过的，更改data的 数据的时候会触发数据的 getter 和 setter ，但是React中没有做这样的处理，如果直接更改的话， react是无法得知的，所以，需要使用特殊的更改状态的方法 setState
  // render() {
  //   var text = "收藏"
  //   return(
  //     <div>
  //       <h1>状态的使用</h1>
  //       <button onClick={()=>{
  //         text = "取消收藏"
  //       }}>{text}</button>
  //     </div>
  //   )*/

  /*// // state写法1：state是固定写法，mytext任意取名
  // state = {
  //   mytext:"收藏"
  // }

  // render(){
  //   return(
  //     <div>
  //       <h1>状态的使用</h1>
  //       <button onClick={()=>{
  //         // this.state.mytext = "取消收藏" //直接改值不生效，react不会像vue一样自动渲染，会报“不要直接修改”错误，要间接修改状态，setState。
  //         // setState是修改状态的唯一方法，是间接修改。
  //         this.setState({
  //           mytext:"取消收藏"
  //         })
  //       }}>{this.state.mytext}</button>

  //     </div>
  //   )
  // }*/

  /*// // 连续点击按钮，让“收藏”和“取消收藏”来回切换
  // state = {
  //   myShow:true
  // }
  // render(){
  //   return(
  //     <div>
  //       <h1>状态的使用</h1>
  //       <button onClick={()=>{
  //         this.setState({
  //           myShow:!this.state.myShow
  //         })

  //         if(this.state.myShow){
  //           console.log("收藏的逻辑")
  //         }else{
  //           console.log("取消收藏的逻辑")
  //         }
  //       }}>{this.state.myShow?"收藏":"取消收藏"}</button>

  //     </div>
  //   )
  // }*/

   // state写法2：构造器写法，固定写法
    constructor(){
        super()  //必须要写，继承之前的
        this.state = {
            mytext:"收藏",
            myshow:true,
            myname:"hairong"
        }
    }

    render(){
      return (
        <div>
          <h1>状态的使用2----{this.state.myname}</h1>

          <button onClick={()=>{
              this.setState({
                  myshow:!this.state.myshow, 
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
