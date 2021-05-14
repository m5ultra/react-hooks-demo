/**
 * useLayoutEffect
 * 和 useEffect作用一样， 在组件生产过程中 可以做一些事情
 * 不同点：
 * 1.执行的时间不同，useEffect是在componentDidMount以后执行， useLayoutEffect在浏览器绘制之前执行(会阻塞组件挂载， 慎用)
 *
 */
import {useEffect, useLayoutEffect, useState} from 'react'
import {Typography, Button} from 'antd'

const {Title} = Typography
// 1.创建过程先执行useLayoutEffect 后执行useEffect
// 2.更新过程 也是先执行useLayoutEffect 后执行useEffect
const UseLayoutEffect = () => {
  const [count, setCount] = useState()
  useLayoutEffect(() => {
    console.log('useLayoutEffect')
  })
  useEffect(() => {
    console.log('useEffect')
  })
  return (
    <>
      <Title>useLayoutEffect</Title>
      <Button onClick={() => {
        setCount(count + 3)
      }}>Set Count</Button>
    </>
  )
}

export default UseLayoutEffect
