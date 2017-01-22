import { createStore, applyMiddleware } from 'redux'
import reducers from '../reducers'
import thunk from 'redux-thunk'
const finalCreateStore = applyMiddleware(thunk)(createStore);        // 中间件替换为 thunk
export default finalCreateStore(reducers)
