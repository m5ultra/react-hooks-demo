import ComA from './comA'
import ComB from './comB'
import Reducer from './reducer'
// TODO reducer 拆分 模拟combinerReducer
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
