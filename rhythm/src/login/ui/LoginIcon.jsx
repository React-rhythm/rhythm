import React from 'react';
import {LoginIconWrap} from './StyledLogin';
import icon from '../../assets/images/login.png'
function LoginIcon(props) {
    return (
        <LoginIconWrap>
            <img src={icon} alt=""/>
        </LoginIconWrap>
    );
}

export default LoginIcon;