import React,{useCallback} from 'react'
import http from '../../../utils/https'
import useChangeForm from './useChangeForm'

import { 
    TypeWrap,
} from './publish'
const CaseId = (props) => {
    const { handleCaseidChange } = useChangeForm()

    const verify = useCallback((e) => {
        http.get(`http://114.67.247.63:8010/lawyer/noticeUpload/${e.target.value}`)
        .then(res => { props.onCaseId(res.flag) })
        
        handleCaseidChange(e.target.value)
    })

    return (
        <TypeWrap>
            <label htmlFor='type'>案 &ensp;&ensp;&ensp; 号 :</label>
            <input type="text" id='type' placeholder='汉字、阿拉伯数字及括号组成' onBlur={verify}/>
        </TypeWrap>
    )
}

export default CaseId