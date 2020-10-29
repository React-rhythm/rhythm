import React from 'react'
import { 
    PayWrap
} from './pay'
const Invoice = (props) => {
    return (
        <PayWrap>
            <label htmlFor='type'>发票明细 :</label>
            <input type="text" id='pay' placeholder='请输入发票明细'/>
        </PayWrap>
    )
}

export default Invoice