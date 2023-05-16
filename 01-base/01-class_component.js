/* // 类的基本语法
    class Test {
        constructor(){
            this.a = 'class_11111';
        }

        testa(){
            console.log("testa-class")
        }
    } 

    class ChildTest extends Test{
        testb(){
            console.log("testb-class")
        }
    }

    // var obj = new Test()
    // console.log(obj.testa())
    var obj = new ChildTest()

    obj.testa()
    obj.testb()
    console.log(obj.a) 
*/



import React from "react"


// 创建了一个组件类App,类名自取，大写开头，但是后面的继承是必须的固定格式
// 固定函数render()渲染这个组件类，需要有一个返回值return
class App extends React.Component{
    render(){
        // return后面直接回车下面的内容就不会运行了，加个括号更可靠（js语法内容）
        return(
            // 报错：Adjacent JSX elements must be wrapped in an enclosing tag，最外层必须有且只有一个大标签，里面可以叠加
            <section>
                <div>
                    <b>Hello Class Component!</b>
                    <ul>
                        <li>11111111</li>
                        <li>11111111</li>
                        <li>11111111</li>
                    </ul>
                    <div>层2</div>
                </div>
                <div>层1</div>
            </section>
        )
    }
}

// 导出App组件类
export default App


