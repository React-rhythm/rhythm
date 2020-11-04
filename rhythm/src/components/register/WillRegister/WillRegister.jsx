import React from 'react';
import {WillLRWrap} from './StyleWillRegister'
const WillRegister =(props)=> {
        console.log(props);
        return (
            <WillLRWrap onClick={props.onUploading1}>
                注册
            </WillLRWrap>
        );
   
}

export default WillRegister;