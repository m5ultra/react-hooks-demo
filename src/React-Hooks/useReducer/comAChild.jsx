import { useContext } from 'react'
import { MyContext } from './reducer'
import { Typography, Button } from 'antd'

const { Title } = Typography

const ComAChild = () => {
  const { state, dispatch } = useContext(MyContext)
  return (
    <>
      <Title level={5}>ComAChild</Title>
      <hr/>
      <Title level={5}>ComAChild:name是{state.name}, age是{state.age}</Title>
      <Button onClick={() => dispatch({ type: 'setName', name: 'Dendi2' })}>Set Name</Button>
      <Button onClick={() => dispatch({ type: 'setAge', age: 18 })}>Set Age</Button>
    </>
  )
}

export default ComAChild
