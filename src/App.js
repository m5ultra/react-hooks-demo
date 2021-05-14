import './App.less'
import { Button } from 'antd'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import UseState from './React-Hooks/use-state'
import UseEffect from './React-Hooks/use-effect'
import UseRef from './React-Hooks/use-ref'
import UseContext from './React-Hooks/use-context'
import UseMemo from './React-Hooks/use-memo'
import UseCallback from './React-Hooks/use-callback'
import UseImperativeHandle from './React-Hooks/use-imperative-handle'
import UseLayoutEffect from './React-Hooks/use-layout-effect'
import UseCustomHooks from './React-Hooks/customHook'
import './React-Hooks/style.less'
import { Typography } from 'antd'

const { Title } = Typography

function App() {
  return (
    <div className="App">
      <Title style={{ textAlign: 'center' }} level={2}>React Hooks
        Study</Title>
      <Router>
        <Button type={'primary'} size={'large'}><Link to="/">Use State</Link></Button>
        <Button type={'primary'} size={'large'}><Link to="/use-effect">Use Effect</Link></Button>
        <Button type={'primary'} size={'large'}><Link to="/use-ref">Use Ref</Link></Button>
        <Button type={'primary'} size={'large'}><Link to="/use-context">Use Context</Link></Button>
        <Button type={'primary'} size={'large'}><Link to="/use-memo">Use Memo</Link></Button>
        <Button type={'primary'} size={'large'}><Link to="/use-callback">Use Callback</Link></Button>
        <Button type={'primary'} size={'large'}><Link to="/use-imperative-handle">Use Imperative Handle</Link></Button>
        <Button type={'primary'} size={'large'}><Link to="/use-layout-effect">Use Layout Effect</Link></Button>
        <Button type={'primary'} size={'large'}><Link to="/use-custom-hook">Use Custom Hook(自定义Hook)</Link></Button>
        <div>
          <Route path="/" exact component={UseState}/>
          <Route path="/use-effect" component={UseEffect}/>
          <Route path="/use-ref" component={UseRef}/>
          <Route path="/use-context" component={UseContext}/>
          <Route path="/use-memo" component={UseMemo}/>
          <Route path="/use-callback" component={UseCallback}/>
          <Route path="/use-imperative-handle" component={UseImperativeHandle}/>
          <Route path="/use-layout-effect" component={UseLayoutEffect}/>
          <Route path="/use-custom-hook" component={UseCustomHooks}/>
        </div>
      </Router>
    </div>
  )
}

export default App
