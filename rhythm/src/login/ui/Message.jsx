import React from 'react';
import { NavBar, Icon,List, InputItem, WhiteSpace,Toast } from 'antd-mobile';
import { createForm } from 'rc-form';
import LoginIcon from './LoginIcon'
// import {MessageLoginWrap} from './StyledLogin'
// import WillLogin from '../../components/login/WillLogin/WillLogin'
function Message(props) {
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
                onLeftClick={() => {props.history.goBack()}}

            >验证码登录</NavBar>
                 <LoginIcon></LoginIcon>
                 {/* <MessageLoginWrap>
                    <div className='inp'> <input type="text"/></div>
                    <div className='inp'> <input type="text"/></div>
                    <WillLogin></WillLogin>
                 </MessageLoginWrap> */}
                 <List renderHeader={() => 'Confirm when typing'}>
                    <InputItem
                        type="phone"
                        placeholder="input your phone"
                        error={this.state.hasError}
                        onErrorClick={this.onErrorClick}
                        onChange={this.onChange}
                        value={this.state.value}
                    >手机号码</InputItem>
                </List>
                 

        </div>
    );
}

export default Message;