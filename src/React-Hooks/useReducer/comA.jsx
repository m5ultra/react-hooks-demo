import { useContext } from 'react'
import { MyContext } from './reducer'
import { Typography, Button } from 'antd'
import ComAChild from './comAChild'

const { Title } = Typography

const ComA = () => {
  const { state, dispatch } = useContext(MyContext)
  return (
    <>
      <Title level={3}>ComA</Title>
      <hr/>
      <Title level={3}>ComA:name是{state.name}, age是{state.age}</Title>
      <Button onClick={() => dispatch({ type: 'setName', name: 'Dendi2' })}>Set Name</Button>
      <Button onClick={() => dispatch({ type: 'setAge', age: 18 })}>Set Age</Button>
      <ComAChild/>
    </>
  )
}

export default ComA
