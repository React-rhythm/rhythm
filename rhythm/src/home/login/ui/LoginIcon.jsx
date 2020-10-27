import React from 'react';
import {LoginIconWrap} from './StyledLogin';
import icon from '../../../assets/images/login.png'
function LoginIcon(props) {
    return (
        <LoginIconWrap style={{background:"#f5f5f5"}}>
            <img src={icon} alt=""/>
        </LoginIconWrap>
    );
}

export default LoginIcon;