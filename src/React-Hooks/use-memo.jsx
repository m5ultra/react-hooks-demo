
import { useMemo, useState } from 'react'
import { Typography } from 'antd'

const { Title } = Typography

/**
 * 把“创建”函数和依赖项数组作为参数传入 useMemo，它仅会在某个依赖项改变时才重新计算 memoized 值。这种优化有助于避免在每次渲染时都进行高开销的计算
 * @returns {JSX.Element}
 * @constructor
 */
function UseMemo() {
  const [count, setCount] = useState(0)
  let [num, setNum] = useState(100)
  let res = useMemo(() => {
    return {count, num}
  }, [])
  return (
    <>
      <Title>useMemo</Title>
    </>
  )
}

export default UseMemo
