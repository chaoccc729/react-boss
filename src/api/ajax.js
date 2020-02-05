/*
使用 axios 封装的 ajax 请求函数
函数返回的是 promise 对象
*/
import axios from 'axios';
export default function ajax(url = '', data = {}, type = 'GET') {
  if (type === 'GET') {
    // 准备 url query 参数数据
    let paramStr = ''; //数据拼接字符串
    Object.keys(data).forEach(key => {//key数组
      paramStr += key + '=' + data[key] + '&';
    })
    if (paramStr) {
      paramStr = paramStr.substring(0, paramStr.length-1);
      url = url + '?' + paramStr;
    }
    // 发送 get 请求
    return axios.get(url);
  } else {
    // 发送 post 请求
    return axios.post(url, data); // data: 包含请求体数据的对象
  }
}