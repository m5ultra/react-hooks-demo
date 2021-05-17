import { useContext } from 'react'
import { Typography, Button } from 'antd'
import { MyContext } from './reducer'

const { Title } = Typography

const ComB = () => {
  const [rootState, dispatch] = useContext(MyContext)
  const { state, location } = rootState
  return (
    <>
      <Title level={3}>ComB</Title>
      <hr />
      <Title level={3}>
        ComB:location是{state.country}, city是{state.city}
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
      <Button
        onClick={() => dispatch({ type: 'ACTION_B', city: 'Manchester' })}
      >
        change City
      </Button>
    </>
  )
}

export default ComB
