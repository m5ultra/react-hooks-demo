import { useEffect, useState } from 'react'
import { Typography, Button } from 'antd'

const { Title } = Typography

function UseEffect() {
  // useEffect 可以接收两个参数 第二个参数设置为空数组 模拟componentDidMount componentWillUnmount
  useEffect(() => {
    alert('componentDidMount')
    return () => {
      alert('componentWillUnmount')
    }
  }, [])
  // 第二个参数不写 模拟componentDidUpdate 测试：改变count 触发componentDidUpdate
  useEffect(() => {
    alert('componentDidUpdate')
  })
  const [count, setCount] = useState(0)
  return (
    <>
      <Title>useEffect</Title>
      <Button onClick={() => setCount(count + 8)} type={'dashed'}>HandleCountChange</Button>
    </>
  )
}

export default UseEffect
