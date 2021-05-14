/**
 * 1.useReducer 和 redux 中的reducer是一样的 说白了就是一个函数
 * 2.useReducer() 是个函数 接收三个参数 第一个是reducer 第二个是初始值 第三个参数是init
 * 3.useReducer() 返回一个数组 第一个是state 第二个是dispatch
 *
 * 4. const [state, dispatch] = useReducer(reducer,初始值)
 */
import { useReducer } from 'react'
import { Typography, Button } from 'antd'

const { Title } = Typography
const UseReducer = () => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type){
      case'setName':{
        return {
          ...state,
          name: action.name
        }
      }
      case 'setAge': {
        return {
          ...state,
          age: action.age
        }
      }
      default: {
        return state
      }
    }
  }, {name: 'Dendi', age: 18})
  return (
    <>
      <Title>useReducer</Title>
      <hr/>
      <Title>{state.name} + {state.age}</Title>
      <Button onClick={() => {dispatch({type:'setName', name: 'Dendi2'})}}>
        Change Name
      </Button>
      <Button onClick={() => {dispatch({type: 'setAge', age: 88})}}>Change Age</Button>
    </>
  )
}

export default UseReducer
