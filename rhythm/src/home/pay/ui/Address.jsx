import React from 'react'
import { 
    PayWrap
} from './pay'
const Address = (props) => {
    return (
        <PayWrap>
            <label htmlFor='type'>寄送地址 :</label>
            <input type="text" id='pay' placeholder='请输入地址'/>
        </PayWrap>
    )
}

export default Address