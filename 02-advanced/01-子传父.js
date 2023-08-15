// 显示导航栏和侧边栏，点击导航栏上按钮，控制侧边栏出现和消失
// {条件this.state.isShow && <Sidebar/>}

// 父传子：属性
// 子传父：回调函数，callback;父组件给子组件一个回调函数，让子组件可以访问父组件的状态或者属性

import React, { Component } from 'react'

class Navbar extends Component{
    render(){
        return <div style={{background:"red"}}>
            <button onClick={()=>{
                console.log("子通知父,让父的isShow取反。就是子传父。",this.props.event) // event就是属性名，可以改

                this.props.event() //加上()实现回调，调用父组件传来的回调函数
                //子组件让父组件中的一个函数被执行了
            }}>click</button>
            <span>navbar</span>
        </div>
    }
}

class Sidebar extends Component{
    render(){
        return <div style={{background:"yellow", width:"200px"}}>
            <ul>
                <li>1111111111</li>
                <li>1111111111</li>
                <li>1111111111</li>
                <li>1111111111</li>
                <li>1111111111</li>
            </ul>
        </div>
    }
}

export default class App extends Component {
    state = {
        isShow:true
    }

    handleEvent = () => {
         this.setState({
                isShow:!this.state.isShow
            })

            console.log("回调函数，父组件定义的event事件")
    }
  render() {
    return (
      <div>
        {/* 在Navbar身上放了一个属性，这个属性event可以任意取名，属性值则是一个回调函数的定义 */}
        {/* this.handleEvent就是提取出去的回调函数，也可以把函数内容写在event属性里面 */}
        <Navbar event={this.handleEvent}
        //   把这里的回调函数写到外面去 
        //      () =>{
        //     // this.setState({
        //     //     isShow:!this.state.isShow
        //     // })
        //     console.log("父组件定义的event事件")
        // }}
        />

       {this.state.isShow && <Sidebar/>} 


        {/* 不用Navbar，直接按钮button实现click控制sidebar
        <button onClick={()=>{
            this.setState({
                isShow:!this.state.isShow
            })
        }}>click</button>
       {this.state.isShow && <Sidebar/>}  */}


      </div>
    )
  }
}
