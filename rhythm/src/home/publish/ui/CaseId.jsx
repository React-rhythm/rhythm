import React,{useCallback} from 'react'
import http from '../../../utils/https'
import useChangeForm from './useChangeForm'

import { 
    TypeWrap,
} from './publish'
const CaseId = (props) => {

    const { handleCaseidChange } = useChangeForm()

    const verify = useCallback((e) => {
        http.get('http://10.9.70.205:8080/lawyer/noticeUpload/1234')
        .then(res => { console.log(res); })
        // console.log(1)
        handleCaseidChange(e.target.value)
    })

    return (
        <TypeWrap>
            <label htmlFor='type'>案 &ensp;&ensp;&ensp; 号 :</label>
            <input type="text" id='type' placeholder='中文汉字、阿拉伯数字及括号组成' onBlur={verify}/>
        </TypeWrap>
    )
}

export default CaseId