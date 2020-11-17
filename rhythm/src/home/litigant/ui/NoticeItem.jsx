import React from 'react'
import {LiWrap} from "./StyledLitigant"
import {useHistory} from "react-router-dom"
const  NoticeItem  = (props) => {
//    console.log(props.notice)
   const notice = props.notice
    const history = useHistory()

    const handleGotoDetail = () => {
        history.push("/noticedetail",notice)
    }
    return (
        <LiWrap 
             onClick={() => handleGotoDetail()}
            >
            <div>
            <h2>公告名称:公司法人变更</h2>
                <p>公告类别:{notice.type}</p>
                <p>当事人:<span>{notice.party} </span></p>
                <p>案号:{notice.caseid} </p>
            </div>
            <img src={notice.picture} alt=""/>
        </LiWrap>
    )
    
}
export default NoticeItem