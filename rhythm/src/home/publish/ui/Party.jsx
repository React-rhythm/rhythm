import React from 'react'
import { 
    TypeWrap,
} from './publish'
const Party = (props) => {
    return (
        <TypeWrap>
            <label htmlFor='type'>当&ensp;事&ensp;人 :</label>
            <input type="text" id='type' placeholder='请输入当事人'/>
        </TypeWrap>
    )
}

export default Party