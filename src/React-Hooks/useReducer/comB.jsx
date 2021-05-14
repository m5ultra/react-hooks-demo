import { useContext } from 'react'
import { Typography, Button } from 'antd'
import { MyContext } from './reducer'

const { Title } = Typography

const ComB = () => {
  const { state, dispatch } = useContext(MyContext)
  return (
    <>
      <Title level={3}>ComB</Title>
      <hr/>
      <Title level={3}>ComA:name是{state.name}, age是{state.age}</Title>
      <Button onClick={() => dispatch({ type: 'setName', name: 'Dendi2' })}>Set Name</Button>
      <Button onClick={() => dispatch({ type: 'setAge', age: 18 })}>Set Age</Button>
    </>
  )
}

export default ComB
