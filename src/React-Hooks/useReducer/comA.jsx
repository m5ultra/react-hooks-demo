import { useContext } from 'react'
import { MyContext } from './reducer'
import { Typography, Button } from 'antd'
import ComAChild from './comAChild'

const { Title } = Typography

const ComA = () => {
  const [rootState, dispatch] = useContext(MyContext)
  const { state, location } = rootState
  console.log(state, location, 'state')
  return (
    <>
      <Title level={3}>ComA</Title>
      <hr />
      <Title level={3}>
        ComA:name是{state.name}, age是{state.age}
      </Title>
      <Title level={3}>
        ComA:location是{location.country}, city是{location.city}
      </Title>
      <Button onClick={() => dispatch({ type: 'setName', name: 'Dendi2' })}>
        Set Name
      </Button>
      <Button onClick={() => dispatch({ type: 'setAge', age: 18 })}>
        Set Age
      </Button>
      <ComAChild />
    </>
  )
}

export default ComA
