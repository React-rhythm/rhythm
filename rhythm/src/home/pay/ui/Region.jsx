import React from 'react'
import { 
    PayWrap
} from './pay'
const Region = (props) => {
    return (
        <PayWrap>
            <label htmlFor='type'>登报区域 :</label>
            <input type="text" id='pay' placeholder='区域性报纸'/>
        </PayWrap>
    )
}

export default Region