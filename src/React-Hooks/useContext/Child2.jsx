import { useContext } from 'react'
import { MyContext } from './myContext'
import { Typography } from 'antd'

const { Title } = Typography

function Child2() {
  const num = useContext(MyContext)
  return (
    <Title levle={3}>{num}</Title>
  )
}

export default Child2
