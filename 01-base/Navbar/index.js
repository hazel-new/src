/*
 * @FilePath: index.js
 * @Author: Hazel
 * @Date: 2023-08-09 20:37:55
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-08-09 20:55:56
 * Copyright: 2023 xxxTech CO.,LTD. All Rights Reserved.
 */
import React, { Component } from 'react'
//命名随意,从React 15.5版本开始，PropTypes由prop-types三方件提供。使用命令npm i -D prop-types安装。React 15.5之前的版本PropTypes由react提供，不需要安装。
import hazelproptyps from 'prop-types' 
// console.log(hazelproptyps)

export default class Navbar extends Component {
  // 对象属性
  state = {
    //只能内部自己用，外面无法改变。
  }

  //类属性写在类里面的写法，staic关键字
  //属性验证
  static propTypes = {
    title:hazelproptyps.string,
    leftshow:hazelproptyps.bool
  } 

  //设定默认属性
   static defaultProps = {
    leftshow:true
  }

  //属性是父组件传来的，this.props
  render() {
    // console.log(this.props)

    let { title,leftshow } = this.props
    // console.log(leftshow)

    // 如何在接受属性的时候做验证？看最后
    return (
      <div>
        {leftshow && <button>返回</button>}
        navbar-{title}
        <button>home</button>
      </div>
    )
  }
}

/* // 类属性写在类外面的写法，类名.propTypes是固定写法，相对的是上面的对象属性（new完才能访问），这个不用new可以直接访问到
Navbar.propTypes = {
  //title: 验证是不是字符串的方法，
  title:hazelproptyps.string,
  // leftshow: 验证是不是bool的方法 
  leftshow:hazelproptyps.bool
} */

/* //es7里类属性和对象属性的区别
class Test{
  a = 1 //对象属性
  static a = 100 //类属性，写在里面用关键字static
}
// Test.a = 100 //类属性
var obj = new Test();
console.log(Test.a, obj.a) */

/* //类属性设置默认值，类名.defaultProps
Navbar.defaultProps = {
  leftshow:true
} */

