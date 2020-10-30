import React,{ useCallback } from 'react'
import useChangeForm from './useChangeForm'
import { 
    TypeWrap,
} from './publish'
const Phoneid = (props) => {
    const {handlePhoneidChange} = useChangeForm()

    const changePhoneid = useCallback((e) => {
        handlePhoneidChange(e.target.value)
    })

    return (
        <TypeWrap>
            <label htmlFor='type'>手&ensp;机&ensp;号 :</label>
            <input type="text" id='type' placeholder='当事人手机号' onBlur={changePhoneid}/>
        </TypeWrap>
    )
}

export default Phoneid