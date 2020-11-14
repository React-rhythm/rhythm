import React,{ useCallback } from 'react'
import useChangeForm from './useChangeForm'
import { 
    TypeWrap,
} from './publish'
const Phone = (props) => {
    const {handlePhoneChange} = useChangeForm()

    const changePhone = useCallback((e) => {
        handlePhoneChange(e.target.value)
    })

    return (
        <TypeWrap>
            <label htmlFor='type'>手&ensp;机&ensp;号 :</label>
            <input type="text" id='type' placeholder='当事人手机号' onBlur={changePhone}/>
        </TypeWrap>
    )
}

export default Phone