// redux最核心管理对象模块
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import reducers from './reducers'


//暴露store对象
export default createStore(reducers,composeWithDevTools(applyMiddleware(thunk)))