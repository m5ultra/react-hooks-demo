import { useState } from 'react'
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
      <Title>useState</Title>
      <Title level={2}>{count}</Title>
      <Button type={'dashed'} onClick={() => setCount(count + 3)}>HandleCountChange</Button>
      <br/>
      <Title level={2}>{obj.name}</Title>
      <Title level={2}>{obj.age}</Title>
      <Button type={'dashed'} onClick={() => setObj({ ...obj, ...{ name: 'Dendi2', age: 77 } })}>HandleObjChange</Button>
      <Button type={'dashed'} onClick={() => setObj(Object.assign({}, obj, { name: 'Dendi2' }))}>HandleObjChange</Button>
      <br/>
      <ul>
        {
          arr.map(val => <li key={val}>{val}</li>)
        }
      </ul>
      <Button type={'dashed'} onClick={() => setArr(() => {
        arr.push('Dendi')
        return [...arr]
      })}>HandleChangeArray</Button>
      <br/>
      <Title level={2}>{func}</Title>
      {/*setFunc 设置*/}
      <Button type={'dashed'} onClick={() => setFunc(func + 10)}>HandleFuncChange</Button>
    </>

  )
}

export default UseState
