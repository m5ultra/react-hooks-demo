import {useMemo} from 'react'
import { Typography } from 'antd'

const { Title } = Typography

function ChildMemo({num, count}) {
  const res = useMemo(() => {
    return {num, count}
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [num])
  return (
    <>
      <Title level={3}>
        这里是子组件
      </Title>
      <Title level={3}>子组件状态count{res.count} ------ num{res.num}</Title>
    </>
  )
}

export default ChildMemo
