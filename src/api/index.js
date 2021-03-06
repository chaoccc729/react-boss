/*
包含 n 个接口请求函数的模块
每个函数返回的都是 promise 对象
*/
import ajax from './ajax';
// 请求注册
export const reqRegister = (user) => ajax('/register', user, 'POST');
// 请求登陆
export const reqLogin = ({username, password}) => ajax('/login', {username, password}, 'POST');
//更新用户
export const reqUpdateUser = (user) => ajax('/update', user, 'POST');
