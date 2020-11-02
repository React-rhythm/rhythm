import React,{Component} from 'react'
import {withRouter} from "react-router-dom"
import {NoticeItemWrap} from "./StyledNotice"


@withRouter
class NoticeItem extends Component{

    handleDetailClick = (notice) => {
        return () => {
          this.props.history.push("/msgdetail",{title:"消息详情",headbg:"#fff",color:"#000",...notice})
        }
    }
    render(){
       
        let {notice} = this.props
        let createTime = notice.createTime.slice(0,10)

        return (
            <NoticeItemWrap>
                <div className="title">
                    <span>{notice.status}</span>
                    <span>{createTime}</span>
                </div>
                <div className="content">
                    {notice.content}
                </div>
                <p className="more" onClick={this.handleDetailClick(notice)}>了解更多</p>
            </NoticeItemWrap>
        )
    }

}

export default NoticeItem