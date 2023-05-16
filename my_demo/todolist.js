import React, { Component } from 'react'

export default class App extends Component {
  
  myref = React.createRef()

  state = {
    list:[
      {
        id:1,
        mytext:"todolist_demo"
      }
    ]
  }

  render() {
    var a = <div><b>No todolist now!</b></div>

    return (
      <div>
        <input ref={this.myref}/>
        <button onClick={this.handleClick}>Add</button>
        <ul>
          {
            this.state.list.map((item,index)=>
              <li key={item.id}>
                {item.mytext}

                <button onClick={ ()=>{
                  this.handleDelClick(index)
                }}>Delete</button>
              </li>            
            )
          }
        </ul>
        {/* 全部删除后页面提示 */}
        {this.state.list.length===0 ? a : null}
      </div>
    )
  }

  // add todolist
  handleClick = ()=>{
    console.log("click",this.myref.current.value)

    let newlist = [...this.state.list]  //深复制数组
    newlist.push({                      //增加todolist
      id:Math.random()*100000,
      mytext:this.myref.current.value
    })

    this.setState({                      //set状态
      list:newlist 
    })

    this.myref.current.value = ""         //清空输入框
  }

  // delete todolist
  handleDelClick(index){
    console.log("del-click",index)

    let newlist = [...this.state.list]
    newlist.splice(index,1)                 //删除todolist

    this.setState({
      list:newlist
    })
  }

}
