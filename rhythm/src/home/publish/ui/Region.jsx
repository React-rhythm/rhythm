import React,{ useCallback } from 'react'
import useChangeForm from './useChangeForm'
import { 
    TypeWrap,
} from './publish'
const Region = (props) => {
    const { handleRegionChange } = useChangeForm()
    
    const changeRegion = useCallback((e) => {
        handleRegionChange(e.target.value)
    })

    return (
        <TypeWrap>
            <label htmlFor='type'>登报区域 :</label>
            <input type="text" id='type' placeholder='请输入登报区域' onBlur={changeRegion}/>
        </TypeWrap>
    )
}

export default Region
