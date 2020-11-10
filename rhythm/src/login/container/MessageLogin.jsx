import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { NavBar, Icon, List, InputItem, Toast } from 'antd-mobile';
import LoginIcon from '../ui/LoginIcon'
import {WillLRWrap} from '../../components/login/WillLogin/StyleWillLogin'
import { MessageLoginWrap } from '../ui/StyledLogin'
import http from '../../utils/http';
@withRouter
class MessageLogin extends Component {
  
  state = {
    hasError: false,
    value: '',
    linkStyle: { color: '#2493ed' },
    flag:0,
    username:'',
    status:this.props.location.state.status,
  }
  onErrorClick = () => {
    if (this.state.hasError) {
      Toast.info('手机号不正确');
    }
  }
  onChange = (value) => {
    if (value.replace(/\s/g, '').length < 11) {
      this.setState({
        hasError: true,
      });
    } else {
      this.setState({
        hasError: false,
      });
    }
    this.setState({
      value,
    });
  }
  onBlurName=(e)=>{
   
    this.setState({
      username:e,
    })
  }
  getCode=async ()=>{
    let phoneid=document.querySelector('#phone').value
    let res=http.get("http://123.57.109.224:8080/userInfo/register/findPhone/"+phoneid)
    this.setState({
      flag:res.flag,
    })
    console.log(phoneid);
  }
  handleLogin=()=>{
    if(this.state.status===1&&this.state.flag===0){
      this.props.history.push('/laywer',{roles: 1,username:this.state.username})
  }else if(this.state.status===0&&this.state.flag===0){
      this.props.history.push('/litigant',{roles: 0,username:this.state.username})
  }else if(this.state.flag===0){
      this.props.history.push('/home',{roles: -1,username:this.state.username})
  }
  }
  render() {
    console.log(this.props);
    return (
      <div style={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',

      }}>
        <NavBar
          style={{
            height: '.44rem',
            color: '#333333',
            fontWeight: 'bold',
            fontSize: '0.17rem',
            fontFamily: 'PingFang',

          }}
          mode="light"
          icon={<Icon type="left" />}
          onLeftClick={() => { this.props.history.goBack() }}

        >短信验证登录</NavBar>
        <LoginIcon></LoginIcon>
        <MessageLoginWrap>
          <form action="">
            <List >
              <InputItem
                type="phone"
                placeholder="请输入手机号"
                error={this.state.hasError}
                onErrorClick={this.onErrorClick}
                onChange={this.onChange}
                onBlur={this.onBlurName}
                maxLength="13"
              // value={this.state.value}
              id="phone"
              >手机号码</InputItem>
              <InputItem
                type="text"
                placeholder="请输入验证码"
                maxLength="4"
              ><span style={this.state.linkStyle} onClick={this.getCode}>获取验证码</span></InputItem>
            </List>
          </form>
          <WillLRWrap onClick={this.handleLogin}>登录</WillLRWrap>
        </MessageLoginWrap>

      </div>
    );
  }
}

export default MessageLogin;