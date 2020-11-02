import React,{ useCallback } from 'react'
import useChangeForm from './useChangeForm'
import { 
    TypeWrap,
} from './publish'
const Idcard = (props) => {
    const { handleIdcardChange } = useChangeForm()
    const changeIdcard = useCallback((e) => {
        handleIdcardChange(e.target.value)
    })
    return (
        <TypeWrap>
            <label htmlFor='type'>身份证号 :</label>
            <input type="text" id='type' placeholder='当事人身份证号' onBlur={changeIdcard}/>
        </TypeWrap>
    )
}

export default Idcard