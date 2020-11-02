import React from 'react';
import {LoginInput1Wrap} from './StyledLogin'
import WillLogin from '../../components/login/WillLogin/WillLogin'
function LoginInput1(props) {
   
    
    return (
        <LoginInput1Wrap>
            <div className='inp'> <input type="text" placeholder="请输入用户名/身份证" onBlur={props.onIdcard}/></div>
            <div className='inp'><input type="text" placeholder="密码" onBlur={props.onMima}/><span onClick={props.onForget()}>忘记密码</span></div>
            
            <WillLogin {...props}></WillLogin>
            <div><span onClick={props.onMessage()}>短信验证登录</span><span onClick={props.onRegister1()}>立即注册</span></div>
        </LoginInput1Wrap>
    );
}

export default LoginInput1;