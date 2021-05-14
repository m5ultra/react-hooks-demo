import { useCallback, useState } from 'react'
import { Typography, Button } from 'antd'

const { Title } = Typography

function UseCallback() {
  const [count, setCount] = useState(9)
  const [num, setNum] = useState(10)
  const cb = useCallback(() => {
    console.log(count)
    return count
  }, [num])
  return (
    <>
      <Title level={1}>useCallback</Title>
      <br/>
      <Title level={3}>{count}</Title>
      <Title level={3}>{cb()}</Title>
      <Button onClick={() => {
        setCount(count + 1)
      }}>setCount</Button>
      <Button onClick={() =>
        setNum(num + 1)
      }>setNum</Button>
    </>
  )
}

export default UseCallback
