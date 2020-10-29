import React from 'react'
import { 
    TypeWrap,
} from './publish'
const Phoneid = (props) => {
    return (
        <TypeWrap>
            <label htmlFor='type'>手&ensp;机&ensp;号 :</label>
            <input type="text" id='type' placeholder='当事人手机号'/>
        </TypeWrap>
    )
}

export default Phoneid