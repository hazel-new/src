import React, { Component } from 'react'
import './css/01-index.css' //导入css模块，webpack的支持，加到head里面去了，脚手架里都配置好了

export default class App extends Component {
  render() {
    var myname = "haiorng"
    var obj = {
        // background:"yellow" // 记得双引号，多属性用background，下面是单属性，比如backgroundColor
        // background-color:"yellow" // html的带-的这种写法不支持
        backgroundColor:"black", // js里是驼峰写法
        color:"lightgreen",
        fontSize:"30px"
    }
    return (
      <div>
           {/* jsx默认当成html处理 */}
            10+20<br/>
            <hr/>
            {/* 大括号{}是模板语法规则，表示里面的代码当成js来运行*/}
            {10+20}-myname
            <hr/>
            {10+20}-{myname}
            <hr/>
            {10>20?"aaa":"bbb"}
            <hr/>
            <br/>
            {/* style错误写法报错：style={{marginRight: spacing + 'em'}} when using JSX */}
            {/* <div style="background:yellow">style后面得是对象</div> */}
            <div style={obj}>样式显示,style后面得是对象</div>
            <br/>
            <div style={{background:"red",color:"yellow"}}>对象的另一种写法。React推荐使用这种行内样式,因为react觉得每一个组件都是一个独立的整体</div>
            <hr/>
            {/* 16.2之前class/for不能用，后面的版本升级了，能用但有warning。建议用className/htmlFor */}
            {/* <div class="active">class相关</div>  */}
            <div className="active">用class选择器</div> 
            <div id="myapp">用id选择器</div>
            <hr/>
            <br/>
            <label htmlFor="username">用户名:</label>
            <input type="text" id="username"/>
      </div>
    )
  }
}
