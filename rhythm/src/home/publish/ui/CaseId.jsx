import React from 'react'
import { 
    TypeWrap,
} from './publish'
const CaseId = (props) => {
    return (
        <TypeWrap>
            <label htmlFor='type'>案 &ensp;&ensp;&ensp; 号 :</label>
            <input type="text" id='type' placeholder='中文汉字、阿拉伯数字及括号组成'/>
        </TypeWrap>
    )
}

export default CaseId