/*
 * @FilePath: index.js
 * @Author: Hazel
 * @Date: 2023-08-09 21:07:31
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-08-09 21:45:12
 * Copyright: 2023 xxxTech CO.,LTD. All Rights Reserved.
 */
import React from 'react'

//函数式组件没有this，所以用行参props
export default function Sidebar(props) {
    // console.log(this)
    // console.log(props)

    let {bg,position} = props
    console.log(position)

    var obj1 = {
        left:0
    }
    var obj2 = {
        right:0
    }

    var obj = {
        background:bg,
        width:"200px",
        position:"fixed",
    }

    var styleobj = position === "left"?{...obj,...obj1}:{...obj,...obj2}

  return (
    <div style={ styleobj
        // 原始写法，styleobj更灵活
        // {background:bg, width:"200px",position:"fixed",left:0, right:0}
        }>
        <ul>
            <li>1111111</li>
            <li>1111111</li>
            <li>1111111</li>
            <li>1111111</li>
            <li>1111111</li>
            <li>1111111</li>
            <li>1111111</li>
            <li>1111111</li>
        </ul>
    </div>
  )
}

// 函数式组件的属性验证和默认属性只能写在外面，不能像类组件一样写在里面
// Sidebar.defaultProps
// Sidebar.propTypes