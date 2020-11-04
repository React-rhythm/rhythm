import React from 'react';
import {WillLRWrap} from './StyleWillLogin'
const WillLogin =(props)=> {
   
        return (
            <WillLRWrap onClick={props.onLogin()}>
                登录
            </WillLRWrap>
        );
   
}

export default WillLogin;