import React, {useState} from 'react'

export default function App() {
    const [name,setName] = useState("kerwin")
    const [age,setAge] = useState([''])


  return (
    <div>
      <button onClick={()=>{
        setName("xiaoming")
        setAge([
            {
                id:1,
                vr:"aaa"
            },
            {
                id:2,
                vr:'bbb'  
            },
            {
                id:3,
                vr:'ccc'
            }
        ])
        console.log(typeof(age))
      }}>click</button>
      <br/> 
      name:{name}
      <br/>
      {
        age.map(item =>
            <ul key={(item.id)}>
                <li>
                    {item.vr}
                </li>
            </ul>)
      }
      
    </div>
  )
}
