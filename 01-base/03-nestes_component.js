// React从17版本之后可以不写，但是建议写上，更规范
import React, { Component } from 'react'

class Child extends Component{
    render(){
        return(
            <div>
                this is Navbar's Child component
            </div>
        )
    }
}

// 类组件
class Navbar extends Component{
    render(){
        return(
            <div>
                this is Navbar
                <Child></Child>
            </div>
        )
    }
}

// const Child = ()=><div>this is Navbar's Child component</div>

// 函数组件
function Swiper(){
    return(
        <div>this is Swiper</div>
    )
}

// 箭头函数写法
const Tabbar = ()=><div>this is Tabbar</div>

// 嵌套组件：App是根组件，Navbar/Swiper/Tabbar是子组件。子组件可以是类组件，也可以是函数组件，但一般推荐统一类型,记得组件都要首字母大写。
// 再往下嵌套，比如Child组件，要写在对应的父组件里面，不能直接写在App里面
export default class App extends Component {
  render() {
    return (
      <div>
        <b>Hello Nested Component!</b>
        <Navbar></Navbar> 
        <Swiper></Swiper>
        <Tabbar></Tabbar>
      </div>
    )
  }
}
