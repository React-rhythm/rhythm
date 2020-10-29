import React from 'react'
import { 
    PayWrap
} from './pay'
const Court = (props) => {
    return (
        <PayWrap>
            <label htmlFor='type'>所在法院 :</label>
            <input type="text" id='pay' placeholder='请输入所在法院'/>
        </PayWrap>
    )
}

export default Court