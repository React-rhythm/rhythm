import React from 'react';
import {RegisterImgWrap} from '../ui/styledSuccess'
import icon from '../../assets/images/success.png'

function registerImg(props) {
    
    return (
        <>
        <RegisterImgWrap >
            <img src={icon} alt=""/>
            <div>恭喜你，注册成功！</div>
        </RegisterImgWrap>
        </>
        
    );
}

export default registerImg;