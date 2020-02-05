// 包含多个reducer函数（根据旧state和action返回新state）
import {combineReducers} from 'redux';
import {
  AUTH_SUCCESS,
  ERROR_MSG,
} from './action-types';
const initUser = {
  username:'',
  type:'',
  msg:'',//错误提示信息
}
function user(state=initUser, action) {//产生user状态
  switch (action.type) {
    case AUTH_SUCCESS:
      return {...state, ...action.data};
    case ERROR_MSG:
      return {...state, msg: action.data};
    default:
      return state;
  }
}

// 返回合并后的 reducer 函数
export default combineReducers({
  user,
})