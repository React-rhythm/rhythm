import React from 'react'
import { 
    TypeWrap,
} from './publish'
const Court = (props) => {
    return (
        <TypeWrap>
            <label htmlFor='type'>法院名称 :</label>
            <input type="text" id='type' placeholder='请选择所在城市'/>
        </TypeWrap>
    )
}

export default Court