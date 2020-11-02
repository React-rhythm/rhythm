import React from 'react'
import { 
    PayWrap
} from './pay'
const Party = (props) => {
    return (
        <PayWrap>
            <label htmlFor='type'>当&ensp;事&ensp;人 :</label>
            <input type="text" id='pay' placeholder='请输入当事人'/>
        </PayWrap>
    )
}

export default Party