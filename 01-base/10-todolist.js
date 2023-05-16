import React, { Component } from 'react'
import './css/01-index.css'
export default class App extends Component {

    myref = React.createRef()

    state = {
        list:[
            {
                id:1,
                mytext:"aaa"
            },
            {
                id:2,
                mytext:"bbb"
            },
            {
                id:3,
                mytext:"ccc"
            }
            ]
    }

  render() {
    // var a = <div>暂无代办事项</div>

    return (
      <div>
        <input ref={this.myref}/>

        <button onClick={this.handleClick2}>add2</button>

        <ul>
            {
                this.state.list.map((item,index)=>
                    <li key={item.id}>
                        {/* 正常默认显示 */}
                        {/* {item.mytext} */}

                        {/* 富文本展示 */}
                        <span dangerouslySetInnerHTML={
                            {
                                __html:item.mytext
                            }
                        }></span>

                        {/* bind写法，传入两个参数 */}
                        {/* <button onClick={this.handleDelClick.bind(this,index)}>del</button> */}

                        {/* 箭头函数，传入参数 */}
                        <button onClick={ ()=>{
                            this.handleDelClick(index)
                        }}>del</button>
                    </li>                    
                    )
            }
        </ul>
        {/* <div>暂无待办事项</div> */}
        {/* 条件渲染:关键是找到条件是什么 */}
        {/* 写法1 */}
        {/* {this.state.list.length===0 ? a : null} */}
        {/* 写法2 */}
        {/* {this.state.list.length===0 && a} */}

        <div className={this.state.list.length===0 ? '' : 'hidden'}>暂无待办事项</div>

      </div>
    )
  }

//    todolist增加
  handleClick2 = ()=>{
    console.log("click2",this.myref.current.value)

    // this.setState

    // todolist增加
    // 不建议这么写：不要直接修改状态，可能会造成不可预期的问题
    // this.state.list.push(this.myref.current.value)

    // 跟上面写法类似，引用复制，还是直接修改状态，不建议
    // let newlist = this.state.list
    let newlist = [...this.state.list]  //深复制数组的方法
    // newlist.push(this.myref.current.value) //list里是直接数据的写法，下面是list里是对象的写法
    newlist.push({
        id:Math.random()*1000000, //生成不同id的函数,项目中数据库会自带id
        mytext:this.myref.current.value
    })

    // console.log()

    this.setState({
        // list:this.state.list
        list:newlist
    })

    //清空输入框
    this.myref.current.value = ""

  }

//   todolist删除
  handleDelClick(index){
    console.log("del-click",index)

    let newlist = this.state.list.slice() //slice/concat都是深复制数组的一种方法

    // 删除的方法splice
    newlist.splice(index,1)

    this.setState({
        list:newlist
    })

  }
}
