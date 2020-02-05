// 包含多个action creator
// 异步同步 action
import {
  reqRegister,
  reqLogin,
} from '../api';

import{
  AUTH_SUCCESS,
  ERROR_MSG
} from './action-types'

//授权成功的同步action
const authSuccess = (user) => ({type: AUTH_SUCCESS, data: user});
//错误提示信息同步action
const errorMsg = (msg) => ({type: ERROR_MSG, data: msg});
//注册异步
export const reqRegister = () => {
  return async dispatch => {
    //发送注册请求
    const response = await reqRegister(user);
    const result = response.data;
    if(response.code === 0){
      dispatch(authSuccess(result.data));//分发授权成功同步action
    } else {
      dispatch(errorMsg(result.msg)); //分发失败提示信息同步action
    }
  }
} 

//登录异步
export const reqLogin = () => {
  return async dispatch => {
    //发送注册请求
    const response = await reqLogin(user);
    if (response.code == 0) {

    } else {

    }
  }
}