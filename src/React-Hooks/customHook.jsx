
import { useState } from 'react'
import { Typography, Button } from 'antd'

const { Title } = Typography
const useCus = (val, num) => {
  const [count, setCount] = useState(val)
  const add = () => {
    setCount(() => count + num)
  }
  return [count, add]
}
//
const UseCustomHooks = () => {
  const [count, add] = useCus(10, 2)
  return (
    <>
      <Title>CustomHook</Title>
      <Title level={3}>
        {count}
      </Title>
      <Button onClick={() => add()}>Add</Button>
    </>
  )
}

export default UseCustomHooks
