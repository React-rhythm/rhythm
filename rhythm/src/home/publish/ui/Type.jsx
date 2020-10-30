import React, { useCallback } from 'react'
import useChangeForm from './useChangeForm'
import { 
    TypeWrap,
} from './publish'

const Type = (props) => {
    const { handleTypeChange } = useChangeForm()

    const changeType = useCallback((e)=>{
        handleTypeChange(e.target.value);
    })
    return (
        <TypeWrap>
            <label htmlFor='type'>公告类别 :</label>
            <input type="text" id='type' placeholder='请输入公告类型' onBlur={changeType}/>
        </TypeWrap>
    )
}

export default Type