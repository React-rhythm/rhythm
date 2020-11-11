import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { NavBar, Icon, List, InputItem, Toast, Modal } from 'antd-mobile';
import LoginIcon from '../ui/LoginIcon'
import { WillLRWrap } from '../../components/login/WillLogin/StyleWillLogin'
import { MessageLoginWrap } from '../ui/StyledLogin'
import http from '../../utils/http';
const alert = Modal.alert
@withRouter
class MessageLogin extends Component {

  state = {
    hasError: false,
    value: '',
    linkStyle: { color: '#2493ed' },
    flag: 1111,
    username: '',
    status: this.props.location.state.status,
    btnText:'获取验证码',
    seconds: 60, //称数初始化
    liked: true //获取验证码文案
  }

  //弹出框
  showAlert = () => {
    const alertInstance = alert('律动', '账号或者验证码错误', [
      { text: '取消', onPress: () => console.log('取消'), style: 'default' },
      { text: '确认', onPress: () => console.log('确认') },
    ]);
    setTimeout(() => {
      // 可以调用close方法以在外部close
      console.log('auto close');
      alertInstance.close();
    }, 500000);
  };
  //错误显示
  onErrorClick = () => {
    if (this.state.hasError) {
      Toast.info('手机号不正确');
    }
  }

  //输入变化表单验证
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

  //失去焦点获取用户名的值
  onBlurName = (e) => {

    this.setState({
      username: e,
    })
  }

  //获取验证码
  getCode = async () => {
    let siv = setInterval(() => {
      this.setState({
        liked:false,
        seconds:this.state.seconds - 1,  
      },() => {
        if(this.state.seconds == 0){
          clearInterval(siv);
          this.setState({
            liked:true,
            secounds:60
          })
        }
      });  
    },1000);  
    let phoneid = document.querySelector('#phone').value
    console.log(phoneid);
    let res = await http.get("http://123.57.109.224:8080/userInfo/register/findPhone/" + phoneid)
    this.setState({
      flag: res.flag,
    })

  }

  //登录跳转 判断跳转到不同的页面  并且传对应的值
  handleLogin = async () => {
    let code = await document.querySelector('#code').value
    console.log(code);
    if (this.state.status === 1 && this.state.flag == code) {
      this.props.history.push('/laywer', { roles: 1, username: this.state.username })
    } else if (this.state.status === 0 && this.state.flag == code) {
      this.props.history.push('/litigant', { roles: 0, username: this.state.username })
    } else if (this.state.flag == code) {
      this.props.history.push('/home', { roles: -1, username: this.state.username })
    } else {
      this.showAlert()
    }
  }
  render() {
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
                type="text"
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
                id="code"
              >
                {
                  this.state.liked
                    ?
                    <span className='huoqu' style={this.state.linkStyle} onClick={this.getCode}>获取验证码</span>
                    :
                    <span style={{fontSize:"0.14rem"}}>{this.state.seconds + ' s 后发送'}</span>
                }
                </InputItem>
            </List>
          </form>
          <WillLRWrap onClick={this.handleLogin}>登录</WillLRWrap>
        </MessageLoginWrap>

      </div>
    );
  }
}

export default MessageLogin;