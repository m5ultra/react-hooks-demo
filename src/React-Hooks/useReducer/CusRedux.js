import ComA from './comA'
import ComB from './comB'
import Reducer from './reducer'
// TODO reducer 拆分 模拟combinerReducer
// combineReducer https://stackoverflow.com/questions/59200785/react-usereducer-how-to-combine-multiple-reducers
// 第三方库 https://www.npmjs.com/package/react-combine-reducers
// 不支持插件
// 没有调试工具 类似redux-dev-tools

const CusRedux = () => {
  return (
    <>
      <Reducer>
        <ComA/>
        <ComB/>
      </Reducer>
    </>
  )
}

export default CusRedux

