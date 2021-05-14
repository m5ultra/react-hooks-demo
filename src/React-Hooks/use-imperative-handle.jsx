/**
 * useImperativeHandle(ref, createHandle, [deps])
 */
import { useImperativeHandle, forwardRef, useRef, useState } from 'react'
import { Typography, Button, Input } from 'antd'

const { Title } = Typography

function UseImperativeHandle() {
  const el = useRef(null)
  return (
    <>
      <Title>useImperativeHandle</Title>
      <Child ref={el}/>
      <Button onClick={() => {
        el.current.focus()
        console.log(el, 'el')
      }}>获取子元素DOM节点</Button>
    </>
  )
}

const Child = forwardRef((props, ref) => {
  const [count, setCount] = useState(0)
  const [num, setNum] = useState(100)
  const inputRef = useRef(null)
  const spanEl = useRef(null)
  // 1.forwardRef
  useImperativeHandle(ref, () => ({
    value: '123',
    focus: () => {
      inputRef.current.focus()
    },
    spanEl,
    count,
    num
    // 第三个参数 监控某个值变化的时候 才会把新的结果传给父组件
  }), [num])
  return (
    <>
      {/*index.js:1 Warning: Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?*/}
      {/*<Title ref={ref} level={3}>123</Title>*/}
      <Title level={3}><span ref={spanEl}>{123}</span></Title>
      <Title level={3}>abc</Title>
      <Input ref={inputRef}/>
      <Button onClick={() => {
        setNum(num + 5)
      }}>Change Num</Button>
      <Button onClick={() => {
        setCount(count + 1)
      }}>Change Count</Button>
    </>
  )
})
export default UseImperativeHandle
