/*用户注册路由组件*/
import React, {Component} from 'react'
import {
  NavBar,
  WingBlank,
  List,
  InputItem,
  WhiteSpace,
  Radio,
  Button
} from 'antd-mobile'
import Logo from '../../components/logo/logo'
export default class Register extends Component {
  state = {
    username: '',//用户名
    password: '',//密码
    password2: '',//确定
    type: 'hunter'//用户类型
  }
  // 输入框/单选框变化, 更新state
  handleChange = (name, value) => {
    this.setState({[name]: value})
  }
  // 跳转到 login 路由
  toLogin = () => {
    this.props.history.replace('/login')
  }
  // 注册
  register = () => {
    console.log(JSON.stringify(this.state))
  }
  render() {
    const {type} = this.state
    return (
    <div>
      <NavBar>BOSS&nbsp;直&nbsp;聘</NavBar>
      <Logo/>
      <WingBlank>
        <List>
          <WhiteSpace/>
          <InputItem placeholder='输入用户名' onChange = {val => this.handleChange('username', val)}>用户名:</InputItem>
          <WhiteSpace/>
          <InputItem type='password' placeholder='输入密码' onChange = {val => this.handleChange('password', val)}>密&nbsp;&nbsp;&nbsp;码:</InputItem>
          <WhiteSpace/>
          <InputItem type='password' placeholder='输入确认密码' onChange = {val => this.handleChange('password2', val)}>确认密码:</InputItem>
          <WhiteSpace/>
          <List.Item>
            <span style={{marginRight: 30}}>用户类型:</span>
            <Radio checked={this.state.type === 'hunter'} onChange = {() => {this.handleChange('type', 'hunter')}}>求职</Radio>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Radio checked={this.state.type==='boss'} onChange={() => {this.handleChange('type', 'boss')}}>老板</Radio>
          </List.Item>
          <WhiteSpace/>
          <Button type='primary' onClick={this.register}>注&nbsp;&nbsp;&nbsp;册 </Button>
          <WhiteSpace/>
          <Button onClick={this.toLogin}>登录</Button>
        </List>
      </WingBlank>
    </div>
    )
  }
}