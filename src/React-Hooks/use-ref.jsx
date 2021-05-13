import { useRef } from 'react'
import { Typography, Input, Button } from 'antd'

const { Title } = Typography

function UseRef() {
  // 1.获取dom元素
  const inputEl = useRef(null)

  // 2.保存变量
  const save = useRef({ value: 'abc' })
  return (
    <>
      <Title>useRef</Title>
      <Input ref={inputEl} placeholder="Basic usage" style={{ marginBottom: '15px' }}/>

      <Button onClick={() => console.log(inputEl.current.state.value)}>HandleGetInputEl</Button>

      <Button onClick={() => {
        save.current.value = inputEl.current.state.value
        console.log(save.current.value)
      }}>Handle</Button>
    </>
  )
}

export default UseRef
