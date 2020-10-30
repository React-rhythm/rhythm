import React from 'react'
import { 
    TypeWrap,
    Add,
} from './publish'
const CaseImg = (props) => {
    return (
        <Add>
            <p>公告照片 :</p>
            <label htmlFor="imgFile"></label>
            <input type="file" id='imgFile'/>
        </Add>
    )
}

export default CaseImg