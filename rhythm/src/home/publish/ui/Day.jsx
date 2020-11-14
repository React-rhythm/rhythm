import React, { useCallback } from 'react'
import useChangeForm from './useChangeForm'
import { 
    TypeWrap,
} from './publish'

const Day = (props) => {
    const { handleDayChange } = useChangeForm()

    const changeDay = useCallback((e)=>{
        handleDayChange(e.target.value);
    })
    return (
        <TypeWrap>
            <label htmlFor='type'>登报时间 :</label>
            <input type="text" id='type' placeholder='请输入公告类型' onBlur={changeDay}/>
        </TypeWrap>
    )
}

export default Day