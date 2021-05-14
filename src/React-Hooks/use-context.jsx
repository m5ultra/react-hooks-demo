//import { useContext, useRef, createContext, useState } from 'react'
import { useRef, useState } from 'react'
import { Typography, Input, Button } from 'antd'
import { MyContext } from './useContext/myContext'
import Child2 from './useContext/Child2'

const { Title } = Typography

//const MyContext = createContext()
function UseContext() {
  const inputEl = useRef(null)
  const [count, setCount] = useState(10)
  return (
    <>
      <Title>useConText</Title>
      <Input ref={inputEl} style={{ marginBottom: '15px' }}/>
      <Button type={'dashed'} onClick={() => setCount(() =>
        setCount(inputEl.current.state.value)
      )}>Use Context</Button>
      <MyContext.Provider value={count}>
        <Child2/>
      </MyContext.Provider>
    </>
  )
}

//function Child() {
//  const num = useContext(MyContext)
//  return (
//    <Title level={3}>{num}</Title>
//  )
//}

export default UseContext
