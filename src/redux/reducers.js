// 包含多个reducer函数（根据旧state和action返回新state）
import {combineReducers} from 'redux';

const initUser = {
  username:'',
  type:'',
  msg:'',//错误提示信息
}
function user(state=initUser, action) {//产生user状态
  switch (action.type) {
    default:
      return state;
  }
}

// 返回合并后的 reducer 函数
export default combineReducers({
  user,
})