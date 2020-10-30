import React,{ useCallback } from 'react'
import useChangeForm from './useChangeForm'
import { 
    TypeWrap,
} from './publish'
const Court = (props) => {
    const { handleCourtChange } = useChangeForm()

    const changeCourt = useCallback((e) => {
        handleCourtChange(e.target.value)
    })

    return (
        <TypeWrap>
            <label htmlFor='type'>法院名称 :</label>
            <input type="text" id='type' placeholder='请输入所在城市' onBlur={changeCourt}/>
        </TypeWrap>
    )
}

export default Court