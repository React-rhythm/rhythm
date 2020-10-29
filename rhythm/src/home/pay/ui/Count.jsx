import React from 'react'
import { 
    PayWrap
} from './pay'
const Count = (props) => {
    return (
        <PayWrap>
            <label htmlFor='type'>费用标准 :</label>
            <input type="text" id='pay'/>
        </PayWrap>
    )
}

export default Count