import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { NavBar, Icon,List, InputItem, Toast } from 'antd-mobile';

import LoginIcon from '../ui/LoginIcon'
// import Message from '../ui/Message'
import WillLogin from '../../components/login/WillLogin/WillLogin'
import {MessageLoginWrap} from '../ui/StyledLogin'
@withRouter
class MessageLogin extends Component {
    state = {
        hasError: false,
        value: '',
        linkStyle:{color:''}
      }
      onErrorClick = () => {
        if (this.state.hasError) {
          Toast.info('Please enter 11 digits');
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

      handleStyle=()=>{
          this.setState({
              linkStyle:{color:'#2493ed'}
          })
      }
    render() {
        return (
            <div style={{height:'100%',
            display:'flex',
            flexDirection:'column',
            
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
                onLeftClick={() => {this.props.history.goBack()}}

            >短信验证登录</NavBar>
                 <LoginIcon></LoginIcon>
                 {/* <MessageLoginWrap>
                    <div className='inp'> <input type="text"/></div>
                    <div className='inp'> <input type="text"/></div>
                    <WillLogin></WillLogin>
                 </MessageLoginWrap> */}
                 <MessageLoginWrap>
                 <form action="">
                 <List >
                    <InputItem
                        type="phone"
                        placeholder="请输入手机号"
                        error={this.state.hasError}
                        onErrorClick={this.onErrorClick}
                        onChange={this.onChange}
                        // value={this.state.value}
                    >手机号码</InputItem>
                    <InputItem
                        type="password"
                        placeholder="请输入验证码"
                        error={this.state.hasError}
                        onErrorClick={this.onErrorClick}
                        onChange={this.onChange}
                       
                    ><span style={this.state.linkStyle} onMouseEnter={this.handleStyle} >获取验证码</span></InputItem>
                </List>
                </form>
                <WillLogin></WillLogin>
                </MessageLoginWrap>

        </div>
        );
    }
}

export default MessageLogin;