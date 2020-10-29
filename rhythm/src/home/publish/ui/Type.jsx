import React from 'react'
import { 
    TypeWrap,
} from './publish'
const Type = (props) => {
    return (
        <TypeWrap>
            <label htmlFor='type'>公告类别 :</label>
            <input type="text" id='type' placeholder='请输入公告类型'/>
        </TypeWrap>
    )
}

export default Type