import './App.less'
import { Button } from 'antd'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import UseState from './React-Hooks/use-state'
import UseEffect from './React-Hooks/use-effect'
import UseRef from './React-Hooks/use-ref'
import UseContext from './React-Hooks/use-context'
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

        <div>
          <Route path="/" exact component={UseState}/>
          <Route path="/use-effect" component={UseEffect}/>
          <Route path="/use-ref" component={UseRef}/>
          <Route path="/use-context" component={UseContext}/>
        </div>
      </Router>
    </div>
  )
}

export default App
