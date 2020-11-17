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

 changeTime(time){
    var commonTime = "";
    if(time){
        var unixTimestamp = new Date(time*1) ;
        commonTime = unixTimestamp.toLocaleString();
    }
     return commonTime;
}

    render(){
       
        let {notice} = this.props
      
        let createTime  = this.changeTime(notice.time)

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