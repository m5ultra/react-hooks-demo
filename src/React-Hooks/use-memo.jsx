import { useMemo, useState } from 'react'
import { Typography, Button } from 'antd'
import ChildMemo from './useMemo/ChildMemo'

const { Title } = Typography

/**
 * 把“创建”函数和依赖项数组作为参数传入 useMemo，它仅会在某个依赖项改变时才重新计算 memoized 值。这种优化有助于避免在每次渲染时都进行高开销的计算
 * @returns {JSX.Element}
 * @constructor
 */
function UseMemo() {
  const [count, setCount] = useState(0)
  const [num, setNum] = useState(1)
  // useMemo 接收一个创建函数 第二个参数是一个依赖数组
  let res = useMemo(() => {
    return { count, num }

  }, [count])
  return (
    <>
      <Title>useMemo</Title>
      <br/>
      <Title level={3}>父组件状态count{res.count} ------ {res.num}</Title>
      <Button type={'dashed'} onClick={() => setCount(count + 1)}>HandleCountChange</Button>
      <Button type={'dashed'} onClick={() => setNum(num + 1)}>HandleNumChange</Button>
      <br/>
      <ChildMemo num={num} count={count}/>
    </>
  )
}

export default UseMemo
