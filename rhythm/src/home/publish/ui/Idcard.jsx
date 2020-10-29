import React from 'react'
import { 
    TypeWrap,
} from './publish'
const Idcard = (props) => {
    return (
        <TypeWrap>
            <label htmlFor='type'>身份证号 :</label>
            <input type="text" id='type' placeholder='当事人身份证号'/>
        </TypeWrap>
    )
}

export default Idcard