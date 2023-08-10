//从原来cinema.js里copy过来修改
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
        }
       
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
          })
    
          //打印log
          console.log(this.state.cinemaList)
        })
        .catch(err=>{
          console.log(err)
        })
      }
    
      //后面讲生命周期函数，更适合发送ajax请求
      render() {
        return (
          <div>
              <input/>
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
    

    //   handleInput = (event) => {
     
    //   // 备份数据用来做过滤判断，就是废内存
    //    var newlist = this.state.bakcinemaList.filter(item => item.name.toUpperCase().includes(event.target.value.toUpperCase()) || item.address.toUpperCase().includes(event.target.value.toUpperCase()))
    
    //    console.log(newlist)
    
    //     this.setState({
    //       cinemaList:newlist 
    //     })
        
    //       //打印log,这里打印的不是最新状态
    //       console.log(this.state.cinemaList)
    //   }

    }
