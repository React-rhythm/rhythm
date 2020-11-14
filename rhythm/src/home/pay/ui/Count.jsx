import React from 'react'
import { 
    PayWrap
} from './pay'
const Count = (props) => {
    return (
        <PayWrap>
            <label htmlFor='type'>金 &ensp;&ensp;&ensp; 额 :</label>
            <input type="text" id='pay'/>
        </PayWrap>
    )
}

export default Count