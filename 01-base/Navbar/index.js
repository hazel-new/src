import React, { Component } from 'react'
//命名随意,从React 15.5版本开始，PropTypes由prop-types三方件提供。使用命令npm i -D prop-types安装。React 15.5之前的版本PropTypes由react提供，不需要安装。
import hazelproptyps from 'prop-types' 
// console.log(hazelproptyps)

export default class Navbar extends Component {
  // 对象属性
  state = {
    //只能内部自己用，外面无法改变。
  }

  //属性是父组件传来的，this.props
  render() {
    // console.log(this.props)

    let { title,leftshow } = this.props
    // console.log(leftshow)

    // 如何在接受属性的时候做验证？
    return (
      <div>
        {leftshow && <button>返回</button>}
        navbar-{title}
        <button>home</button>
      </div>
    )
  }
}

// 类属性，相对的是上面的对象属性（new完才能访问），这个不用new可以直接访问到
Navbar.prototypes = {
  //title: 验证是不是字符串的方法，
  title:hazelproptyps.string,
  // leftshow: 验证是不是bool的方法 
  leftshow:hazelproptyps.bool

}