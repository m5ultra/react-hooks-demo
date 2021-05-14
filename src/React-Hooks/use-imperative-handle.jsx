/**
 * useImperativeHandle(ref, createHandle, [deps])
 */
import { useImperativeHandle, forwardRef, useRef } from 'react'
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
  const inputRef = useRef(null)
  const spanEl = useRef(null)
  // 1.forwardRef
  useImperativeHandle(ref, () => ({
    value: '123',
    focus: () => {
      inputRef.current.focus()
    },
    spanEl
  }), [])
  return (
    <>
      {/*index.js:1 Warning: Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?*/}
      {/*<Title ref={ref} level={3}>123</Title>*/}
      <Title level={3}><span ref={spanEl}>{123}</span></Title>
      <Title level={3}>abc</Title>
      <Input ref={inputRef}/>
    </>
  )
})
export default UseImperativeHandle
