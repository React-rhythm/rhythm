import React,{useCallback} from 'react'
import useChangeForm from './useChangeForm'
import { 
    TypeWrap,
} from './publish'
const Party = (props) => {
    const {handleNoticeNameChange} = useChangeForm()
    
    const changeNoticeName = useCallback((e) => {
        handleNoticeNameChange(e.target.value)
    })
    
    return (
        <TypeWrap>
            <label htmlFor='type'>公&ensp;告&ensp;名 :</label>
            <input type="text" id='type' placeholder='请输入公告名' onBlur={changeNoticeName}/>
        </TypeWrap>
    )
}

export default Party