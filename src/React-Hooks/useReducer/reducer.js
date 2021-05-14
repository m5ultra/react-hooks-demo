import { useReducer, createContext } from 'react'

export const MyContext = createContext()
const myReducer = (state, action) => {
  switch (action.type) {
    case'setName': {
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
}
const defaultState = { name: 'Dendi', age: 99 }
const Reducer = (props) => {
  const [state, dispatch] = useReducer(myReducer, defaultState)
  return (
    <MyContext.Provider value={{ state, dispatch }}>
      {props.children}
    </MyContext.Provider>
  )
}

export default Reducer


