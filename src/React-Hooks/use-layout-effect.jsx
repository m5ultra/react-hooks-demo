/**
 * useLayoutEffect
 * 和 useEffect作用一样， 在组件生产过程中 可以做一些事情
 * 不同点：
 * 1.执行的时间不同，useEffect是在componentDidMount以后执行， useLayoutEffect在浏览器绘制之前执行(会阻塞组件挂载， 慎用)
 */
import {Typography} from 'antd'

const {Title} = Typography

const UseLayoutEffect = () => {
  return (
    <>
      <Title>useLayoutEffect</Title>
    </>
  )
}

export default UseLayoutEffect
