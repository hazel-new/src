// 影院app需求2：数据查询功能。点击“影院”选项卡，在页面上显示影院名字和地址等内容。
    // 用axios实现
    // 改cinema.js文件和对应css文件
// 影院app需求3：搜索功能。
    // 输入框为空的时候，页面也为空，用条件渲染实现。输入框样式，业务逻辑。
    // 用ref实现获取输入框里面的值，每次输入框值改变的时候就重新获取并做过滤。
    // 改cinema.js文件和对应css文件
import React, { Component } from 'react'
import axios from 'axios'

export default class Cinema extends Component {
  
  constructor(){
    super()

    this.state = {
      cinemaList:[],
      bakcinemaList:[]
    }

    //axios第三方的库，专门用于请求数据，语法如下：
    // axios.get("请求地址").then(res=>{}.catch(err=>{console.log(err)}))

    //这种简写方式会报跨域错误，直接浏览器打开这个网址也不行。因为卖座网做了限制，得加指定header才行，所以要用axios的完整写法。
    // axios
    //   .get("https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=7406159")
    //   .then(res=>{
    //     console.log(res)
    //   })
    //   .catch(err=>{
    //     console.log(err)
    //   })

   
    // axios完整版写法：
    axios({
      url:"https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=7406159",
      method:"get",
      headers:{
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"16395416565231270166529","bc":"110100"}',
        'X-Host': 'mall.film-ticket.cinema.list'
    }
    })
    .then(res=>{
      // console.log(res) axios定义，后端数据在res.data里面,指定数据在下面的选项里
      console.log(res.data.data.cinemas)

      this.setState({
        cinemaList:res.data.data.cinemas,
        bakcinemaList:res.data.data.cinemas
      })
    })
    .catch(err=>{
      console.log(err)
    })
  }

  //后面讲生命周期函数，更适合发送ajax请求
  render() {
    return (
      <div>
          <input onInput={this.handleInput}/>
          {
            this.state.cinemaList.map(item=>
              <dl key={item.cinemaId}>
                <dt>{item.name}</dt>
                <dd>{item.address}</dd>
              </dl>
              )
          }
      </div>
    )
  }

  // 不需要ref，直接用event，事件对象，event.target事件源，就直接拿到input的内容了。
  // handleInput(event){  //这里有this指向问题，改成箭头函数？
  handleInput = (event) => {
    // console.log("input",event.target.value) 

    // this.state.cinemaList.filter(item=>item.includes(event.target.value))这里要注意item是对象不是字符串，所以要用item.name来判断
  //  var newlist = this.state.cinemaList.filter(item=>item.name.includes(event.target.value))

  // 实现name和address里都包含某个字符，且不区分大小写的情况，上面一句是严格判断
  //  var newlist = this.state.cinemaList.filter(item => item.name.toUpperCase().includes(event.target.value.toUpperCase()) || item.address.toUpperCase().includes(event.target.value.toUpperCase()))

  // 备份数据用来做过滤判断，就是废内存
   var newlist = this.state.bakcinemaList.filter(item => item.name.toUpperCase().includes(event.target.value.toUpperCase()) || item.address.toUpperCase().includes(event.target.value.toUpperCase()))

   console.log(newlist)

    this.setState({
      cinemaList:newlist // cinemaList每次都会被重新覆盖，方法1是用备份数组bakcinemaList来避免，废内存。方法2把输入框value值跟react当前组件绑在一起，value值和组件状态一起改变，后面受控组件讲完再优化。
    })
  }
}


/* // filter复习
var arr = ['aaa','abb','ccc']

var newarr = arr.filter(item=>item.includes("b")) //里面是判断条件
console.log(newarr) */