import React from 'react'
import { 
    PayWrap
} from './pay'
const State = (props) => {
    return (
        <PayWrap>
            <label htmlFor='type'>案 &ensp;&ensp;&ensp; 号 :</label>
            <input type="text" id='pay' placeholder='正常'/>
        </PayWrap>
    )
}

export default State