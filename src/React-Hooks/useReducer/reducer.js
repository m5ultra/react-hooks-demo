import { useReducer, createContext } from 'react'
import combineReducers from 'react-combine-reducers'

export const MyContext = createContext()
const defaultState = { name: 'Dendi', age: 99 }
// 使用react-combine-reducers 可以拆分不同reducer文件
const initialIdentity = {
  name: 'Harry'
}

const initialLocation = {
  country: 'UK',
  city: 'London'
}

const myReducer = (state, action) => {
  switch (action.type) {
    case 'setName': {
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
const identityReducer = (state, action) => {
  switch (action.type) {
    case 'ACTION_A':
      return { ...state, name: 'Puli' };
    default: return state;
  }
}

const locationReducer = (state, action) => {
  switch (action.type) {
    case 'ACTION_B':
      return { ...state, city: action.city };
    default: return state;
  }
}

const [profileReducer, initialProfile] = combineReducers({
  identity: [identityReducer, initialIdentity],
  location: [locationReducer, initialLocation],
  state: [myReducer, defaultState]
})

const Reducer = (props) => {
  const [rootState, dispatch] = useReducer(profileReducer, initialProfile)
  console.log(rootState, 'rootState')
  return (
    <MyContext.Provider value={[rootState, dispatch]}>
      {props.children}
    </MyContext.Provider>
  )
}

export default Reducer


