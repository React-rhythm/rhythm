import React from 'react'
import { 
    TypeWrap,
} from './publish'
const Region = (props) => {
    return (
        <TypeWrap>
            <label htmlFor='type'>登报区域 :</label>
            <input type="text" id='type' placeholder='请输入登报区域'/>
        </TypeWrap>
    )
}

export default Region
