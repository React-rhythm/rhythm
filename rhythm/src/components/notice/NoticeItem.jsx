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
      
        var time = new Date(notice.time)
        console.log(time.getFullYear())
        console.log(time.getMonth())
        console.log(time.getDate())
        let createTime = time.getFullYear()+ "-"+ + time.getMonth() + 1 + "-"+ + time.getDate()

        return (
            <NoticeItemWrap>
                <div className="title">
                    <span>{notice.flag === 1? "已读" : "未读"}</span>
                    <span>{createTime}</span>
                </div>
                <div className="content">
                    {notice.msg}
                </div>
                <p className="more" onClick={this.handleDetailClick(notice)}>了解更多</p>
            </NoticeItemWrap>
        )
    }

}

export default NoticeItem