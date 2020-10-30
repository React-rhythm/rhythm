import React,{useCallback} from 'react'
import useChangeForm from './useChangeForm'
import { 
    TypeWrap,
} from './publish'
const Party = (props) => {
    const {handlePartyChange} = useChangeForm()
    
    const changeParty = useCallback((e) => {
        handlePartyChange(e.target.value)
    })
    
    return (
        <TypeWrap>
            <label htmlFor='type'>当&ensp;事&ensp;人 :</label>
            <input type="text" id='type' placeholder='请输入当事人' onBlur={changeParty}/>
        </TypeWrap>
    )
}

export default Party