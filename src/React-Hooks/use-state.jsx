import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Typography, Button } from 'antd'

const { Title } = Typography

function UseState() {
  // 1.基本类型
  const [count, setCount] = useState(0)
  // 2.obj
  const [obj, setObj] = useState({ name: 'Dendi', age: 88 })
  // 3.array
  const [arr, setArr] = useState([1, 2, 3,])
  // 4.function return 基本类型 对象 数组
  const [func, setFunc] = useState(() => {
    return 1
  })
  return (
    <>
      <Title levle={2}>{count}</Title>
      <Button onClick={() => setCount(count + 3)}>HandleCountChange</Button>
      <br/>
      <Title levle={2}>{obj.name}</Title>
      <Title levle={2}>{obj.age}</Title>
      <Button onClick={() => setObj({ ...obj, ...{ name: 'Dendi2', age: 77 } })}>HandleObjChange</Button>
      <Button onClick={() => setObj(Object.assign({}, obj, { name: 'Dendi2' }))}>HandleObjChange</Button>
      <br/>
      <ul>
        {
          arr.map(val => <li>{val}</li>)
        }
      </ul>
      <Button onClick={() => setArr([...arr, ...['a', 'b', 'c']])}>HandleChangeArray</Button>
      <br/>
      <Title levle={2}>{func}</Title>
      // setFunc
      <Button onClick={() => setFunc(func + 10)}>HandleFuncChange</Button>
    </>

  )
}

export default UseState
