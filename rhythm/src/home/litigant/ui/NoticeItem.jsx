import React from 'react'
import {LiWrap} from "./StyledLitigant"
import {useHistory} from "react-router-dom"
const  NoticeItem  = (props) => {
   
    const history = useHistory()

    const handleGotoDetail = () => {
        history.push("/noticedetail",{})
    }
    return (
        <LiWrap 
             onClick={() => handleGotoDetail()}
            >
            <div>
            <h2>公告名称:公司法人变更</h2>
                <p>公告类别:开庭传票</p>
                <p>当事人:<span>欧阳三三 </span></p>
                <p>案号:(2017)桂0602民初668号 </p>
            </div>
            <img src="http://via.placeholder.com/80x80" alt=""/>
        </LiWrap>
    )
    
}
export default NoticeItem